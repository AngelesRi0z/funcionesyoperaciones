//Función que tendrá como parámetros dos valores, sumarlos, restarlos, dividirlos, multiplicarlos y elevar al cuadrado el resto(residuo de la div), para luego dichos parámetros aumentarles 1 y restarles 1 a ambos.

function operadores(a,b){
 suma=a+b;
 console.log("suma:"+suma);

 resta=a-b;
 console.log("resta:"+resta);

 division=a/b;
 console.log("division:"+division);

 multiplicacion=a*b;
 console.log("multiplicacion:"+a*b);

 resto=a%b;
 console.log("Cuadrado del resto:"+(resto*resto));

 a++;
 console.log("mas 1: "+a);

 a--;
 a--;
console.log("Menos 1: "+a);

b++;
 console.log("mas 1: "+b);

 b--;
 b--;
console.log("Menos 1: "+b);

}
