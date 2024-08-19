let markM1 = 78; 
let markH1 = 1.69; 
let johnM1 = 92; 
let johnH1 = 1.95; 

// Test data 2
let markM2 = 95; 
let markH2 = 1.88; 
let johnM2 = 85; 
let johnH2 = 1.76; 
let markBMI1 = markM1 / (markH1 ** 2);
let johnBMI1 = johnM1 / (johnH1 ** 2);

let markBMI2 = markM2 / (markH2 ** 2);
let johnBMI2 = johnM2 / (johnH2 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1.toFixed(2));
console.log("John's BMI:", johnBMI1.toFixed(2));
console.log("Does Mark have a higher BMI than John?", markHigherBMI1);

console.log("Data 2:");
console.log("Mark's BMI:", markBMI2.toFixed(2));
console.log("John's BMI:", johnBMI2.toFixed(2));
console.log("Does Mark have a higher BMI than John?", markHigherBMI2);

// Bai 2
if(markHigherBMI1){
    console.log(`BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)}) `)
}
else {
    console.log(`BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)}) `)
}

//Bai 3
let caheo1 = (96 +108+89)/3;
let gau1 = (88 +91 +110) /3 ;
let ketqua = caheo1 > gau1;
if(ketqua){
    console.log(`Ca heo win with ${caheo1.toFixed(2)} points`)
}
else if( caheo1 == gau1) {
    console.log(`Draw with ${caheo1.toFixed(2)} points`)
}
else{
    console.log(`Gau win with ${gau1.toFixed(2)} points`)
}
