**  Day 1  **

# Today i learnt the basisc of Java Script

1. Java Script Learning

2. How to print in Java Script using [console.log()]

3. How to connect java script to browser
    -1. first to html - in html file under <body> tage write <script src = "file_name" ></script>
    -2. html is directly connected to browser

4. Java Script as a Dynamically language (No need to write data type while intializing)

5. Understanding of let, const, var
    -1. var- variable can be re-declared &updated.A global scope variable
    -2. let- variable cannot be re-declared but can be updated. A block scope variable.
    -3. const- Variable cannot be re-declared or updated. A block scope variable.

6. let a; (will work)

7. const a; (will show error , we have to initialize it -- const a =10;)

8. understanding of blocks
    -1. { 
        let a =5;
        console.log(a);
        }
    -2. {
        let a = 10;
        console.log(a);
        }
    ** in block we cannot update the values again

9. Data Types - Number , string, Boolean, Undefined, NUll, BigInt, Symbol

10. Objects - (key : value)
    const student = {
        fullName: "Rahul Kumar",
        age : 20,
        cgpa : 8.2,
        isPass : true,
    };
    console.log(student["age"]);

    const student = {
        fullName : "Rahul Kumar",
        age:20,
        cgpa: 8.89,
        isPass : true,
    };
    console.log(student.age);

    ** same answer for both the statements
