//HISTORIAS DE USUARIO
//como amante de anagramas quiero tener el anagrama de una palabra corta para no tener que hacer lo manualmente
//Criterios - para cadena de 1 letra devolver misma letra
//Para palabras devolver palabra al reves
//Como amante de anagramas quiero tener todos loa anagramas de una palabra para poder jugar mejor
//Para palabras con 3 letras devolver 6 anagramas
import anagrama from "./anagrama.js"
describe("Deberia devolver la misma letra para cadena de 1 letra", ()=>{
    it("Deberia devolver cadena vacia si se manda cadena vacia",()=>{
        expect(anagrama("")).toEqual("");
    });
    it("Deberia devolver A si se manda A",()=>{
        expect(anagrama("A")).toEqual("A");
    });
});

describe("Deberia devolver 1 ANAGRAama para palabras ", ()=>{
    it("Deberia devolver EA para AE",()=>{
        expect(anagrama("AE")).toEqual("EA");
    });

});

