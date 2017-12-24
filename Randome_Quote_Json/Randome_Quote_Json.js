function getQuote() {

  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {
    quoteText = data.quoteText;

    
    quoteAuthor = data.quoteAuthor;
    
  document.getElementById("quoteText").innerHTML = "&#8220;"+quoteText+"&#8220;\n";
  document.getElementById("author").innerHTML = "&#8220;Author:--"+quoteAuthor+"&#8220;";
    
    
  });}

