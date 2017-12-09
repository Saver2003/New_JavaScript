var translate = {
    name: 'Название',
    topLevelDomain: 'Домен верхнего уровня',
    alpha2Code: 'Альфа2код',
    alpha3Code: 'Альфа3код',
    callingCodes: 'Телефонный код',
    capital: 'Столица',
    altSpellings: 'Именование',
    region: 'Регион',
    subregion: 'Подрегион',
    population: 'Население',
    latlng: 'Широта, Долгота',
    demonym: 'Этнохороним',
    area: 'Площадь',
    timezones: 'Часовые пояса',
    borders: 'Граничит с',
    nativeName: 'Самоназвание',
    numericCode: 'Трехзначный код страны',
    currencies: 'Валюта',
    languages: 'Языки',
    flag: 'Флаг',
    regionalBlocs: 'Региональные группы'
};

function getInformation(name) {
    $.ajax({
        method: 'GET',
        url: "https://restcountries.eu/rest/v2/name/" + name,
        success: addData,
        error: function (status) {
            alert('error ' + status.responseJSON.status)
        }
        
    });
}

var addData = function (response) {
    var data = JSON.stringify(response[0]);
    var translateKeys = Object.keys(translate);
    
    console.log(data);
    
    $('.gllpLatitude').val(response[0].latlng[0]);
    $('.gllpLongitude').val(response[0].latlng[1]);
    
    $(".gllpLatlonPicker").each(function () {
        $obj = $(document).gMapsLatLonPicker();
        
        $obj.params.strings.markerText = "Drag this Marker (example edit)";
        
        $obj.params.displayError = function (message) {
            console.log("MAPS ERROR: " + message);
        };
        
        $obj.init($(this));
    });
    
    $('.gllpLatlonPicker').show();
    
    $.each(response[0], function (key, value) {
        
        if (translateKeys.indexOf(key) >= 0) {
            var block = $('<div>').html(translate[key] + ': ' + value).css({'padding-bottom': '5px'});
            if (value instanceof Object) {
                block = $('<div>').html(translate[key] + ':').css({'padding-bottom': '5px'});
            }
            
            if (translate[key] === 'Флаг') {
                var createImg = $('<img>').attr('src', value).css({'width': '100px'});
                block.html($('<span>Флаг: </span>')).append(createImg);
            }
            if (Array.isArray(response[0][key])) {
                var arrayCounter = function () {
                    for (var i = 0; i < response[0][key].length; i++) {
                        for (var innerCurrencies in response[0][key][i]) {
                            var text = $('<div class="object">').text(response[0][key][i][innerCurrencies]).css({'margin-left': '30px'});
                            block.append(text);
                        }
                    }
                };
                
                switch (key) {
                    case 'currencies':
                        arrayCounter(key);
                        break;
                    case 'languages':
                        arrayCounter(key);
                        break;
                    case 'regionalBlocs':
                        arrayCounter(key);
                        break;
                    case 'altSpellings':
                        block.html(translate[key] + ': ' + response[0][key].join(', '));
                        break;
                    case 'latlng':
                        block.html(translate[key] + ': ' + response[0][key].join(', '));
                        break;
                    case 'timezones':
                        block.html(translate[key] + ': ' + response[0][key].join(', '));
                        break;
                    case 'borders':
                        block.html(translate[key] + ': ' + response[0][key].join(', '));
                    
                }
            }
            
            $('#countryBlock').append(block);
        }
    });
};


$('#show').on('click', function () {
    getInformation($('#country-name').val());
    
});