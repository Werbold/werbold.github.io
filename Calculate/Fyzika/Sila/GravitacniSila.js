$(document).ready(function() {	
	$("#spocitat").click(function() {
				$.get("../../../../Calculate/Fyzika/vypocet.php?vzorec=GravitacniSila&cislo1=" + $("#cislo1").val() + "&Jednotka1=" + $("#Jednotka1").val() + "&cislo2=" + $("#cislo2").val(), function(data, status) {	
			$("#Vysledek").after(data);
		});
	});

	$("#smazat").click(function() {
		refresh();
	});
});

function refresh() {
	location.reload();
}