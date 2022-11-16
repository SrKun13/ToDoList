class Main {

    /**
     *Developer name
     *@author Gerard Corral 
     * @constructor
     */
    constructor(){
        

    }/**
     *
     * @param {string} palabra function that return a variable with string in it
     * @returns {string}
     */
    funcionprueba(palabra){
        palabra = "Prueba";
        return palabra;

    }

    /**
     * 
     * @param {string} valor function that recive the information from a form of the HTML
     * @returns {string}
     */
    Createtask(valor){
        valor = document.getElementById("ftask").value;
        return valor;
    }


}