function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const multiplication = num1 * num2;
    const division = num1 / num2;
    alert('Multiplication: ' + multiplication + ', Division: ' + division);
}

function findLargest() {
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    const largest = Math.max(num3, num4, num5);
    alert('Largest: ' + largest);
}

function sumIntegers() {
    const num6 = parseFloat(document.getElementById('num6').value);
    const num7 = parseFloat(document.getElementById('num7').value);
    let sum = num6 + num7;
    if (num6 === num7) {
        sum *= 3;
    }
    alert('Sum: ' + sum);
}

function closestTo100() {
    const num8 = parseFloat(document.getElementById('num8').value);
    const num9 = parseFloat(document.getElementById('num9').value);
    const diff1 = Math.abs(100 - num8);
    const diff2 = Math.abs(100 - num9);
    const closest = (diff1 < diff2) ? num8 : num9;
    alert('Closest to 100: ' + closest);
}

function firstHalf() {
    const str = document.getElementById('string').value;
    const half = str.length % 2 == 0 ? str.slice(0, str.length / 2) : str;
    alert('First half: ' + half);
}
