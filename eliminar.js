//4to commit "se cambia el conslole.log de encontrar links por un retorno de archivo en .then"

//archivo mdLinks.js
//function
import fs from "fs";
import path, { resolve } from "path";

export const comprobarRutas = (doc)=>{
  return new Promise((resolve, reject) => {
  // console.log(doc, options);
  //identificar si la ruta existe
  if (fs.existsSync(doc)) {
    // console.log("El archivo EXISTE!", );
    // es absoluta???
    const docAbsoluto = path.resolve(doc);
    // console.log(docAbsolute)
    // es md???
    if (path.extname(docAbsoluto) === ".md") {
      resolve(docAbsoluto);
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

export const encontrarLinks = (archivo) => {

  
};

export const comprobarLinks = (doc) => {
  //aqui se llamaran
};

export const mdLinks = (doc) => {
  return new Promise((resolve, reject) => {
    comprobarRutas(doc)
    .then((archivo) => {
      return encontrarLinks(archivo)
    })
    .then(links =>{
     console.log(links)
    })
    .catch(error=>reject(console.log("no se pudo llevar a cabo este proceso")))
  });
};
// modules.exports = () => {

// }

//+++++++++++++++++++++++

//3er commit "se agrega funcion mdLinks con el retorno de la nueva promesa"

//function
import fs from "fs";
import path, { resolve } from "path";

export const comprobarRutas = (doc)=>{
  return new Promise((resolve, reject) => {
  // console.log(doc, options);
  //identificar si la ruta existe
  if (fs.existsSync(doc)) {
    // console.log("El archivo EXISTE!", );
    // es absoluta???
    const docAbsoluto = path.resolve(doc);
    // console.log(docAbsolute)
    // es md???
    if (path.extname(docAbsoluto) === ".md") {
      resolve(docAbsoluto);
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
    comprobarRutas(doc)
    .then((archivo) => {
      console.log(archivo)
    })
    .catch(error=>reject(console.log("no se pudo llevar a cabo este proceso")))
  });
};
// modules.exports = () => {

// }


//++++++++++

//2do commit "creando tres funciones basado en diagrama: comprobarR, encontrarL y comprobarL. probando procces.arv en node con index.js"
//function
import fs from "fs";
import path, { resolve } from "path";

export const comprobarRutas = (doc)=>{
  return new Promise((resolve, reject) => {
  // console.log(doc, options);
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
    comprobarRutas(doc)
    .then((archivo) => {
      console.log(archivo)
    })
  });
};
// modules.exports = () => {

// }

                      
//++++++++

//1er commit  "agregando console.log a secciones de diagrama en archivo mdlinks.js y considerando process.argv en node con archivo index.js"

//function
import fs from "fs";
import path, { resolve } from "path";

export const mdLinks = (doc) => {
  // console.log(doc, options);
  //return new Promise((resolve, reject) => {
  //identificar si la ruta existe
  if (fs.existsSync(doc)) {
    // console.log("El archivo EXISTE!", );
    // es absoluta???
    const docAbsolute = path.resolve(doc);
    // console.log(docAbsolute)
    // es md???
    if (path.extname(doc) === ".md") {
      console.log(doc);
      // para leer el contendio usar docAbsolute
    } else {
      console.log("no se encontraron archivos md");
    }
  } else {
    console.log("El archivo NO EXISTE!");
    // reject('Invalido El archivo NO EXISTE!')
  }
  // });
};



// modules.exports = () => {

// }



//++++++++


///////////////////////////////////////////////
//2do commit "creando tres funciones basado en diagrama: comprobarR, encontrarL y comprobarL. probando procces.arv en node con index.js "
//archivo indexedDB.js


//Desde este archivo debes exportar una función (mdLinks).
//comanlo
import {mdLinks} from "./mdLinks.js"; // requiere
//module.exports = () => {
  // ...
//};
//console.log(process.argv)
mdLinks(process.argv[2], true)
//.catch((err)=>console.log(err))
//.then((res)=>console.log(res))
//console.log("hola")
//opciones aqui de cli

//++++++++++++

//1er commit "agregando console.log a secciones de diagrama en archivo mdlinks.js y considerando process.argv en node con archivo index.js"

//Desde este archivo debes exportar una función (mdLinks).
//comanlo
import {mdLinks} from "./mdLinks.js"; // requiere
//module.exports = () => {
  // ...
//};
console.log(process.argv)
mdLinks('README.md', true)
.catch((err)=>console.log(err))
.then((res)=>console.log(res))
console.log("hola")

//++++++++

