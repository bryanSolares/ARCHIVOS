
//Funcionalidades que permites hacer ciertos acciones

const {ayuda} = require('./helper.js');

const suma = (ns) => {
	let acumulado = 0;
	for (i = 0: i < ns.length; i++){
	
		acumulado += ns[i];
	}
	ayuda();
	return acumulado;
}
// de de lolo lala
const numero = [1,2,3,4,5];

const multiplicados = alternativa.map(x => x*2);
// a pares
const parejas = alternativa.map(x => [x,x]);

const mascotas = [
{nombre: 'Chanchito feliz', age: 3, tipo: 'perro'},
{nombre: 'Puchini', edad: 12, tipo: 'perro'},
{nombre: 'Pulga', edad: 10, tipo: 'perro'}, {nombre: 'Pelusa', edad: 12, tipo: 'gato'} ] //edad promedio const edades = mascotas.filter(x => x.edad); const resultado = suma(edades); console.log(resultado / edades.length);

//letras de navegacion:
// k
//h  l
// j

//w = inicio de cada palabra de izquierda a derecha
//b = final de cada palabra de derecha a izquierda
//e = final de cada palabra de izquierda a derecha

//i = para insertar texto colocando el curso al inicio de la letra donde se posiciona
//a = para insertar texto colocando el curso al final de la letra donde se posiciona
//A = se mueve al final de la linea y deja la disponibilidad de insertar texto
//x = eliminar texto, es como usar suprimir
//:w = guardar cambios en modo normal
//:wq = guarda el archivo y sale del editor

//Navegacion entre archivos:
//gd = se va a la definicion de la variable o funcion
//gf = navega hacia el archivo que esta en el require
//ctrl + o = navegamos hacia atras en la pila de navegacion
//ctrl + i = navegamos hacia adelante en la pila de navegacion

//DISTINTAS FORMAS DE ELIMINAR TEXTO
//dd = corta la linea
//dw = eliminar palabra completa a partir de donde inicia cursor
//u = deshacer lo hecho (ctrl + z)
//ctrl + r = ir rehacer lo hecho hechos (ctrl + y)
//d + shift + 4 = eliminar la linea completa a partir de donde esta el cursor
//d + #cantidadpalabras + w = eliminar una cantidad determinada de palabras
//# + h|j|k|l|b|w|e = # indica la cantidad de lugares que quiero recorrer dado el comando indicado
//
//CORTAR Y PEGAR
//p = pegar lo que esta en clipboard abajo del cursor
//P = pegar lo que esta en clipboard arriba del cursor
//
//SUSTITUIR UN CARACTER
//r = como activar INSERT una sola vez
//R = reemplazar 
//
//OPERADOR DE CAMBIO
//cw = (change word) reemplazar palabra a partir de donde esta el cursor
//ciw = (change internal word) reemplaza palabra no importa donde esta el cursor
//
//MOVERSE AL FINAL E INICIO
//gg = ir al inicio del archivo
//G = ir al final del archivo
//# + G = ir al numero de linea indicado
//
//BUSCAR
// /palabra = en neovim hara la busqueda en todo el documento
// ?palabra = vim busca coincidencias hacia adelante del cursor
//
//SALTAR
//% = va y viene entre (), [], {}
//0 = voy al inicio de la linea
//$ = voy al final de la linea
//
//REEMPLAZAR EN LA LINEA
//:s/palabra buscada/nueva palaba = solo lo hara con la primera coincidencia
//:s/palabra buscada/nueva palabra/g = cambia todas las coincidencias de la linea
//:%s/palabra buscada/nueva palabra/gc = buscar y reemplaza dentro del documento (con la c pregunta si se cambia o no)
//
//o = abre nueva linea abajo del cursor
//O = abre nueva linea arriba del cursor
//
//v = ir a modo visual, estando aqui se puede navegar y lo que hara es seleccionar por donde se navegue
//y = copia lo seleccionado
//p = pega lo copiado
//
//
//
//
//
//
//
//
//
//
//
//
//
