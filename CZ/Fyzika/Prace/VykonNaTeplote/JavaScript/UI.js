$(document).ready(function() {
		/*Nápověda*/
	$("#napoveda").click(function() {
		$("#napoveda").empty();
		$("#napoveda").after("<h3> Návod pro použití online kalkulačky pro výpočet výkonu na teplotě:</h3><ol><li>Zadejte hodnoty do políček.</li><li>V rozbalovacím menu zvolte jednotku, ve které chcete počítat.</li><li>Klikněte na tlačítko <i>Spočítat</i>.</li><li>Pro smazání historie výsledků stiskněte tlačítko <i>Smazat historii počítání</i>.</li></ol>");
	});
});