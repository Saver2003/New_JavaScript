var Machine = function () {

    this.enableMachine = false;

    this.turnOn = function () {
        this.enableMachine = true;
        console.log('turnOn');
    };

    this.turnOff = function () {
        this.enableMachine = false;
    }
};


var HomeAppliance = function () {
    Machine.call(this);

    this.enable = false;

    this.plugIn = function () {
        this.enable = true;
        console.log('plugIn');
    };

    this.plugOff = function () {
        this.enable = false;
    }
};


var WashingMachine = function () {
        HomeAppliance.call(this);
        if (this.plugIn) {
            this.run = function () {
                console.log('Washing machine is run!!!');
            }
        } else {
            console.log('Machine must be plugged on!');
        }
    };


var bosch = new WashingMachine();
bosch.plugIn();
bosch.turnOn();


var LightSource = function () {
    HomeAppliance.call(this);
    if (this.plugIn) {
        this.setLevel = function (lux) {
            if (lux < 1 || lux > 100) {
                this.luminosity = 0;
            } else {
                this.luminosity = lux;
            }
            console.log('Освещенность равна ' + this.luminosity);
        };
    } else {
        console.log('Включите прибор в розетку!')
    }
};

var lightBulb = new LightSource();
lightBulb.plugIn();
lightBulb.setLevel(55);
lightBulb.turnOn();

var AutoVehicle = function () {
    Machine.call(this);
    this.setPositionX = 0;
    this.setPositionY = 0;
    this.setPosition = function (x, y) {
        this.setPositionX = x;
        this.setPositionY = y;
    };
};

var Car = function () {
    AutoVehicle.call(this);
    this.speed = 10;
    this.setSpeed = function (speed) {
        this.speed = speed;
        // console.log(setSpeed);
    };
    var self = this;
    if (this.turnOn) {
        this.run = function (x, y) {
            console.log(self.setPositionX, self.setPositionY);
            var interval = setInterval(function () {
                if (self.setPositionX <= (x - self.speed)) {
                    self.setPosition(self.setPositionX + self.speed, self.setPositionY);
                } else {
                    self.setPositionX = x;
                }
                if (self.setPositionY <= (y - self.speed)) {
                    self.setPosition(self.setPositionX, self.setPositionY + self.speed);
                } else {
                    self.setPositionY = y;
                }
                if (self.setPositionX >= x && self.setPositionY >= y) {
                    clearInterval(interval);
                }
                console.log(self.setPositionX, self.setPositionY);
            }, 1000);
        }
    } else {
        console.log('Заведите двигатель!');
    }
};

var car = new Car();
car.setPosition(0, 0);
car.setSpeed(37);
car.run(162, 481);


// var honda = new Car();
// honda.setPosition(30, 40);
// honda.turnOn();
// honda.setSpeed(60);
// honda.run(180, 240);




