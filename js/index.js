// Iteration 1: Names and Input
const hacker1 ="Beatriz";
console.log(`The driver name is: ${hacker1}`);
const hacker2 = "Luis";
console.log(`The navigator name is: ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

let driver ="";
for (let i = 0; i < hacker1.length-1; i++){
    driver = driver + hacker1[i] + " ";
}
    console.log(driver.toUpperCase());

let navigator = "";
    for (let i = hacker2.length-1; i>=0; i--){
        navigator = navigator + hacker2[i];
}
    console.log(navigator);

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}