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
