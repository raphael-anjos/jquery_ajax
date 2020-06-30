function consultaUf(){
    var uf = document.getElementById("uf").value.toUpperCase();
    var url = "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/"+uf;
    

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);

            $("#estadoUf").html(response.uf);
            $("#estado").html(response.state);
            $("#casos").html(response.cases);
            $("#mortes").html(response.deaths);
            $("#suspeitos").html(response.suspects);
            $("#titulo_uf").html("Casos de Covid-19 no estado: " + response.state);
        }
    })
}