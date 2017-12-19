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

var MyCustomPromise = function (callback) {
    var value = null;
    
    var newObserver = new Observer();
    
    this.then = function (successCallback) {
        if (status === 'resolve') {
            successCallback(value);
        }
        newObserver.on('firstEvent', successCallback);
    };
    
    this.catch = function (errorCallback) {
        if (status === 'reject') {
            errorCallback(value);
        }
        newObserver.on('secondEvent', errorCallback);
    };
    
    var status = 'pending';
    
    var resolve = function (success) {
        if (status === 'pending') {
            value = success;
            status = 'resolve';
            newObserver.trigger('firstEvent', success);
        }
    };
    
    var reject = function (error) {
        if (status === 'pending') {
            value = error;
            status = 'reject';
            newObserver.trigger('secondEvent', error);
        }
    };
    
    callback(resolve, reject);
};

var example = new MyCustomPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Hello!');
    }, 3000);
    setTimeout(function () {
        reject('Error');
    }, 2000);
});
example.then(function (result) {
    console.log(result);
});
example.catch(function (error) {
    console.log(error);
});


