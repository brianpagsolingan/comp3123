function capitalize(sentence){
    const words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    return words.join(" ");
}
console.log(capitalize("the quick brown fox jumped over the lazy dog"))

function findMax(x, y ,z){
    nums = [x, y, z]
    maxNum = 0;
    for (let i = 0; i < nums.length; i++){
        if (maxNum < nums[i]){
            maxNum = nums[i];
        }
    }
    return maxNum;
}
console.log(findMax(1616,12,115));
console.log(findMax(16,12,123));
console.log(findMax(6,1900,115));

function wordSwap(word){
    if(word.length <= 3){
        return word
    }
    firstThree = word.slice(0,3);
    lastChars = word.slice(3);

    return lastChars + firstThree;
}
console.log(wordSwap("Python")); //honPyt

function findAngle(angle){
    if(angle == 90){
        return "Right angle"
    }if(angle > 90 && angle < 180){
        return "Obtuse Angle"
    }if(angle < 90){
        return "Acute Angle"
    }if(angle == 180){
        return "Straight Angle"
    }
}

console.log(findAngle(180))
console.log(findAngle(45))
console.log(findAngle(100))
console.log(findAngle(90))
