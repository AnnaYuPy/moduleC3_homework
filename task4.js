function ElectricDevice(name) {
    this.name = name;
    this.isOn = false;
}

ElectricDevice.prototype.on = function() {
    console.log(this.name + " is on.");
    this.isOn = true;
};
ElectricDevice.prototype.off = function() {
    console.log(this.name + " is off.");
    this.isOn = false;
};

function Teapot(name, power, color, volume, comfort, guarantee) {
    this.name = name;
    this.power = power;
    this.color = color;
    this.volume = volume;
    this.comfort = comfort;
    this.guarantee = guarantee;
    this.isOn = true;
    this.lengthOfCord = function(){
        console.log(`${this.name} has a cord ${this.comfort} meters long.`);
    }
}
function Microwave(name, power, control, grill, defrosting) {
    this.name = name;
    this.power = power;
    this.control = control;
    this.grill = grill;
    this.defrosting = defrosting;
    this.isOn = false;
    this.hasGrill = function(){
        if(this.grill) {
            console.log(`${this.name} has a grill.`);
        }
        else {
            console.log(`${this.name} has a grill.`);
        }
    }
}

let powerConsumption;
Teapot.prototype = new ElectricDevice();
Microwave.prototype = new ElectricDevice();

const myTeapot = new Teapot("Home teapot", 850, "Grey", 1.5, 1, 2);
const myMicro = new Microwave("Home microwave", 1000, "mechanical", true, false);

console.log(myTeapot)
console.log(myMicro)

powerConsumption = myTeapot.isOn * myTeapot.power + myMicro.isOn * myMicro.power;
console.log(`Now power consumption is ${powerConsumption} watts`);

myTeapot.off();
myMicro.on();

console.log(myTeapot)
console.log(myMicro)

powerConsumption = myTeapot.isOn * myTeapot.power + myMicro.isOn * myMicro.power;
console.log(`Now power consumption is ${powerConsumption} watts`);

myTeapot.lengthOfCord();
myMicro.hasGrill();