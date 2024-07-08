window.onclick = function estasAcciones() {
    idLuzRoja.classList.toggle("encendida") ;
    setTimeout(fnRoVe, 2000) ; //preparando para 3 segundos
}

function fnRoVe(){
    idLuzRoja.classList.remove("encendida") ;
    idLuzVerde.classList.add("encendida") ;
    setInterval (fnVeAm, 2000) ;
}

function fnVeAm(){
    idLuzVerde.classList.remove("encendida") ;    idLuzAmarilla.classList.add("encendida") ;
    setInterval (fnVeAm, 3000) ;

}

function fnAmRo(){
    idLuzAmarilla.classList.remove("encendida") ;
    idLuzRoja.classList.add("encendida") ;
    setInterval (fnAmRo, 1000) ;

}


