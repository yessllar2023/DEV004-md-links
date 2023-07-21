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
//aqui array con objetos?
//los links son extraidos a un objeto y se almacena el objeto en un arreglo.
// leer el archivo solo es un complemento de encontrar links.
// Para encontrar los links es necesario primero leer el archivo, y mientras lo estas leyendo vas buscando los links.
// en la función de comprobar links  le pides que lea el archivo, y dentro de esa acción (o sea los parentesis) le dices que busque los links, 
//ya sea con marked o con un regex o con cualquiera de las opciones que prefieras.
//¿como extraerlos? leemos el archivo con readflie asincrono, ques es readfile sin palabra sync
//redfile es un metodo de fs
//t-odo lo asincrono debe ir en una promesa.

//"Por poner un ejemplo, el parseado (análisis) del markdown para extraer los links podría plantearse //podríamos usar una combinación de varios módulos (podría ser válido transformar el markdown a HTML usando 
 // algo como marked y de ahí extraer los link con una librería de DOM como JSDOM o Cheerio entre otras)."
 //usar marked solamente, fue un poco dificil porque la documentación no es tan clara, pero es mas claro que con un regex 

 export const encontrarLinks = (archivo) => {
};


//validacion
//¿contiene links?
//los links (todos) estan dentro de un arreglo
//validamos los links
export const comprobarLinks = (links) => {
  //aqui se llamaran
};

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