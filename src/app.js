export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a Coderider`;
}

export function despedir(nombre) {
  return `Adiós ${nombre}, hasta pronto`;
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.2.0",
    timestamp: new Date().toISOString()
  };
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function factorial(n) {
  if (n < 0) throw new Error("No se permiten negativos");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}