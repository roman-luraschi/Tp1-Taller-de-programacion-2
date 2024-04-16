import fs from 'fs'
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */ 
function leerArchivoComoString(ruta) {
    try {
        const data = fs.readFileSync(ruta, 'utf-8')
        console.log(data)
        return data   
    } catch (error) {
        
    }
    
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
   try {
    fs.writeFileSync(ruta, texto)
    return texto
   } catch (error) {
    console.log(error)
   }
    
}

// exportar ambas funciones
export default  {
    leerArchivoComoString,
    escribirTextoEnArchivo,
}