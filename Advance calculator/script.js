function appendToDisplay(value) {
    document.getElementById('display').value+=value;
}

function clearDisplay() {
    document.getElementById('display').value='';
}

function deleteLast() {
    let current=document.getElementById('display').value;
    document.getElementById('display').value=current.slice(0, -1);
}

function toggleSign() {
    let current=document.getElementById('display').value;

    if (current) {
        if (current.startsWith ('-')) {
            document.getElementById('display').value=current.substring(1);
        }

        else {
            document.getElementById('display').value='-'+current;
        }
    }
}

function square() {
    let current=document.getElementById('display').value;

    if (current) {
        document.getElementById('display').value=Math.pow(Number(current), 2);
    }
}

function squareRoot() {
    let current=document.getElementById('display').value;

    if (current) {
        document.getElementById('display').value=Math.sqrt(Number(current));
    }
}

function calculate() {
    try {
        let result=eval(document.getElementById('display').value);
        document.getElementById('display').value=result;
    }

    catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}