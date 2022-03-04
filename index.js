//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// a string
//an array
// i need to loop array and search string for each word in array
// use the string.search() method to search the dog_string for each dog name


/* let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

/* if using a normal function:
line 20 would be:
function findWords(str, names) {}

let findWords = (str, names) => {
    let matched = false;
    for (let i=0; i<names.length; i++){
        console.log(`Index ${i} contains ${names[i]}`);
        if (str.search(names[i]) != -1){ // I know search found something if its return value is not -1
            console.log(`Matched dog_name ${names[i]}.`)
            matched = true;
        } 
    }
    if (matched === false){
        console.log(`No matches.`)
    }
} */


//Call method here with parameters
//findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// go through my arr and replace each even index with "evenindex"
// how can u do this with splice? arr.splice(<index to start at>, <number of items to remove>, <items to add>)
// I want to start at any even index, remove 1 item, and add one 'even index'
// arr.splice(<any even index>, 1, 'even index')

function replaceEvens(arr){
    for (i=0; i<arr.length; i+=2) {
        console.log(`Index ${i} contains ${arr[i]}`)
        arr.splice(i , 1, "even index"); 
    }
}
replaceEvens(arr1)
console.log(arr1); // we can console log here since it is in place after we replaceEvens
//splice is an in place algo

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//exercise #2 done with map - out of place algo

let replaced_evens = arr1.map( element => {
    if(arr1.indexOf(element)%2 === 0) {
        return 'even index'
    }
    return element
})

console.log(replaced_evens)