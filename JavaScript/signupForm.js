// Se realiza importaciones de firebase
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage} from './showMessage.js'

const inicio = 'inicio.html';

// se crea una constante para el formulario de la pagina de sesion 
const signInForm = document.querySelector("#login-form");
 // se crea un evento para el submit 
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // se crea unas constantes para la informacion del correo y la contraseña
  const email = signInForm["login-correo"].value;
  const password = signInForm["login-password"].value;

  // se crea un try catch para para la validación de errores
  try {
    const Credentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(Credentials);
      // se llama a showMessage para cuando digiten un dato no correpsondiente salga un mensaje
    showMessage("Bienvenido " + Credentials.user.email)
    window.open(inicio);

  } catch (error) {
    if (error.code === "auth/wrong-password"){
      showMessage('Contraseña incorrecta', 'error')
    }else if (error.code === "auth/user-not-found") {
      showMessage('Correo no encontrado', 'error')
    } else {
      showMessage(error.message, 'error')
    }
  }
});

//usuario registrado en firebase 
// correo: l3ideradri4n@gmail.com contraseña: 123456
