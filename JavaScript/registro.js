import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage} from './showMessage.js'

// se crea una constante para el formulario de la pagina de sesion 
const signupForm = document.querySelector("#formulario_registro");

 // se crea un evento para el submit 
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // se crea unas constantes para la informacion del correo y la contraseña
  const name = signupForm["nombre"].value;
  const email = signupForm["correo"].value;
  const password = signupForm["Contraseña"].value;

  // se crea un console.log para verificar por consola si se guardo los datos
  console.log( name, email, password);

  // se crea un try catch para para la validación de errores
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
      // se llama a showMessage para cuando digiten un dato no correpsondiente salga un mensaje
    showMessage("Datos guardados correctamente");

  } catch (error) {
    // console.log(error.message);
    // console.log(error.code);

    if (error.code === "auth/email-already-in-use") {
        showMessage("Correo ya registrado", "error")
    } else if (error.code === "auth/invalid-email") {
        showMessage("Correo invalido", "error"); 
    } else if (error.code === "auth/weak-password") {
        showMessage("Contraseña es debil", "error");
    }
  }
});
