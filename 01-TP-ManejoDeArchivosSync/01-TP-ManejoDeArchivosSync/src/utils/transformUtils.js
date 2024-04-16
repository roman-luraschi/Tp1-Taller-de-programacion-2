/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    let array = str.split(separador)
    //let numeros = array.map(part => part.trim()).filter(part => /^\d+$/.test(part)).map(Number);
    let numeros = array.map(Number)
    numeros = numeros.filter(numero => !isNaN(numero));
    console.log(numeros)
    return numeros
    
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    const cadena = arr.join(separador);
    console.log(cadena)
    return cadena
}

// exportar ambas funciones
export default{
    transformarArrayDeNumerosAUnSoloString,
    transformarStringEnArrayDeNumeros
}