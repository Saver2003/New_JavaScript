$(function () {
    
    function getInformation(name) {
        $.ajax({
            method: 'GET',
            url: "https://restcountries.eu/rest/v2/name/" + name,
            success: function (response) {
                alert('Страна: ' + response[0].name);
            },
            error: function (status) {
                alert('error ' + status.responseJSON.status)
            }
            
        }).then(function (result) {
            for (var i = 0; i < result[0].borders.length; i++) {
                
                $.ajax({
                    method: 'GET',
                    url: "https://restcountries.eu/rest/v2/alpha/" + result[0].borders[i],
                    success: function (response) {
                        console.log(response.name);
                    },
                    error: function (status) {
                        alert('error ' + status.responseJSON.status)
                    }
                })
            }
            
        });
    }
    
    $('#show').on('click', function () {
        getInformation($('#country-name').val());
        
    });
});
