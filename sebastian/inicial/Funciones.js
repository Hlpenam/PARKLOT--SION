function(){
    var formulario =document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');
    
    var validarNombre = function(){
        
        if(formulario.nombre.value ==0){
            alert('completa el campo')
        }
    };
    
    var validar = function(){
        
        validarNombre();
    };
    formulario.addEventListener("submit",validar);
}