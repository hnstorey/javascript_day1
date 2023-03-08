//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            return `Matched ${dog_names[i]}`
        }
        else {
            return 'No matches'
        }
    }
}

console.log(findWords())

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0; i<arr.length; i += 2){
    arr.splice(i,1,"even index")}
        return arr
}

console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// CodeWars JavaScript Solutions

// Convert a number to a string:

//Python solution: 
/* def number_to_string(num):
    return str(num) */

function numberToString(num) {
    return num.toString();
  }

// Convert a string to a number:

/* Python solution:
def string_to_number(s):
    s = int(s)
    return(s)
    pass */

const stringToNumber = function(str){
    return Number(str);
  }

// List Filtering

/* Python solution:
def filter_list(l):
    nums = []
    for item in l:
        if type(item) == int:
            nums.append(item)
    return nums */
function filter_list(l) {
    let new_list = [];
    for (let i = 0; i < l.length; i++){
      if (typeof(l[i]) === 'number'){
        new_list.push(l[i])
      }
    }{return new_list}
  }

// Counting Sheep
/* def count_sheeps(sheep):
  # TODO May the force be with you
    sheep_count = 0
    
    for baa in sheep:
        if baa == True:
            sheep_count += 1
    return(sheep_count) */

function countSheeps(arrayOfSheep) {
    let sheep = arrayOfSheep.filter(Boolean).length;
        return sheep
    }