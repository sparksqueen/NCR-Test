
var A = [1, 4, 5, 8];
var B = [4, 6, 9, 10];
var C = [4, 6, 7, 10, 2];



var N = 0; //recorre en pares A & B
var final = C.length;
var I = 0; //recorre C
var contador = 0;
var clavo = 0;


while(I<final){
        while(N<A.length && contador<A.length){
            if(A[N] <= C[I] && C[I] <= B[N]) {
                console.log("Clava");

                N++;
                contador++;
            }else{console.log("No Clava");
                N++;
            }

   //     if(N>= 1) {
    //       clavo++;
      //      }
        }
        N=contador;
        I++;
        
        }
        if(contador==A.length){
            console.log("Todos los clavos se han clavado con los primeros " + contador + " clavos");

        }else if(contador<A.length){
            console.log("No se han podido clavar todos los clavos");
        }
    
    

