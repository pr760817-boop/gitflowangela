import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
<<<<<<< HEAD
  restar,
  factorial
} from "../src/app.js";

import assert from "assert";

=======
  restar
} from "../src/app.js";

>>>>>>> 1af8cf65fc59fa57f8929f36be9917900b1e4b6b
function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

<<<<<<< HEAD
  // Test 1
  const r1 = saludar("angela");
  if (r1.includes("angela")) {
    console.log("Test 1 pasado");
    pasadas++;
  } else {
    console.log("Test 1 fallido:", r1);
    fallidas++;
  }

  // Test 2
  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("Test 2 pasado");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado);
    fallidas++;
  }

  // Test 3
  const r3 = sumar(5, 3);
  if (r3 === 8) {
    console.log("Test 3 pasado");
    pasadas++;
  } else {
    console.log("Test 3 fallido:", r3);
    fallidas++;
  }

  // Test 4
  const r4 = restar(5, 3);
  if (r4 === 2) {
    console.log("Test 4 pasado");
    pasadas++;
  } else {
    console.log("Test 4 fallido:", r4);
    fallidas++;
  }

  // Test factorial
  try {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);

    console.log("Test factorial pasado");
    pasadas++;
  } catch (error) {
    console.log("Error factorial:", error.message);
    fallidas++;
  }

  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);
=======
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
>>>>>>> 1af8cf65fc59fa57f8929f36be9917900b1e4b6b

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
