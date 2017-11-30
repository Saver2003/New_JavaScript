(function ($) {
    $.fn.showCustomAlert = function (options) {
        var title = options.title;
        var message = options.message;
        var callback = options.callback();
        this.on('click', function () {
            var newAlert = $('<div id="alert" class="alert">');
            var newH2 = $('<h2>' + title + '</h2>');
            var newP = $('<p>' + message + '</p>');
            var newButton = $('<button id="btn">GUT</button>');
            var newDiv = $('<div id="background">');

            $('body').append(newAlert);
            $('#alert').append(newH2);
            $('#alert').append(newP);
            $('#alert').append(newButton);
            $('body').append(newDiv);
            $('.alert').css({
                'display': 'block'
            });
            $('#btn').on('click', function () {
                if (callback) callback();
                $('.alert').remove();
                $('#background').remove();
            });
        });

    };
})(jQuery);