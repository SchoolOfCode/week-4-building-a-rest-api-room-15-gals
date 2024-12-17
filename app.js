import express from "express";
const app = express();
const PORT = 3000;

import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});

//Ticket 3
app.get("/quotes", async function (req, res) {
  //Write a get request, select correct location to retrieve response.
  //Respond with the quotes
  const quotes = await getQuotes(); // Create a variable and store the function call and await promise
  res.json(quotes); //Return quotes and stringify them from the JSON package.
});

////Write a request handler to return the correct response
//perform the correct action when a GET request is received to /quotes.
//Choose the appropriate helper function from quote.js to get your data.

//Ticket 4 

//Write a request handler to return the correct response and 
// perform the correct action when a GET request is received to /quotes/:id, 
// with a particular ID provided in the url.
//  Choose the appropriate helper function from quote.js to get your data.

// listen for a get request and response 
// the route is /quotes/:id 
// create a variable to store the correct function which gets the quote by id 
//create a response that is the quote in JSON format 

app.get("/quotes/:id", async function (req, res) {
  const id = req.params.id;
  const quotes = await getQuoteByID(id);
  res.json(quotes);

});

//Ticket 5 - Create the POST route handler
//Write a request handler to return the correct response 

app.post("/quotes", async function (req, res) {
try{
  const quotes = await getQuotes();
  res.status(200).json(quotes) //added the status code for best practice
}
 catch(error) { 
  res.status(500).json({message: "Error getting quotes"}); //added the status code and error code for best practice
} 
});
//and perform the correct action when a POST request is received to /quotes. 
//Choose the appropriate helper function from quote.js to create your data.