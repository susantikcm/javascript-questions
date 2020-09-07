// let Child = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.ooshies = [];
//     this.addOoshie = (character, category, feature) => {
//         return this.ooshies.push({
//             character: character,
//             category: category,
//             feature: feature
//         });
//     }
// }

// let drakee = new Child("Drakee", 8);
// drakee.addOoshie("characterDarth Vader", "Star Wars", "Dark");
// drakee.addOoshie("Iron Man",  "Marvel",  "Colour Changing");
// let clairee = new Child("Clairee", 5);
// clairee.addOoshie("Elsa", "Disney", "Glow");

// let children = [];
// children.push(drakee);
// children.push(clairee);

// console.log(children);


let shoppingDetails = [
    { item: "Milk", unit: 2, unitPrice: 5.5 }, 
    { item: "Bread", unit: 2, unitPrice: 4.9 }, 
    { item: "Egg", unit: 1, unitPrice: 12.99 }, 
    { item: "lamb chop", unit: 1, unitPrice: 22.59 }, 
    { item: "Beef Scoth", unit: 1, unitPrice: 18.50 }, 
    { item: "Snow Peas", unit: 4, unitPrice: 3.99 }, 
    { item: "green beans", unit: 2, unitPrice: 3.5 }, 
    { item: "Baby Spinach", unit: 3, unitPrice: 5 }, 
    { item: "Potatoes", unit: 5, unitPrice: 3 }, 
    { item: "Carrot", unit: 2, unitPrice: 2 }, 
    { item: "Marshmellow", unit: 1, unitPrice: 4.9 }
];

// let totalPrice = shoppingDetails
//     .map(item => item.unit * item.unitPrice)
//     .reduce((total, unitPrice) => total + unitPrice);

let totalPrice = shoppingDetails
    .reduce((total, item) => total + (item.unit * item.unitPrice), 0);

console.log("Total Price = $" + totalPrice);

// let calculateTotalPrice = (shoppingDetails) => {
//         let totalPrice = 0;

//         for(var item=0; item<shoppingDetails.length; item++) {
//             totalPrice += shoppingDetails[item].unit * shoppingDetails[item].unitPrice;
//         }
//         console.log("Total Price = $" + totalPrice);
// }

// calculateTotalPrice(shoppingDetails);

// let studentList = [ "Francois", "Gavin Pili", "Jahnavi Sangisetti", "Jenny Lam", "Kesiye Y Inengite", "Lloyd Hall", "Monali Dela", "Nav", "Nick Kehagias", "Robin", "Shane Hunter", "Susanti",  ]
// let findStudent = (letter) => studentList.filter((student) => student.charAt(0).toLowerCase() === letter.toLowerCase());
// console.log(findStudent("s"));

// let findStudent = (students, letter) => {
//     console.log("list of Students with name contains letter " + letter + ":");
//     for(var i=0; i<students.length; i++) {
//         if(students[i].charAt(0).toLowerCase() === letter.toLowerCase())
//         {
//             console.log(students[i].charAt(0).toLowerCase() + letter.toLowerCase() + " " +students[i]);
//         }
//     }
// }

// findStudent(studentList, "r");

// for(; ;){   console.log( "code busters best" ); }
// for(var x=0 ; x <=6; x+=2) 
//     for(var y=0 ; y <= 5; y+=5)  
//         console.log("x :" + x + "   y :" + y);

// var array = [
//     1, 
//     2, 
//     [
//         [3,4], 
//         [5,6], 
//         [ 
//             [7,8]
//         ]
//     ]
// ];
// console.log(array[2][2][0][0]);

var numbers = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [8, 9, 10, 11, 12]
];

// var arraySum = function(numbers) {
//     var sums = [];
//     for(var i = 0; i < numbers.length; i++) {
//       var result = 0;
//       for(var j = 0; j < numbers[i].length; j++) {
//         result += numbers[i][j];
//       }
//       sums.push(result);
//     }

//     return sums;
// }

// var arraySum = (numbers) => (number).map(number => number.reduce(()))

// console.log(arraySum(numbers));

//Part 1
let businessHhour = (dayNumber, hourNumber) => {
    if(dayNumber > 0 && dayNumber < 6) {
        if( hourNumber >= 9 && hourNumber <= 18) {
            console.log("Open");
            return true;
        }
        else {
            console.log("Close");
            return false;
        }    
    }
    else {
        console.log("Close");
        return false;
    }    
};
// businessHhour(2, 18);

//Part 2
let getDayNumber = (janFirstDayNumber, yearDayNumber) => {
    if (yearDayNumber > 0 && yearDayNumber <= 365)
        if(janFirstDayNumber >= 0 && janFirstDayNumber < 6)
            return yearDayNumber % 7;
};
// console.log(getDayNumber(1, 90));

//Part 3
let openingHours = (yearDayNumber, hourNumber) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    let firstDayOfTheYear = 1;
    let day = getDayNumber(firstDayOfTheYear, yearDayNumber);

    console.log("The first day of the year is " + days[firstDayOfTheYear] + 
         " and on the " + yearDayNumber + "th day of the year, it is " + days[day] + ".");  
    businessHhour(day, hourNumber);
};
// openingHours(89, 18);

//Challenge
// let openingHours = () => {
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

//     let aDate = new Date();
//     let hourNumber = aDate.getHours();
//     let day = aDate.getDay();
    
//     console.log(days[day] + " " + hourNumber);  
//     businessHhour(day, hourNumber);
// };
// openingHours();

// JS-04 Arrays and Loops
// Exercise #1
// Part 1
let customer = ["Sofia", "David", "Juan"];
// Part 2
customer.push("Sara");
customer.push("Augustin");
customer.shift();
// Part 3
customer[1] = "Renata";
customer.push("Elena");
// console.log(customer);

// Exercise #2
let printStar = () => {
    let stars = "";
    for(var x=1; x<=5; x++) {
        for(var y=1; y<=x; y++) {
            stars += "* ";
        }
        console.log(stars);
        stars = "";
    }
}
//printStar();

// Exercise #3
let decreaseValue = () => {
    let xValue = 10;
    while(xValue > 0) {
        xValue -= 0.5;
        console.log(xValue);
    }
}
// decreaseValue();

let oddNumbers = () => {
    let num = 100;

    while(num > 0) {
        if((num%2) === 1) {
            console.log(num);
        }
        num--;
    }
}
// oddNumbers();

let printNumbers = (n) => {
    let num = 1;
    let print = "";
    while(num <= n) {
        print += "[" + num + "] ";
        num++;
    }
    console.log(print);
}
// printNumbers(7);


let accumulation = (n) => {
    let num = 1;
    let sum = 0;
    while(num <= n) {
        sum += num;
        num++;
    }
    console.log(sum);
}
//accumulation(19);
