let quotesArr = [];

const fetchQuotes = async () => {
  try {
    const res = await fetch('https://dummyjson.com/quotes');
    const data = await res.json();
    quotesArr = data.quotes;
  } catch (err) {
    print(`An error happened while fetching the quotes!\n${err}`);
  }
};

function searchQuote() {
  // Clear the output
  document.getElementById('output').innerHTML = '';
  
  let quote = readText()
  const resultARR = quotesArr.filter(q => { return q.quote.toLowerCase().includes(quote.toLowerCase()) })
  if (resultARR.length === 0) {
    print("No quotes matched")
  } else {
    print("The quotes:")
    resultARR.forEach((q, i) => {
      print(`${i + 1}. ${q.quote}`);
    });
  }
  
  // Clear the text field
  document.getElementById('userInput').value = '';
}

function print(str) {
  var outputElement = document.getElementById('output');
  var newLineElement = document.createElement('div');
  newLineElement.textContent = str;
  outputElement.appendChild(newLineElement);
}

function readText() {
  var userInput = document.getElementById('userInput').value
  return userInput
}

const start = async () => {
  await fetchQuotes();
};
