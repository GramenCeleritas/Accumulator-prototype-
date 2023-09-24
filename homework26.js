function Accumulator() {
    this.number = [];
}

const arrNumbers = new Accumulator()

Accumulator.prototype.numberAdding = function(numberAdding) {
    this.number.push(numberAdding)
    console.log('You have added number to array')
}

Accumulator.prototype.increment = function(value) {
    
    if (!this.number[value]) {
        console.log("The following number with index " + value + " does not exist")
    } else {
        this.number[value]++
    }
}

Accumulator.prototype.decrement = function(value) {

    if (!this.number[value]) {
        console.log("The following number with index " + value + " does not exist in array")
    } else {
        this.number[value]--
    }

    
}

Accumulator.prototype.printItems = function() {
    for(let i = 0; i < this.number.length; i++) {
        console.log(`- ${i}. ${this.number[i]}`);
    }

    console.log('________________Print_items_________________');
}

function showNumbersOfArray() {
    arrNumbers.printItems()
}

function numberIcrement() {
    const value = parseFloat(prompt('Enter the number of array you want to Increment'))
    if (isNaN(value)) {
        console.log('Enter numeric value please') }
    arrNumbers.increment(value)
    arrNumbers.printItems()
}

function numberDecrement() {
    const value = parseFloat(prompt('Enter the number of array you want to Decreament'))
    arrNumbers.decrement(value);
    arrNumbers.printItems();
}


function addNumber() {
    const numberAdding = parseFloat(prompt('Enter number for adding to array please'));
    if (isNaN(numberAdding)) {
        alert('Enter the number value only')
    } else  {
        arrNumbers.numberAdding(numberAdding) 
    }
    arrNumbers.printItems()
}

function CancelableAccumulator() {
    this.number = [];
}

CancelableAccumulator.prototype = Accumulator.prototype

const numbers2 = new CancelableAccumulator()

function showNumbersOfArrayCancelable() {
    numbers2.printItems()
}

function numberIcrementCancelable() {
    const value = parseFloat(prompt('Enter the number of array you want to Increment'))
    if (isNaN(value)) {
        console.log('Enter numeric value please') }
        numbers2.increment(value)
        numbers2.printItems()
}

function numberDecrementCancelable() {
    const value = parseFloat(prompt('Enter the number of array you want to Decreament'))
    numbers2.decrement(value);
    numbers2.printItems();
}


function addNumberCancelable() {
    const numberAdding = parseFloat(prompt('Enter number for adding to array please'));
    if (isNaN(numberAdding)) {
        alert('Enter the number value only')
    } else  {
        numbers2.numberAdding(numberAdding) 
    }
    numbers2.printItems()

}

CancelableAccumulator.prototype.clear = function(arrayNumberChoicer ,valueForChangingArrayNumber) {
    this.number.splice(arrayNumberChoicer, 1, valueForChangingArrayNumber);
    numbers2.printItems()
}

// function addNumberforCancelableAccumulator() {
//     const numberAdding = parseFloat(prompt('Enter number for adding to array please'));
//     if (isNaN(numberAdding)) {
//         alert('Enter the number value only')
//     } else  {
//         numbers2.numberAdding(numberAdding) 
//     }
//     numbers2.printItems()
// }


function clearingNumberofArray() {
    let arrayNumberChoicer = parseFloat(prompt('Enter index of array you want to modify'))
    let valueForChangingArrayNumber = parseFloat(prompt('Enter number you want to change in selected index'))
    if (isNaN(arrayNumberChoicer) || isNaN(valueForChangingArrayNumber)) {
        alert('Enter the number value only')
    } else {
        numbers2.clear(arrayNumberChoicer, valueForChangingArrayNumber)
    }

    

}




