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
        return docAbsoluto;
        // para leer el contendio usar docAbsolute
      } else {
        console.log("no se encontraron archivos md");
      }
    } else {
      console.log("El archivo NO EXISTE!");
      // reject('Invalido El archivo NO EXISTE!')
    }
  });
};

export const encontrarLinks = (doc) => {};

export const comprobarLinks = (doc) => {
  //aqui se llamaran
};

export const mdLinks = (doc) => {
  return new Promise((resolve, reject) => {
    comprobarRutas(doc).then((archivo) => {
      console.log(archivo);
    });
  });
};
// modules.exports = () => {
// }
