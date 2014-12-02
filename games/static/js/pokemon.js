$(document).ready(function() {


    function getRandomInt() {
        return Math.floor(Math.random() * (720 - 2)) + 2;
    }


    var pokeResponse, pokemon = {};
    $("#wild").on('click', function () {
        $.ajax({
            url: "http://pokeapi.co/api/v1/sprite/" + getRandomInt() + "/",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var imgUrl = 'http://pokeapi.co' + data.image;
                console.log(imgUrl);
                pokeResponse = data;
                pokemon.name = data.name;
                pokemon.id = data.id - 1;
                pokemon.image = data.image;
                $('#show').append("<ul>" + "<li>" + data.name + "</li>" + "<li>" + data.id + "</li>" +
                    "<img src='" + imgUrl + "'>" + "</ul > ");

            }
        });
    });

    var myTeam = [10, 22, 13, 14, 25, 6];
    $("#getTeam").on('click', function () {
        for (var i = 0; i < 6; i++) {
            test(myTeam[i]);
        }

    });

    function test(num) {
        $.ajax({
            url: "http://pokeapi.co/api/v1/sprite/" + num + "/",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var imgUrl = 'http://pokeapi.co' + data.image;
                console.log(imgUrl);
                pokeResponse = data;
                pokemon.name = data.name;
                pokemon.id = data.id - 1;
                pokemon.image = data.image;
                $('#team').append("<ul>" + "<li>" + data.name + "</li>" + "<li>" + data.id + "</li>" +
                    "<img src='" + imgUrl + "'>" + "</ul > ");

            }
        });
    }

    var randomTeam = [ ];
    $("#getTeam").on('click', function () {
        for (var i = 0; i < 6; i++) {
            test(myTeam[i]);
        }

    });

    function test() {
        $.ajax({
            url: "http://pokeapi.co/api/v1/sprite/" + getRandomInt() + "/",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var imgUrl = 'http://pokeapi.co' + data.image;
                console.log(imgUrl);
                pokeResponse = data;
                pokemon.name = data.name;
                pokemon.id = data.id - 1;
                pokemon.image = data.image;
                $('#randTeam').append("<ul>" + "<li>" + data.name + "</li>" + "<li>" + data.id + "</li>" +
                    "<img src='" + imgUrl + "'>" + "</ul > ");

            }
        });
    }
});

