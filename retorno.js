//Realizar función que use como parametros, el nombre, el apellido y la edad y entrege los datos y el cuadrado de su edad.
function persona (nombre,apellido, edad, cuadradoDeEdad){
return("Bienvenidos: "+nombre+" "+apellido+", tienes: "+edad+ " años "+" y el cuadrado de tu edad es: "+edad*edad) ;
}
console.log(persona("Angeles","Rios",29,));

//Ejemplo 1:
//Declaracion de funcion
function nombre(){
  console.log('Angeles');
}
//Llamado de funcion
nombre();


//Ejemplo 2:
//Declaración de función
function nombre(){
  return ('Angeles');
}
//Llamado de la función
console.log(nombre());



//Ejemplo 3:
//Función con parámetros
function persona(nombre, apellido){
  return ('Bienvenido: '+ nombre+ ' '+ apellido);
  }
  //Llamado de la función
  console.log(persona('Angeles','Rios'));

//Ejemplo 4:
//Función
function datos(nombre='Angeles', apellido = 'Rios'){
  return ('Bienvenido'+' '+ nombre +' '+ apellido);
}
//Llamado de función
console.log(datos());

//Ejemplo 5:
//Función como expresión
const potencia = function (a){
  return a*a;
}
console.log(potencia(4))

//Ejemplo 6:
//Función IIFEs (funciones invocadas inmediatamente)
(function(){
  console.log('Angeles');
})();

//Ejemplo 7:
//Función IIFEs con parámetros
(function(apellido){
  console.log('Angeles'+' '+apellido);
})('Rios'); 

