$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var contra = $("#password").val();
        var apellido =  $("#ape").val();

        var validarcorreo = /\w+@\w+\.+[a-z]/;
        var contraMayus = /[A-Z]/;
        var contraMinus = /[a-z]/;
        var contraNum = /[0-9]/;
        var contraCesp = /(?=.*[@#$%^&+=.()])/;

        let msjMostrar = "";
        let enviar = false;

        if(nombre.trim().length < 3 || nombre.trim().length > 20){
            msjMostrar = msjMostrar + "El nombre debe tener entre 3 y 20 caracteres.";
            enviar = true;
        }
        if(apellido.trim().length < 3 || apellido.trim().length > 20){
            msjMostrar = msjMostrar + "<br>El Apellido debe tener entre 3 y 20 caracteres.";
            enviar = true;
        }

        var letra = apellido.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El nombre debe comenzar con mayúscula.";
            enviar = true;
        }
        if(!esMayuscula(letra)){
            msjMostrar += "<br>El nombre debe comenzar con mayúscula.";
            enviar = true;
        }
        console.log("Validar email")
        console.log(validarcorreo.test(correo))
        if(!validarcorreo.test(correo)){
            msjMostrar = msjMostrar + "<br>El correo no es válido.";
            enviar = true;
        }
        if(contra.trim().length < 6 || contra.trim().length > 10){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener entre 6 y 15 caracteres.";
            enviar = true;
        }
        console.log("validar Mayuscula en la contraseña")
        console.log(contraMayus.test(contra))
        if(!contraMayus.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos una letra mayúscula.";
            enviar = true;
        }
        console.log("Validar minuscula en la contraseña")
        console.log(contraMinus.test(contra))
        if(!contraMinus.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos una letra minúscula.";
            enviar = true;
        }
        console.log("Validar numero en la contraseña")
        console.log(contraNum.test(contra))
        if(!contraNum.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos un número.";
            enviar = true;
        }
        console.log("Validar caracter especial en la contraseña")
        console.log(contraCesp.test(contra))
        if(!contraCesp.test(contra)){
            msjMostrar = msjMostrar + "<br>La contraseña debe tener por lo menos un caracter especial.";
            enviar = true;
        }

        if(enviar){
            $("#warnings").html(msjMostrar);
        }
        else{
            $("#warnings").html("Te has registrado con éxito!");
        }
        
      

    });   

    function esMayuscula(letra){
        console.log("Estoy aqui");
        console.log(letra);
        console.log(letra.toUpperCase());

        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }
    
    
    


});