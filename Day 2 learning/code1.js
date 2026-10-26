// Day 2 coding learning

age =23;
console.log(age);

console.log(student["age"]);
console.log(student.age);


// making a details for a products -- like we see on amazon/ Flipkart

const product = {
    title : "white leather Ball",
    rating : 4,
    offer : 5,
    price : 540,
};

console.log(product);

// addition with string
let c = "abcd" +1;
console.log(c);  // output - abcd1

// storing information of a profile from instagram user

const profile = {
    userName : "Vikas26Kumar",
    name : "Vikas",
    noOfPost : 195,
    followers : 596,
    following : 5,
    bio : "Learning JS | Passout Student | Interested in software development",
};
console.log(profile);
console.log(typeof profile);
// checking data type in key value pair 
console.log(typeof profile["userName"]); 


// comments

// These are used to write comments

/*  */  
// in between above we can write long comments 


let z = 5;
let x = 2;
//operators in java

console.log("z=",z, "&x=", y);
console.log("z+x=", z+x);  // addition
console.log("z-x=", z-x); // subtraction
console.log("z*x=", z*x); // multiplication
console.log("z/x=", z/x); // divide
console.log("z%x=", z%x); // remainder
console.log("z**x=", z**x); // power

// assignment operator
z -=4; // z =z-4;
console.log("z=",z); //1

//comparison operators
console.log(z>x); // true



// strictly equal - it will directly check between two values 
let u =10;
let y = "10";
console.log(u===y); // it will give false
// equal operator 
console.log(u==y); // it will give true


// Logical operators
let cond1 = z>x; // true
let cond2 = z===5; // true
console.log("cond1 && cond2 =", cond1 && cond2); // true
