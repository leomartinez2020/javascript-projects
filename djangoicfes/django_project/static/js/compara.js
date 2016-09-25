//var data = datos[0];
//var gata = datos[1];
var bolo = ['promedio', 'evaluados', 'departamento', 'competencias', 'ciencias', 'sociales', 'municipio', 'jornada', 'matematicas', 'ingles', 'naturaleza', 'calendario', 'nombre', 'lectura', 'razonamiento'];
var tolo = ['ciencias', 'matematicas', 'ingles', 'lectura', 'sociales', 'razonamiento', 'competencias', 'promedio'];
var quito = ['Ciencias Naturales', 'Matemáticas', 'Inglés', 'Lectura Crítica', 'Sociales y Ciudadanas', 'Razonamiento Cuantitativo', 'Competencias Ciudadanas', 'Promedio Ponderado'];
if (data) {

var grafica = d3.select("#grafica")
	.append('svg')
        .attr('preserveAspectRatio', 'xMinYMin')
	.attr('viewBox', '0 0 1000 400')
	/*.attr("width", "1200")
	.attr("height", "420")*/
	.attr('id', 'svgraf')
					
var esevege = d3.select("#svgraf");
var equis = 215;
var recty = 45;
var altura = 15;
var agrega = 50;
var verde = "#00bb00";
var azul = "#a3a3ff";
if (data['evaluados'] > gata['evaluados']) {
	var anchoData = 500;
	var anchoGata = Math.round(gata['evaluados'] * 500 / data['evaluados']);
} else {
	var anchoGata = 500;
	var anchoData = Math.round(data['evaluados'] * 500 / gata['evaluados']);
}

esevege.append("text")
	.attr("y", 20)
	.attr("x", 0)
	.attr("font-weight", "bold")
	.text("No. Estudiantes")

esevege.append("rect")
	.attr('width', anchoData)// colegio1 (data)
	.attr("height", 15)
	.attr("x", 215)
	.attr("y", 0)
	.attr("fill", azul);
	
esevege.append("rect")
	.attr('width', anchoGata)// colegio2 (gata)
	.attr("height", 15)
	.attr("x", 215)
	.attr("y", 20)
	.attr("fill", verde);

esevege.append("text")//nombre del colegio1
	.attr("y", 12)
	.attr("x", 217)
	.attr("font-size", "12px")
	.attr("font-weight", "bold")
	.attr("fill", "white")
        .text(data['evaluados'])
	//.text(data['nombre'] + " (" + "evaluados: " + data['evaluados'] + ")")
	//.text(data['nombre'] + " (" + data[tolo[indx]] +")")

esevege.append("text")//nombre del colegio2
	.attr("y", 32)
	.attr("x", 217)
	.attr("font-size", "12px")
	.attr("font-weight", "bold")
	.attr("fill", "white")
        .text(gata['evaluados'])
	//.text(gata['nombre'] + " (" + "evaluados: " + gata['evaluados'] + ")")

	
for (var indx = 0; indx < tolo.length; indx++) {
	esevege.append("rect")
	    .attr('width', data[tolo[indx]] * 8)// data[tolo[indx]] lo mismo que data['ciencias'] etc
		.attr("height", altura)
		.attr("x", equis)
		.attr("y", agrega + recty * indx)
		.attr("fill", azul);
	esevege.append("text")//nombre del colegio
		.attr("y", agrega + recty * indx + 12)
		.attr("x", equis + 5)
		.attr("font-size", "12px")
		.attr("font-weight", "bold")
		.attr("fill", "white")
		.text(data[tolo[indx]])
		//.text(data['nombre'] + " (" + data[tolo[indx]] +")")
	esevege.append("rect")
	    .attr('width', gata[tolo[indx]] * 8)
		.attr("height", altura)
		.attr("x", equis)
		.attr("y", agrega + recty * indx + 18)
		.attr("fill", verde);
	esevege.append("text")//nombre del colegio
		.attr("y", agrega + recty * indx + 30)
		.attr("x", equis + 5)
		.attr("font-size", "12px")
		.attr("font-weight", "bold")
		.attr("fill", "white")
		.text(gata[tolo[indx]])
		//.text(gata['nombre'] + " (" + gata[tolo[indx]] +")")
	esevege.append("text")
		.attr("y", agrega + recty * indx + 18)
		.attr("x", 0)
		.attr("font-weight", "bold")
		.text(quito[indx]);
}
}
