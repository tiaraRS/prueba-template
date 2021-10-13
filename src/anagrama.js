
function anagrama(cadena){
    if (cadena.length==2) return cadena.split("").reverse().join("")
    return cadena;
}

export default anagrama;