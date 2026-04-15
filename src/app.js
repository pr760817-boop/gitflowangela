export function saludar(nombre) {
  return "Hola " + nombre + ", bienvenido a aplicacion de Angela Flow!";
}

export function despedir(nombre) {
  return "Hasta pronto, " + nombre + " ¡Angela Flow!";
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    message: "Sistema funcionando correctamente"
  };
}

export function healthCheck() {
  return "OK";
}
