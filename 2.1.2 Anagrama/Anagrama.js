

var CadenaA = prompt("Introduzca el texto a analizar");
	CadenaA = CadenaA.toLowerCase();
	
var CadenaB = prompt("Introduzca las letras que desea comprobar si estan dentro del texto");
	CadenaB = CadenaB.toLowerCase();
	LargoB= CadenaB.length;
	

var ArrayCadenaB= CadenaB.split('');
var CantidadLetras = ArrayCadenaB.length;




function permutaciones(PermutacionesDisponibles) { 
	const _permutaciones = [];

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
console.log(typeof PermutacionesRealizadas);

 //PermutacionesRealizadas.forEach(object => object.join(""));

for(i=0; i<PermutacionesRealizadas.length; i++){
	 PermutacionesRealizadas[i] = PermutacionesRealizadas[i].join("");
}

var contador=0;
var largoA = CadenaA.length;

var n=0;
var j=0;

console.log(CadenaA.length);

	while(n<PermutacionesRealizadas.length)	{	

		while(j<CadenaA.length){
	
			if(CadenaA.includes(PermutacionesRealizadas[n]) == false){ 
				j=0;
				break;
			}else{
			let CadenaPartida = CadenaA.substring(j);
			j++;
			console.log(CadenaPartida);
				if(CadenaPartida.includes(PermutacionesRealizadas[n])){
					 j = j + CadenaPartida.indexOf(PermutacionesRealizadas[n]) + CadenaB.length;
					 contador++;
					 console.log(contador);
				if(CadenaPartida.length < CadenaA.length){
								j = 0;
								break;	
							}	}
	
				 
			}
		}
		n++;
		console.log(n);
		console.log(j)






}
if (CadenaA.length < CadenaB.length) {
	document.write("No se puede analizar");
}else{ 
	document.write("La palabra se encuentra contenida " + contador + " veces");
}