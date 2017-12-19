$(function () {
    
    function getInformation(name) {
        
        $(document).ajaxStart(function () {
            $('#preloader').show();
        });
        $(document).ajaxStop(function () {
            $('#preloader').hide();
        });
        
        $.ajax({
            method: 'GET',
            url: "https://restcountries.eu/rest/v2/name/" + name
        }).then(function (result) {
            var promises = [];
            var country = $('<h4 class="borders">');
            $(country).html('Страна: ' + result[0].name);
            $('#countryBlock').append(country);
            for (var i = 0; i < result[0].borders.length; i++) {
                var request = $.ajax({
                    method: 'GET',
                    url: "https://restcountries.eu/rest/v2/alpha/" + result[0].borders[i]
                });
                promises.push(request);
            }
            return Promise.all(promises);
        }).then(function (result) {
            var borders = $('<span class="borders">Граничит с: </span>').css({'font-weight': 'bold'});
            $('#countryBlock').append(borders);
            result.forEach(function (value) {
                var countryName = $('<span class="borders"></span>');
                $(countryName).html(value.name).css({'display': 'block', 'padding-left': '30px'});
                $('#countryBlock').append(countryName);
            })
        }).fail(function (status) {
            alert('error ' + status.responseJSON.status);
        });
    }
    
    $('#show').on('click', function () {
        $('#countryBlock').empty();
        getInformation($('#country-name').val());
    });
});
