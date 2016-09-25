if (data) {
var grafica = d3.select("#grafica")
	.append('svg')
        .attr('preserveAspectRatio', 'xMinYMin')
        .attr('viewBox', '0 0 1000 400')
        .attr('id', 'svgraf')
/* eliminar width y height para mobil        
	.attr("width", "1200")
	.attr("height", "400")
	.attr('id', 'svgraf')
*/
					
var esevege = d3.select("#svgraf");
var equis = 300;
var recty = 40;
var factor = 7; // para mobil, controlar width de bar chart

esevege.append("rect")
	.attr("width", data.ciencias * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty + 15)
	.attr("x", 0)
	.text("Ciencias Naturales" + " (" + data.ciencias +")")
esevege.append("rect")
	.attr("width", data.matematicas * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*2)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty*2+15)
	.attr("x", 0)
	.text("Matemáticas" + " (" + data.matematicas +")")
esevege.append("rect")
	.attr("width", data.ingles * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*3)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty*3+15)
	.attr("x", 0)
	.text("Inglés" + " (" + data.ingles +")")
esevege.append("rect")
	.attr("width", data.razonamiento * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*4)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty*4+15)
	.attr("x", 0)
	.text("Razonamiento Cuantitativo" + " (" + data.razonamiento +")")
esevege.append("rect")
	.attr("width", data.competencias * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*5)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty*5+15)
	.attr("x", 0)
	.text("Competencias Ciudadanas" + " (" + data.competencias +")")
esevege.append("rect")
	.attr("width", data.lectura * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*6)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty*6+15)
	.attr("x", 0)
	.text("Lectura Crítica" + " (" + data.lectura +")")
esevege.append("rect")
	.attr("width", data.sociales * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*7)
	.attr("fill", "#a3a3ff");
esevege.append("text")
	.attr("y", recty*7+15)
	.attr("x", 0)
	.text("Sociales y Ciudadanas" + " (" + data.sociales +")")

esevege.append("rect")
	.attr("width", data.promedio * factor)
	.attr("height", 20)
	.attr("x", equis)
	.attr("y", recty*8)
	.attr("fill", "#002eb8");
esevege.append("text")
	.attr("y", recty*8+15)
	.attr("x", 0)
	.text("Promedio Total" + " (" + data.promedio +")")
}
