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
import { saludar, despedir, estadosistema, sumar, restar, healthCheck } from "../src/app.js";
import assert from "assert";
import { factorial } from "../src/app.js";

function ejecutarpruebas() {
    let pasadas = 0;
    let fallidas = 0;

    // Test 1
    const r1 = saludar("Raider");
    if (r1.includes("Raider")) {
        console.log("test 1 pasado");
        pasadas++;
    } else {
        console.log("test 1 fallido:", r1);
        fallidas++;
    }

    // Test 2
    const actualEstado = estadosistema();
    if (actualEstado.estado === "activo") {
        console.log("test 2 pasado");
        pasadas++;
    } else {
        console.log("test 2 fallido:", actualEstado);
        fallidas++;
    }

    // Test 3
    const resultadoSuma = sumar(2, 3);
    if (resultadoSuma === 5) {
        console.log("test 3 pasado");
        pasadas++;
    } else {
        console.log("test 3 fallido:", resultadoSuma);
        fallidas++;
    }

    // Test 4
    const resultadoResta = restar(5, 3);
    if (resultadoResta === 2) {
        console.log("test 4 pasado");
        pasadas++;
    } else {
        console.log("test 4 fallido:", resultadoResta);
        fallidas++;
    }

    // Test 5
    const health = healthCheck();
    if (health.status === "ok") {
        console.log("test 5 (healthCheck) pasado");
        pasadas++;
    } else {
        console.log("test 5 fallido:", health);
        fallidas++;
    }

    // Tests con assert (factorial)
    try {
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(0), 1);
        assert.strictEqual(factorial(1), 1);
        assert.strictEqual(factorial(-3), "No existe factorial para números negativos");
        assert.strictEqual(factorial(6), 720);

        console.log("✅ Tests de factorial pasaron");
        pasadas += 5;
    } catch (error) {
        console.log("❌ Error en factorial:", error.message);
        fallidas++;
    }

    console.log(\nResultados: ${pasadas} pasadas, ${fallidas} fallidas);

    if (fallidas > 0) process.exit(1);
}

ejecutarpruebas();
