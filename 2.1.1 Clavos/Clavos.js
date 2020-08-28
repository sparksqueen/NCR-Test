/*
El algoritmo planteado esta hecho para ser ejecutado desde la consola, o bien una terminal.
*/
var A = [1, 4, 5, 8];
var B = [4, 5, 9, 10];
var C = [4, 6, 7, 10, 2];

var N = 0; //recorre en pares A & B
var I = 0; //recorre C
var contador = 0;


   while(I<C.length && contador < A.length){
        while(N<A.length){

            if(A[N] <= C[I] && C[I] <= B[N]){
//           console.log("Clava");
            contador++;

//           }else{                          //Se deja comentado para revisar funcionamiento
//           console.log("No Clava");
            }
            N++;      
            }

        N = contador;
 //   console.log(N);
    I++;
    }

    if(contador==A.length){
    console.log("Todas las tablas se han clavado con los primeros " + I + " clavos.");
    } else {
        console.log("No se han podido clavar todos los clavos.")
    }



