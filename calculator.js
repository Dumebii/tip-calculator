



function tipCalculator1() {
    var bill = document.getElementById('input').value;
    var numberBill = bill * 1;
    var tipPercent = document.getElementById("10").innerText;
    console.log(tipPercent);
    const percentage = tipPercent/100;
    const tip = bill*percentage;
    const numberTip = tip*1;
    const finalAmount = numberBill + numberTip;
    var result = document.getElementById("answer");
    result.innerHTML = finalAmount;
    // return finalAmount;
}

function tipCalculator2() {
    var bill = document.getElementById('input').value;
    var numberBill = bill * 1;
    var tipPercent = document.getElementById("25").innerText;
    console.log(tipPercent);
    const percentage = tipPercent/100;
    const tip = bill*percentage;
    const numberTip = tip*1;
    const finalAmount = numberBill + numberTip;
    var result = document.getElementById("answer");
    result.innerHTML = finalAmount;
}

function tipCalculator3() {
    var bill = document.getElementById('input').value;
    var numberBill = bill * 1;
    var tipPercent = document.getElementById("50").innerText;
    console.log(tipPercent);
    const percentage = tipPercent/100;
    const tip = bill*percentage;
    const numberTip = tip*1;
    const finalAmount = numberBill + numberTip;
    var result = document.getElementById("answer");
    result.innerHTML = finalAmount;
}

function tipCalculator4() {
    var bill = document.getElementById('input').value;
    var numberBill = bill * 1;
    var tipPercent = document.getElementById("75").innerText;
    console.log(tipPercent);
    const percentage = tipPercent/100;
    const tip = bill*percentage;
    const numberTip = tip*1;
    const finalAmount = numberBill + numberTip;
    var result = document.getElementById("answer");
    result.innerHTML = finalAmount;
}

function tipCalculator5() {
    var bill = document.getElementById('input').value;
    var numberBill = bill * 1;
    var tipPercent = document.getElementById("100").innerText;
    console.log(tipPercent);
    const percentage = tipPercent/100;
    const tip = bill*percentage;
    const numberTip = tip*1;
    const finalAmount = numberBill + numberTip;
    var result = document.getElementById("answer");
    result.innerHTML = finalAmount;
}