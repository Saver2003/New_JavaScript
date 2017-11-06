
var chessField = function () {
  var line = 8;
  for (var i = 0; i < line; i++) {
    for (var j = 0; j < line; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
        var fieldBlack = $('<div class="black">');
        fieldBlack.css({
          width: '20px',
          height: '20px',
          background: '#000',
          float: 'left'
        });
        $('.chess').append(fieldBlack);
      } else {
        var fieldWhite = $('<div class="white">');
        fieldWhite.css({
          width: '20px',
          height: '20px',
          background: '#fff',
          float: 'left'
        });
        $('.chess').append(fieldWhite);
      }
    }
  }
};
