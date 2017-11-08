var chessField = function (widthChess) {
  var line = 8;
  var chess = $('.chess');
  chess.css({
    width: widthChess,
    height: widthChess,
    border: '1px solid #000'
  });
  for (var i = 0; i < line; i++) {
    for (var j = 0; j < line; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
        var fieldBlack = $('<div class="black">');
        fieldBlack.css({
          width: widthChess / 8,
          height: widthChess / 8,
          background: '#000',
          float: 'left'
        });
        chess.append(fieldBlack);
      } else {
        var fieldWhite = $('<div class="white">');
        fieldWhite.css({
          width: widthChess / 8,
          height: widthChess / 8,
          background: '#fff',
          float: 'left'
        });
        chess.append(fieldWhite);
      }
    }
  }
};
