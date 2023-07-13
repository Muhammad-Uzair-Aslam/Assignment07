// Assignment 7:
// program # 1;
//Write a js program to find maximum between two numbers.

var num1=prompt("please Enter First Number");
var num2=prompt("please Enter Second Number");
if(num1>num2)
{
    console.log("number1 is greater than number2");
}
else if (num2>num1)
{
    console.log("number1 is greater than number2");
}
else
{
    console.log("No Number is greater");
}

// program # 2;
// Write a js program to find maximum between three numbers.

var num1=prompt("Please Enter First Number");
var num2=prompt("Please Enter Second Number");
var num3=prompt("Please Enter Third Number");
if(num1>num2 && num1>num3)
{
    console.log("First Number is greater");
}
else if(num2>num1 && num2>num3)
{
    console.log("Second Number is greater");
}
else if(num3>num2 && num3>num1)
{
    console.log("Third Number is greater");
}
else if (num1==num2 &&num1==num3)
{
    console.log("Numbers are equal")
}

// program # 3;
//Write a js program to check whether a number is negative, positive or zero

var num=prompt("Please Enter Number");
if(num>0)
{
    console.log(number ," is positive number");
}
else if(num<0)
{
    console.log(number ," is Negative number");
}
else
{
    console.log("Number is zero");
}

// program # 4;
//Write a js program to check whether a number is divisible by 5 and 11 or not.

var number=+prompt("Please Enter Number");
if(number%5==0 && number%11==0)
{
    console.log(number," is divisible by 11 and 5");
}
else
{
    console.log(number," is Not divisible by 11 and 5");
}

// program #5;
//Write a js program to check whether a number is even or odd.

var number=+prompt("please Enter Number that you want to know if it is even or odd");
if(number%2==0)
{
    console.log(number," is even Number");
}
else
{
    console.log(number," is odd Number");
}

// program # 6;
// Write a js program to check whether a year is leap year or not.

var year=+prompt("please Enter year");
if(year%4==0)
{
    if(year%400==0)
    {
    console.log(year," is a leap year");
    }
    else
    {
     console.log(year," is not a leap year");
    }
}
else
{
    console.log(year,"is not a leap year");
}

// program # 7;
//Write a js program to check whether a character is alphabet or not.

const character=prompt("please enter any character");

if((character>='a'&&character<='z') ||(character>='A'&&character<='Z'))
{
    console.log(character," is an alphabet");
}
else 
{
    console.log(character," is not an alphabet");
}


// program # 8;
//Write a js program to input any alphabet and check whether it is vowel or consonant.

var char=prompt("Please enter any alphabet");
char=char.toLowerCase();
if(char==='a'||char==='e'||char==='o'||char==='i'||char==='u')
{
    console.log(char ," is vowel");
}
else{
    console.log(char," is consonent");
}

// program # 9;
//Write a js program to input any character and check whether it is alphabet, digit or special character.
 
var char=prompt("please enter any character");
if(char>='a'&&char<='z'||char>='A'&&char<='Z')
{
    console.log(char," is an Alphabet");
}
else if(char>=0||char<0)
{
    console.log(char," is a digit");
}
else
{
    console.log(char," is a special character");
}

// program # 10;
// Write a js program to check whether a character is uppercase or lowercase alphabet.

var char=prompt("Please Enter any Character");
if(char>='a'&&char<='z')
{
    console.log(char," is lowerCase")
}
else if (char>='A'&&char<='Z'){
    console.log(char," is upperCase")
}
else{
    console.log("this is not a alphabet")
}

