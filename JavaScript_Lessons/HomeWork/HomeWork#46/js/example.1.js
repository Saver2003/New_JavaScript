$(function () {
    
    $(document).ajaxStart(function () {
        $('#preloader').show();
    });
    
    $(document).ajaxStop(function () {
        $('#preloader').hide();
    });
    
    var getPokemon = function (url) {
        return function (event) {
            event.preventDefault();
            getPokemonProperty(url)
        }
    };
    
    var getPokemonProperty = function (url) {
        $.ajax({
            method: 'GET',
            url: url
        }).then(function (response) {
            var pokemonView = $('<div class="pokemonInfo">');
            var pokemonImg = $('<img>').css({'width': '150px', 'height': 'auto'});
            var pokemonName = $('<p>');
            var pokemonType = $('<p>');
            var pokemonHeight = $('<p>');
            var pokemonWeight = $('<p>');
            $(pokemonView).append((pokemonImg).attr('src', response.sprites.front_default));
            $(pokemonName).html('Имя: ' + response.name);
            $(pokemonType).html('Тип: ' + response.types[0].type.name);
            $(pokemonHeight).html('Рост: ' + response.height);
            $(pokemonWeight).html('Вес: ' + response.weight);
            $(pokemonView).append(pokemonName);
            $(pokemonView).append(pokemonType);
            $(pokemonView).append(pokemonHeight);
            $(pokemonView).append(pokemonWeight);
            $('.pokemon').html(pokemonView);
            
            // var next = 20;
            
            // $.ajax({
            //     method: 'GET',
            //     url: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=" + next
            // }).then(function (value) {
            //     var nextBtn = $('<a href="' + value.next + '">Next</a>');
            //     $(pokemonView).append(nextBtn);
            //     $(nextBtn).on('click', function () {
            //         $('.pokemon').empty();
            //     })
            //
            // });
            console.log(response);
        })
    };
    
    $.ajax({
        method: 'GET',
        url: "https://pokeapi.co/api/v2/pokemon/"
    }).then(function (response) {
        var pokemonNumericList = $('<ol>').css({'width': '250px'});
        response.results.forEach(function (value) {
            var pokemonList = $('<li class="pokemon-Name">');
            var pokemonLink = $('<a href="' + value.url + ' " class="pokemon-Link" id="value.name">');
            $('#name').css({'width': '250px'}).append(pokemonNumericList);
            $(pokemonNumericList).append(pokemonList);
            $(pokemonList).append(pokemonLink);
            $(pokemonLink).append(value.name).css({'text-decoration': 'none', 'color': '#fff'});
            $(pokemonLink).on('click', getPokemon(value.url));
            console.log(value.name);
        });
        console.log(response);
        
    }).fail(function (status) {
        alert('error ' + status.responseJSON.status);
    });
});
