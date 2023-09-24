let object = {
    someProp: "ZYZ",
}

function checkObjectForEmptiness(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)){
            return false;
        }
    }
    return true;
}

console.log(checkObjectForEmptiness(object))

/////////////////////////////////////////////////////////

let user = {
    name: prompt("Enter your name please", ""),
    age: prompt("Enter your age please", ""),
    sayHello: function() {
        return "Hello, I,m " + this.name + ", I`m " + user.age;
    }
}

console.log(user.SayHello)
console.log(JSON.stringify(user.sayHello()))

////////////////////////////////////////////////////////////

const calculator = {
    ask: function() {
        this.num1 = parseFloat(prompt("Enter first number"));
        this.num2 = parseFloat(prompt("Enter second number"))
        if (typeof this.num1 !== "number"  && typeof this.num2 !== "number" ) {
            alert("You have entered non number in the prompt window")
        }
    },
    sum: function() {
        console.log("The sum of numbers are " + (this.num1 + this.num2))
    },

    mul: function() {
        console.log(`The multiplication of numbers are ` + this.num1 * this.num2)
    }
}

calculator.ask()

calculator.sum()

calculator.mul()