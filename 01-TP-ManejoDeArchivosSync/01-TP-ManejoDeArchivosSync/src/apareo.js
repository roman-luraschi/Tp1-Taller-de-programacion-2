/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let array = arrA.concat(arrB)
    array = array.filter((item, index)=> array.indexOf(item)===index)
    array = array.sort((a,b)=> a-b)
    console.log(array)
    return array
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
   let resultado =  arrs.reduce((acum, arrs)=> acum.concat(arrs));
   resultado.sort((a,b)=>a-b)
   let arrayResult = Array.from(new Set(resultado)) 
//    console.log(Array.from(new Set(resultado)))
   return arrayResult
}

// exportar ambas funciones
export default{
    combinarDosArrays,
    combinarNArrays
}