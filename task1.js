function printOwnProperties(obj1) {
    let atr;
    for (atr in obj1) {
        if (obj1.hasOwnProperty(atr)) {
            console.log(atr, " - ", obj1[atr]);
        }
    }
}

const plant = {
    area: "Europe",
    size: 2,
    shape: "circle",
    speedOfGrowth: 3.4,
    durability: 100,
    texture: "thin"
}

const flower = Object.create(plant);
flower.color = "pink";
flower.isMedicinal = true;
flower.smell = "sharp";

printOwnProperties(flower);