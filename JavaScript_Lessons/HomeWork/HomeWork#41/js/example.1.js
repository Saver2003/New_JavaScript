var Machine = function () {

    var enable = false;

    this.turnOn = function () {
        enable = true;
        console.log('turnOn');
    };

    this.turnOff = function () {
        enable = false;
    }
};





var HomeAppliance = function () {
    Machine.call(this);

    var enable = false;

    this.plugIn = function () {
        enable = true;
        console.log('plugIn');
    };

    this.plugOff = function () {
        enable = false;
    }
};





var WashingMachine = function () {
    HomeAppliance.call(this);
    this.run = function () {
        console.log('Washing machine is run!!!');
    }
};

var washingMachine = new WashingMachine();

washingMachine.run();

washingMachine.turnOn();

washingMachine.plugIn();





var LightSource = function () {
    this.setLevel = function (lux) {
        if (lux < 1 || lux > 100) {
            this.luminosity = 0;
        } else {
            this.luminosity = lux;
        }
        console.log(this.luminosity);
    };
};

var lightSource = new LightSource();

lightSource.setLevel(100);





var AutoVehicle = function () {
    Machine.call(this);
    this.setPosition = function (x, y) {
        if (x === 0) {
            this.setPositionX = 0;
        } else {
            this.setPositionX = x;
        }
        if (y === 0) {
            this.setPositionY = 0;
        } else {
            this.setPositionY = y;
        }
        console.log(this.setPositionX);
        console.log(this.setPositionY);
    };
};

var autoVehicle = new AutoVehicle();

autoVehicle.setPosition(50, 70);





var Car = function (speed) {
    AutoVehicle.call(this);
    this.speed = 10;
    this.speed = speed;
    var setSpeed = function(speed) {
        console.log(setSpeed);
    }
};

var car = new Car();

car.setSpeed(10);




















