$(document).ready(function() {	
	$("#spocitat").click(function() {
		var cislo1 = parseFloat($("#cislo1").val());
		var cislo2 = parseFloat($("#cislo2").val());
		var cislo3 = parseFloat($("#cislo3").val());
		var jednotka = $("#Jednotka").val();

		var vysledekP;
		var vysledekPo;
		var vysledekU;

		var jednotkaP;
		var jednotkaPo;
		var jednotkaU = "%";

		if (jednotka == "Kilo" || jednotka == "Základní" || jednotka == "Mili") {
			if (jednotka == "Kilo") {
				jednotkaP = "kW";
				jednotkaPo = "kW";
			}
			if (jednotka == "Základní") {
				jednotkaP = "W";
				jednotkaPo = "W";
			}
			if (jednotka == "Mili") {
				jednotkaP = "mW";
				jednotkaPo = "mW";
			}

			if (cislo2 > 0 && cislo3 > 0 || cislo1 > 0 && cislo2 > 0 || cislo1 > 0 && cislo3 > 0) {
				if (cislo2 > 0 && cislo3 > 0) {
					vysledekP = cislo2 * cislo3 / 100;

					vysledekP = vysledekP * 1000;
					vysledekP = Math.round(vysledekP);
					vysledekP = vysledekP / 1000;

					$('#Vysledek').after("<p class='count'>Účinnost: " + cislo2 + " " + jednotkaU + "<br>"
					+ "Příkon: " + cislo3 + " " + jednotkaPo + "<br>" 
					+ "Výkon: " + vysledekP + " " + jednotkaP + "</p>");
				}
				if (cislo1 > 0 && cislo2 > 0) {
					vysledekPo = 100 * cislo1 / cislo2;

					vysledekPo = vysledekPo * 1000;
					vysledekPo = Math.round(vysledekPo);
					vysledekPo = vysledekPo / 1000;

					$('#Vysledek').after("<p class='count'>Účinnost: " + cislo2 + " " + jednotkaU + "<br>"
					+ "Výkon: " + cislo1 + " " + jednotkaP + "<br>" 
					+ "Příkon: " + vysledekPo + " " + jednotkaPo + "</p>");
				}
				if (cislo1 > 0 && cislo3 > 0) {
					vysledekU = 100 * cislo1 / cislo3;

					vysledekU = vysledekU * 1000;
					vysledekU = Math.round(vysledekU);
					vysledekU = vysledekU / 1000;

					$('#Vysledek').after("<p class='count'>Příkon: " + cislo3 + " " + jednotkaPo + "<br>"
					+ "Výkon: " + cislo1 + " " + jednotkaP + "<br>" 
					+ "Účinnost: " + vysledekU + " " + jednotkaU + "</p>");
				}
			}
			else{
				error();
			}
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
	$('#Vysledek').after("<p class='count'>Litujeme, ale nelze přesně spočítat ani jednu položku.<br>Pokud ji chcete spočítat, zadejte prosím kladné nenulové hodnoty.</p>")
}