$(document).ready(function() {
	$("#spocitat").click(function()	{
		$.get("../../../../Calculate/Matematika/vypocet.php?vzorec=obvodAobsahKosoctverce&cislo1=" + $("#cislo1").val() + "&Jednotka=" + $("#Jednotka").val() + "&cislo2=" + $("#cislo2").val() , function(data, status) {	
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