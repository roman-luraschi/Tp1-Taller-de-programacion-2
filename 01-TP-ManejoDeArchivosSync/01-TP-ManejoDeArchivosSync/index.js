import fu from './src/utils/fileUtils.js';
import tu from './src/utils/transformUtils.js';
import apareo from './src/apareo.js'
// leo los 4 archivos a memoria
//fu.agregarTexto('texto-3', 'esto es el texto 3, 12, a13')
//fu.agregarTexto('texto-4', 'esto es el texto 4, 90, b20')
console.log('lee el primer txt')
let primerTxt = fu.leerArchivoComoString('C:/Users/Ogepu/Desktop/01-TP-ManejoDeArchivosSync/01-TP-ManejoDeArchivosSync/in/10NumerosOrdenadosEntre1y50(setA).in')
console.log('lee el segundo txt')
let segunTxt = fu.leerArchivoComoString('C:/Users/Ogepu/Desktop/01-TP-ManejoDeArchivosSync/01-TP-ManejoDeArchivosSync/in/10NumerosOrdenadosEntre1y50(setB).in')
console.log('lee el tercer txt')
let tercerTxt = fu.leerArchivoComoString('C:/Users/Ogepu/Desktop/01-TP-ManejoDeArchivosSync/01-TP-ManejoDeArchivosSync/in/imparesOrdenadosEntre1y999.in')
console.log('lee el cuarto txt')
let cuartoTxt = fu.leerArchivoComoString('C:/Users/Ogepu/Desktop/01-TP-ManejoDeArchivosSync/01-TP-ManejoDeArchivosSync/in/paresOrdenadosEntre2y1000.in')
console.log('--------------------------------------------')

// preparo los 4 arrays a partir de los archivo leidos
//tu.transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10','|' )
//tu.transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10])
console.log('String a array de numeros')
console.log('--------------------------------------------')
 let primerArray = tu.transformarStringEnArrayDeNumeros(primerTxt, ',')
 let segunArray = tu.transformarStringEnArrayDeNumeros(segunTxt, ',')
 let tercerArray = tu.transformarStringEnArrayDeNumeros(tercerTxt, ',')
 let cuartoArray = tu.transformarStringEnArrayDeNumeros(cuartoTxt, ',')
 console.log('--------------------------------------------')
// combino los primeros dos arrays
console.log('combina los arrays')
console.log('--------------------------------------------')
let primerYSegundoArrays = apareo.combinarDosArrays(primerArray,segunArray)
let tercerYCuartoArrays = apareo.combinarDosArrays(tercerArray,cuartoArray)
console.log('----------------------------------------------')
console.log('combina todos los arrays')
console.log('--------------------------------------------')
let TodoJunto = [primerYSegundoArrays, tercerYCuartoArrays]


//apareo.combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]])
// combino los cuatro arrays
console.log(apareo.combinarNArrays(TodoJunto))