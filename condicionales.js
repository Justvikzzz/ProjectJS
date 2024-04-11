






let email = "mxmlnlondono@gmail.com";

let password = "Vikzzz";




let userEmail = prompt("Ingrese su correo registraedo");

let userPassword = prompt("Ingrese su contraseña registrada");



if(email.match(userEmail) && password.match(userPassword)){

    document.write("Bienvenido al sistema")
}else{
    alert("Valide sus credenciales")
}


