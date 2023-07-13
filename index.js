//Desde este archivo debes exportar una función (mdLinks).
import { mdLinks } from "./mdLinks.js"; // requiere
//module.exports = () => {
// ...
//};
//console.log(process.argv)
mdLinks(process.argv[2], true);
//.catch((err)=>console.log(err))
//.then((res)=>console.log(res))
//console.log("hola")
//opciones aqui de cli?
