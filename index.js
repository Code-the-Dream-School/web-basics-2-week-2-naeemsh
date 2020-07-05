
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

function multiply(a, b){
  let answer = a
  for(var i = 0; i < b - 1; i++){
    answer += a
  }
  return answer
  }

const answer1 = multiply( parseInt(prompt('Enter the number you want to mulitply')), parseInt(prompt('Enter the number you want to multiply by')));
console.log('answer1', answer1);

const htmlTarget = document.getElementById('a-1');
htmlTarget.innerHTML = answer1;



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate 
//if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and 
//the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
vowelOrConsonant = (paragraph) => {
    //using regular expression to store vowel values in an array, g is for global, i is for case insensitive
    const vowel = /[a,e,i,o,u]/gi;
    //using regular expression to store consonant values in an array, g is for global, i is for case insensitive
    const consonant = /[B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z]/gi;
    //Matching the characters to regular expression in vowels using match function
    const vowelCharacters = [paragraph.match(vowel)];
    //Matching the characters to regular expression in Consonant using match function
    const consonantCharacters = [paragraph.match(consonant)];
    //ask input from user
    const userInput = prompt("Which one do you want to see first, Only write vowel or consonant");
    let finalArray;
    //ask user to enter either vowel or consonant. which ever user chooses will be displayed first.
    if (userInput === "vowel"){
        finalArray = `${vowelCharacters},${consonantCharacters}`;
        return finalArray;
    } else if (userInput === "consonant") {
        finalArray = `${consonantCharacters},${vowelCharacters}`;
        return finalArray;
    }else {
        finalArray = "Error, Your input was incorrect.";
        return finalArray;
    }
}
//vowelOrConsonant('absd sdasd ssadas');

const answer2 = vowelOrConsonant(prompt('Enter a sentence/paragraph to find out the vowels and consonants'));

const htmlTarget2 = document.getElementById('a-2');
htmlTarget2.innerHTML = answer2;




//------------------------ Question 3 ---------------------------
// Now let's create a small game. The game consists in a player (ask the user for the name). The player has 3 oportunities to guess a number.
// The number is a random number between 10 - 50.
// If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, 
// then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
// You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
// where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, 
// is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or 
//the name if the player wins

//1. Make an object named player, with name = string, lives = number, fail_number = number
//2. Make fail_number to be an array 
//2.1 Make a variable which will generate a random number
//3. Write a loop to run the program 3 times
//4. Write a condition inside for loop where for loop will end when 3 wrong tries are completed or if the user successfully 
//5. Display congratulation message if player guessed it right. 
// guessed the number then also the program will end, irrespective of the loop.


guessTheNumber  = () => {

    //create a variable that gives a random value between 10 - 50, actually it will give one number less because we are rounding it with floor function.
    let playerName = prompt("Enter the player name");
    //Create an object with .the required properties/
    let player = {
        name : playerName.toUpperCase(),
        lives : 3,
        fail_number : []
    }
    //above working good, checked.

    let randomNumber = 32; // Math.floor(Math.random()*40 + 10);
    let guessNumber; //prompt("Guess the number between 10 - 50, you can only try three times");
    let a;
    for (let i=3; i>=0; i--){    
        guessNumber = parseInt(prompt("Guess the number")); // guess the number in the loop

        if (guessNumber === randomNumber){
            a = `Congratulations ${player.name}!`; //congratulations message with player name in capital
            break;
        } else {
            player.lives--; //lives are minusing
            //console.log(player.lives); //delete this
            player.fail_number.push(1); //Number of failures will be represented by 1
            //console.log(player.fail_number); // delete this
            if (player.lives === 0){
               a = `Game Over. You have exhausted your ${player.fail_number.length} tries.`; // game over when 3 tries are over
               break;
            }
         }
     }
        //Above works good, checked

        return a;
    }

const answer3 = guessTheNumber();
console.log(answer3);

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3

//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options 
// to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. 
// The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, 
// the third one based on the library property. 
// finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of 
// the array based on the selected property
// example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; 
// Walter Isaacson; The Road Ahead"

//hints below:
//do sort() and then do reverse() to get highest to lowest value of numbers (100 to 1), and for strings from z to a

sort = () => {

    let library = [
      {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
      },
      {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
      },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
      }];
    let field = prompt('How would you like your books to be sorted by: title, author, or libraryID?');
    function compare(a, b) {
      if (field === 'author' || field === 'title') {
        return b[field].length - a[field].length;
        //return a.libraryID - b.libraryID;
  console.log(field);
      } else {
        return b[field] - a[field];
      }
    }
    library.sort(compare);
    let sorted = '';
    for (let i = 0; i < library.length; i++) {
      sorted += (library[i][field])
      if (i < library.length - 1) {
        sorted += '; ';
      }
    }
  
    console.log(sorted);
    return sorted;
  
  }
  
  const answer4 = sort()
  
  const htmlTarget4 = document.getElementById('a-4')
  htmlTarget4.innerHTML = answer4



/*

I have JavaScript object array with the following structure:

objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
I want to extract a field from each object, and get an array containing the values, for example field foo would give array [ 1, 3, 5 ].

I can do this with this trivial approach:

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]
Is there a more elegant or idiomatic way to do this, so that a custom utility function would be unnecessary? */