import {saludar, despedir, estadoSistema, sumar, restar} from "../src/app.js"

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
    console.log ("Test 2 Pasado: estadoSistema() funciona en felipe");
    pasadas++;
  } else {
    console.log ("Test 2 fallido: ", actualEstado, "en felipe");
    fallidas++;
  }

  const r3 = sumar(5, 3);
  if (r3 === 8) {
    console.log("Test 3 Pasado: funcion sumar correcta");
    pasadas++;
  } else {
    console.log("Test 3 Fallido:", r3);
    fallidas++;
  }

  const r4 = restar(5, 3);
  if (r4 === 2) {
    console.log("Test 4 Pasado: funcion restar correcta");
    pasadas++;
  } else {
    console.log("Test 4 Fallido:", r4);
    fallidas++;
  }

  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  if(fallidas > 0) process.exit(1);
}

ejecutarPruebas();
//nn