//event listener 
// FSJS - Random Quote Generator

// An array of quotes taken mostly involving my interests and hobbies
var quotes = [
    {quote: "Ponte las pilas",
     source: "Mexican Proverb"},
    {quote: "You must unlearn what you have learned",
     source: "Yoda"},
    {quote:"It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe",
     source:"Muhammad Ali"},
    {quote:"Run until you can't run anymore, and then run again. Constant effort is life's greatest shortcut.",
     source: "Hajime No Ippo"},
    {quote:"If you aren't continuously looking up and putting in the effort, you can't reach the next level.",
     source: "Initial D"},
    {quote:"Whatever came to mind, whatever came to hand, I would read",
     source:"Stephen King"}
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
    var quoteIndex = Math.floor( Math.random() * (quotes.length)); //this grabs a random index 
    for (let i = 0; i < array.length; i++) {
    var randomQuote = array[quoteIndex];
    }
    return randomQuote; //gives the quote back
  }

// Create the printQuote funtion and name it printQuote
    function printQuote() {
        //this sets up an empty string (?) to put a whole message
        var message = "";     
        var result = getRandomQuote(quotes);    //calls to get random function with the quotes array 
        message = "<p class='quote'>" + result.quote + "</p>";  //this selects quote
        message += "<p class='source'>" + result.source;    //this selects the paired source
        message += "</p>";
    
        document.getElementById('quote-box').innerHTML = message;
    }
    
    
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);