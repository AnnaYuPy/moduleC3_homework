function isAtrInObj (str1, obj1) {
    return (str1 in obj1);
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

console.log(isAtrInObj("area", flower));
console.log(isAtrInObj("color", flower));
console.log(isAtrInObj("something", flower));