// se crea variables para el calendario

let mothNames =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = mothNames[monthNumber]; // se agrega mes al calendario
year.textContent = currentYear.toString(); // Se agrega año al calendario

// se utiliza la funcion EventListener

eventListener();

function eventListener (){
    prevMonthDOM.addEventListener('click', lastMonth);
    nextMonthDOM.addEventListener('click', nextMonth);
}

// se encarga de escirbir los meses del año

const writeMonth = (month) => {

    for(let i = startDay(); i>0; i--){
        dates.innerHTML +=` <div class="calendar_date calendar_item calendar_last-days">
        ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar_date calendar_item calendar_today">${i}</div>`;
        }else {
            dates.innerHTML += ` <div class="calendar_date calendar_item">${i}</div>`;
        }
    }
}

// se encarga de escribir si son los 30 o 31 dias del mes

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month ==11) {
        return 31;
    } else if ( month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
        return isLeap() ? 29:28;
    }

}

// Comprueba cuando el años es bisiesto
const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

// escribe los dias de las semanas
const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1; // Empieza el lunes
}

//Retrocede un mes
function lastMonth (){
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

// Avanza un mes
function nextMonth (){
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

// Marca la nueva fecha al mover el calendario
const setNewDate = () => {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = mothNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);