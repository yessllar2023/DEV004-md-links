//archivo mdLinks.js
import fs from "fs";
import path, { resolve } from "path";

export const comprobarRutas = (doc) => {
  return new Promise((resolve, reject) => {
  //identificar si la ruta existe
  if (fs.existsSync(doc)) {
    // console.log("El archivo EXISTE!", );
    // es absoluta???
    const docAbsoluto = path.resolve(doc);
    // console.log(docAbsolute)
    // es md???
    if (path.extname(docAbsoluto) === ".md") {
      resolve(docAbsoluto);
      // para leer el contenido usar docAbsolute
    } else {
      console.log("no se encontraron archivos md");
    }
  } else {
    //console.log("El archivo NO EXISTE!");
   reject('Invalido El archivo NO EXISTE!')
  }
  });
};

//aqui array con objetos
//los links son extraidos a un objeto y se almacena el objeto en un arreglo.
//¿como extraerlos?
//export const encontrarLinks = (archivo) => {
//};

//validacion
//¿contiene links?
//los links (todos) estan dentro de un arreglo
//validamos los links
//export const comprobarLinks = (links) => {
  //aqui se llamaran
//};

export const mdLinks = (doc) => {
  return new Promise((resolve, reject) => {
    comprobarRutas(doc)
    .then((archivo) => {
      //activarlos solo al ser creados
     // return encontrarLinks(archivo)
    })
    //.then(links =>{
      //dar retorno con resolve solo al ser creada comprobarlinks
    // console.log(links)
    //})
    .catch(error=>reject(console.log("no se pudo llevar a cabo este proceso")))
  });
};
// modules.exports = () => {
//}