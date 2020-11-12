// En esta práctica debéis crear una interfaz con el nombre "UserData" en el archivo "user-data.ts". En esta interfaz, debéis añadir las propiedades "name", "age" y "phone" con los tipos cadena de texto, número y número respectivamente. Tenéis que exportar esta interfaz.
// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.
// Luego, debéis crear una función llamada "getData" que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.
// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".
// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.
// Ánimo que ya lo tenéis!

//Se importa la interfaz
import { UserData } from "./user-data";

//Se le aplica la interfaz a un usuario
let user: UserData;

//Funcion que verifica si el parametro introducido es de tipo number o no
function esNumero<T>(arg: T): boolean {
  return typeof arg === "number";
}

//Funcion que utiliza la salida de la funcion anterior para determinar si es numero o no e imprimir el mensaje
function getData<T>(arg: T): void {
  if (!esNumero(arg)) {
    console.log("Nombre: " + arg);
  } else {
    console.log("Edad: " + arg);
    console.log("Telefono: " + arg);
  }
}

//Se Cambian los valores del usuario que hemos creado
user = {
  name: "Curro",
  age: 19,
  phone: 685145880
};

//Se llama a los atributos del usuario y se imprime por pantalla
getData(user.name);
getData(user.age);
getData(user.phone);
