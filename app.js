function fraq(num, str) {
    str = str.replace(/\s+/g, '');
    str = str.toLowerCase();
    let allFraq = new Map();
    let resFraq = new Map();
    allFraq.set(str.substring(0, +num), 1);
    for (let i = 1; i < str.length - num + 1; i++) {

        if (allFraq.has( str.substring(i, i + +num) ) ) {

            allFraq.set(str.substring(i, i + +num), 
                allFraq.get(str.substring(i, i + +num)) + 1);

        } else {
            allFraq.set(str.substring(i, i + +num), 1);
        }
    }

    allFraq = new Map([...allFraq.entries()].sort((a, b) => b[1] - a[1]));

    let t = 0;
    for (let [key, value] of allFraq) {
        t++;
        resFraq.set(key, value);
        if (t == 10) {
            break;
        }
    }

    return resFraq;
}

function start() {
    let str = prompt("Enter your string:", ""); 
    let numChar = prompt("Enter number of characters:", ""); 
    
    if (numChar > str.length || isNaN(numChar) || !str.match(/^[0-9a-zA-Z]+$/)){
        alert("Incorrect input. Try again.");
        start();
    } else {
        let result = fraq(numChar, str);

        for (let [key, value] of result) {
            alert(`[${key}, ${value}]`);
        }
    }
}

start();