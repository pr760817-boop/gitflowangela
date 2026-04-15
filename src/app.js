export function saludar(nombre){
  return "Hola " + nombre + ", bienvenido a mi aplicacion de Felipe!";
}

export function despedir(nombre){
  return "Hasta pronto, " + nombre + "! Felipe";
}

export function estadoSistema(){
  return {
    estado: "activo",
    version: "1.0.0",
    message: "sistema felipe funcionando correctamente"
  };
}

export function sumar(a, b){
  return a + b;
}

export function restar(a, b){
  return a - b;
}
export function factorial(n) {
  if (n < 0) {
    throw new Error("El factorial no existe para números negativos");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad
  };
}

