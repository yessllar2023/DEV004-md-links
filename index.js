//Desde este archivo debes exportar una función (mdLinks).
//comanlo
import {mdLinks} from "./mdLinks.js"; // requiere
//module.exports = () => {
  // ...
//};
mdLinks('README.md', true)
.catch((err)=>console.log(err))
.then((res)=>console.log(res))
console.log("hola")