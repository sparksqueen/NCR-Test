/* 
El algoritmo planteado esta hecho para ser ejecutado desde un navegador (posee prompt), con visibilidad de la consola.
Posee comentarios para imprimir variables de debug.
*/

var CadenaA = prompt("Introduzca el texto a analizar");
	CadenaA = CadenaA.toLowerCase();
	
var CadenaB = prompt("Introduzca las letras que desea comprobar si estan dentro del texto");
	CadenaB = CadenaB.toLowerCase();
	LargoB= CadenaB.length;
	

var ArrayCadenaB= CadenaB.split(''); 	//separa la cadena en un array de caracteres
var CantidadLetras = ArrayCadenaB.length;




function permutaciones(PermutacionesDisponibles) { // esta funcion permite la permutacion de los caracteres y la creacion  
	const _permutaciones = [];						//de un nuevo array(object) donde se encuentran almacenadas las variaciones disponibles

	const permutar = (arr, permutacion=[]) => {
		if(! arr.length){
			_permutaciones.push(permutacion);
			return;
		}



		for(let i in arr){
			let curr = arr.slice();
			let sig = curr.splice(i, 1);

			permutar(curr, permutacion.concat(sig)); 
		}
	}

	permutar(PermutacionesDisponibles);
	return _permutaciones;
	} 



var PermutacionesRealizadas = permutaciones(ArrayCadenaB);
//console.log( PermutacionesRealizadas);

 //PermutacionesRealizadas.forEach(object => object.join(""));

for(i=0; i<PermutacionesRealizadas.length; i++){			//une las permutaciones dentro del object como array de strings
	 PermutacionesRealizadas[i] = PermutacionesRealizadas[i].join("");
}


var contador=0;			//nueva creación de variables de apoyo, para ejecutar la busqueda en el algoritmo
var LargoA = CadenaA.length;

var n=0;  //indice de PermutacionesRealizadas
var j=0;  //indice de busqueda de (sub) CadenaA


while(n < PermutacionesRealizadas.length){
	
	let CadenaPartida = CadenaA.substring(j);

	if(CadenaPartida.includes(PermutacionesRealizadas[n])){
		contador++;
		j = j + CadenaPartida.indexOf(PermutacionesRealizadas[n]) + CadenaB.length;
	}else{
		n++;
		j=0;
	}
}

if (CadenaA.length < CadenaB.length) {
	console.log("No se puede analizar");
}else{ 
	console.log("La palabra se encuentra contenida " + contador + " veces");
}
