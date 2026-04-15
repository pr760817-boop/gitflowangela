import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
  restar
} from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // TEST 1
  const r1 = saludar("felipe");
  if (r1.includes("felipe")) {
    console.log("Test 1 Pasado: saludar funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 1 Fallido:", r1);
    fallidas++;
  }

  // TEST 2
  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("Test 2 Pasado: estadoSistema funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 2 Fallido:", actualEstado);
    fallidas++;
  }

  // TEST 3
  const r3 = sumar(5, 3);
  if (r3 === 8) {
    console.log("Test 3 Pasado: sumar funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 3 Fallido:", r3);
    fallidas++;
  }

  // TEST 4
  const r4 = restar(5, 3);
  if (r4 === 2) {
    console.log("Test 4 Pasado: restar funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 4 Fallido:", r4);
    fallidas++;
  }

  // RESULTADOS
  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
