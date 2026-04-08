import {saludar, despedir, estadoSistema} from "../src/app.js"

function ejecutarPruebas() {
let pasadas = 0;
let fallidas = 0;

const r1 = saludar("felipe")
if (r1.includes("felipe")) {
console.log ("Test 1 Pasado: funcion saludar en felipe es correcta")
pasadas++;  
} else {
console.log("Test 1 Fallido: ", r1);
fallidas++;
}
const actualEstado = estadoSistema();
if (actualEstado.estado === "activo"){
console.log ("Test 2: Pasado: estadoSistemas() funciona en felipe");
pasadas++;
} else {
console.log ("Test 2 fallido: ", estado, "en felipe");
fallidas++;
}
console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
if(fallidas>0) process.exit(1);
}
ejecutarPruebas();