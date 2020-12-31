var variable="";
var indexPregunta=0;
var score=0;
AFRAME.registerComponent('markerhandler',{
    init: function(event){
        var marcador= this.el;
        marcador.addEventListener('markerFound',()=>{
            console.log(marcador.getAttribute('id'));
            actual=marcador.getAttribute('id');
            variable=actual;
            traerDatos(actual);
        })
    }
});

window.onload = function(){
    var botones= document.getElementsByClassName("list-group-item");
    for(let i=1;i<botones.length;i++){
        botones[i].addEventListener('click', function(){
            eliminarSeleccion(botones);
            agregarEstilos(this);
            console.log(this.textContent)
        })
    }
}

function eliminarSeleccion(arreglo){
    for(let i=1;i<arreglo.length;i++){
        if(arreglo[i].classList.contains('active')){
            arreglo[i].classList.remove('active');
        }
    }
}
function agregarEstilos(boton){
    boton.classList.add('active');
    var valor= parseInt(boton.value);
    console.log(valor);
    indexPregunta=valor;
}

function getVariable(){
    return variable;
}

function getNumeroPregunta(){
    return indexPregunta;
}

function getRespuesta(){
    return document.getElementById("texto").value;
}

function obtenerPuntaje(dato){
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 
    var barraPuntuacion=document.getElementById("score");
    var respuestaTexto=removeAccents(getRespuesta().toLowerCase());
    var respuestaJSON=removeAccents(dato.respuesta.toLowerCase());
    console.log(dato)
    if(respuestaTexto==respuestaJSON){
        score+=dato.puntaje;
        barraPuntuacion.textContent=score;
    }
    else{
        for(let i=0;i<dato.cercanas.length;i++){      
            if(respuestaTexto==removeAccents(dato.cercanas[i].toLowerCase())){
                score+=dato.puntaje-((i+1)*10);
                barraPuntuacion.textContent=score;
            }
        }
    }
}

function comprobarRespuesta(){
    const xhttp = new XMLHttpRequest();
    var numeroPregunta=getNumeroPregunta();
    xhttp.open('GET','../datos/respuestas.json',true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for(let i=0;i<data[0].items.length;i++){
                if(data[0].items[i].item==getVariable()){
                    index=i;
                    i=data[0].length;
                }
            }
            console.log(numeroPregunta);
            var dato=data[0].items[index].respuestas[numeroPregunta];
            console.log(dato);
            obtenerPuntaje(dato);
        }
    }
}

function traerDatos(figura){
    const xhttp = new XMLHttpRequest();
    var lista= document.getElementsByClassName("list-group-item");
    var index=0;
    xhttp.open('GET','../datos/preguntas.json',true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let data = JSON.parse(this.responseText);
            for(let i=0;i<data[0].items.length;i++){
                if(data[0].items[i].item==figura){
                    index=i;
                    i=data[0].items.length;
                }
            }
            for(let i=0;i<4;i++){
                lista[i+1].textContent=data[0].items[index].preguntas[i].pregunta;
            }
        }
    }
}