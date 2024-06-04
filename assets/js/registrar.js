var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var contra = document.getElementById("password");
var apellido = document.getElementById("ape");
var rut = document.getElementById("ru");



const formulario = document.getElementById("form");
var msj = document.getElementById("warnings");

formulario.addEventListener('submit',e =>{
    e.preventDefault();
    let msjMostrar ="";
    let enviar = false;

    let validarcorreo = /\w+@\w+\.+[a-z]/;
    let contraMayus = /[A-Z]/;
    let contraMinus = /[a-z]/;
    let contraNum = /[0-9]/;
    let contraCesp = /(?=.*[@#$%^&+=.()])/;

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
        enviar = true;
    }

    var letra = nombre.value.charAt(0);
    if(!esMayuscula(letra)){
        msjMostrar += "<br>El nombre debe comenzar con mayúscula";
        enviar = true;
    }

    if(!validarcorreo.test(correo)){
        msjMostrar = msjMostrar + "<br>El correo no es válido.";
        enviar = true;
    }
    if(contra.value.length < 6 || contra.value.length > 10){
        msjMostrar = msjMostrar + "<br>La contraseña debe tener entre 6 y 15 caracteres.";
        enviar = true;
    }
    
    if(!contraMayus.test(contra)){
        msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos una letra mayúscula.";
        enviar = true;
    }
    if(!contraMinus.test(contra)){
        msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos una letra minúscula.";
        enviar = true;
    }
    if(!contraNum.test(contra)){
        msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos un número.";
        enviar = true;
    }
    if(!contraCesp.test(contra)){
        msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos un caracter especial.";
        enviar = true;
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "Enviado";
    }


});


function esMayuscula(letra){
    if(letra == letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}