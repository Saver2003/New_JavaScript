var Observer = function () {
    this.listeners = {}
};

Observer.prototype.on = function (type, listener) {
    if (!(type in this.listeners)) {
        this.listeners[type] = [];
    }
    this.listeners[type].push(listener);
};

Observer.prototype.trigger = function (type, arguments) {
    if (type in this.listeners) {
        for (var i = 0; i < this.listeners[type].length; i++) {
            var listener = this.listeners[type][i];
            listener(arguments);
        }
    }
};

var newAddCoins = function (value) {
    newPiggyBank.addCoin(value);
    observer.trigger('coinsChange');
};

var newShowCoins = function () {
    newPiggyBank.showCoins();
    newPiggyBank.getTotal();
};

var observer = new Observer();
observer.on('AddCoins', newAddCoins);
observer.on('coinsChange', newShowCoins);

var newPiggyBank = new PiggyBank();

$('.btnAddCoin').on('click', function () {
    var addCoinOnClick = parseInt($(this).text());
    observer.trigger('AddCoins', addCoinOnClick);
    
});