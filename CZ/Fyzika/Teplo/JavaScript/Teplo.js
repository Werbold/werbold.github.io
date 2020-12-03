$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseInt($("#cislo1").val());
		var cislo2 = parseInt($("#cislo2").val());
		var cislo3 = parseInt($("#cislo3").val());
		var cislo4 = parseInt($("#cislo4").val());
		var jednotka = $("#Jednotka").val();

		var vysledek;

		var jednotkaC = "J / kg";
		var jednotkaM = "kg";
		var jednotkaT = "°C";
		var jednotkaQ = "J";

		if (cislo1 <= 0 || cislo2 <= 0 || cislo3 <= 0 || cislo4 <= 0) {
			error();
		}
		else {
			vysledek = cislo1 * cislo2 * (cislo3 - cislo4);

			$('#Vysledek').after("<p>Měrná tepelná kapacita: " + cislo1 + " " + jednotkaC + "<br>"
				+ "Hmotnost: " + cislo2 + " " + jednotkaM + "<br>" 
				+ "Počáteční teplota: " + cislo3 + " " + jednotkaT + "<br>"
				+ "Teplota po ochlazení: " + cislo4 + " " + jednotkaT + "<br>"
				+ "Teplo: " + vysledek + " " + jednotkaQ + "</p>");
		}
	});

	$("#smazat").click(function() {
		refresh();
	});
});

function refresh() {
	location.reload();
}

function error() {
	$('#Vysledek').after("<p>Litujeme, ale nelze přesně spočítat jednu nebo více položek.<br>Pokud je chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}