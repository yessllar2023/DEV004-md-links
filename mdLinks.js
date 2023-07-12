//function
import fs from "fs";
import path, { resolve } from 'path'
export const mdLinks = (doc, options) => {
  // console.log(doc, options);

  return new Promise((resolve, reject) => {
    //identificar si la ruta existe
    if (fs.existsSync(doc)) {
    //   console.log("El archivo EXISTE!", );
    // es absoluta???
      const docAbsolute = path.resolve(doc)
      // es md???
      if(path.extname(doc)=== '.md'){
        //resolve(docAbsolute)
     
        // comentar resolve L16
        // investigar como se lee el contenido de un achivo en node.js
        // para leer el contendio usar docAbsolute
      }else{
        reject('Invalido')
      }
      
      
    } else {
    //   console.log("El archivo NO EXISTE!");
      reject('Invalido El archivo NO EXISTE!')

    }
  });
};

// modules.exports = () => {

// }
