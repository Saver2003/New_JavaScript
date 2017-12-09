var PiggyBank = function () {
    this.coins = {1: 0, 3: 0, 5: 0, 10: 0};
    
    this.addCoin = function (value) {
        switch (value) {
            case 1:
            case 3:
            case 5:
            case 10:
                this.coins[value]++;
                break;
            default:
                console.log('This is not a correct value!');
        }
    };
};

PiggyBank.prototype.showCoins = function () {
    
    $('.info-block').empty();
    for (var value in this.coins) {
        var oneCoin = $('<p id="oneCoin">').append(value + ': ' + this.coins[value] + '<br>');
        $('.info-block').append(oneCoin);
    }
};

PiggyBank.prototype.getTotal = function () {
    var total = 0;
    for (var value in this.coins) {
        total += value * this.coins[value];
    }
    $('#total').html('Total: ' + total);
};