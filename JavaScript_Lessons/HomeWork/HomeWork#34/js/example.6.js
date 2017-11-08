var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var drawCircles = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    var colors = ['#C8B07E', '#56A9AB', '#5EC864', '#C81615', '#C882B8', '#B531C8', '#0EC81C', '#C85F05', '#8AC81F', '#8AC8C8', '#00C874', '#5E3FC8', '#C85074', '#01C86C'];
    var circles = $('.circles');
    circles.css({
      'position': 'relative'
    });
    var circle = $('<div class="circle">');
    var sizeCircle = getRandomNumber(50, 200);
    circle.css({
      'height': sizeCircle,
      'width': sizeCircle,
      'borderRadius': '50%',
      'position': 'absolute',
      'top': getRandomNumber(0, 768),
      'left': getRandomNumber(0, 1024),
      'backgroundColor': colors[getRandomNumber(0, 13)]
      // 'border': '1px solid #ccc'
    });
    circles.append(circle);
  }
};