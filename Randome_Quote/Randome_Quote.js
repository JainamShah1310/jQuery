var a = document.getElementById("quotetext");
//quote Change Java Script 
function changeQuote() {
    document.getElementById("quoteText").innerHTML = "&#8220;" +  twainSet[Math.floor(Math.random() * 25)] + "&#8221;";
}
// color change Java script
function colorCH() {
  document.getElementById("a1").style.backgroundColor = b[Math.floor(Math.random() * 18)];
}

var b= [ '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857","#eedd99"];

setInterval(colorCH,5000);
setInterval(changeQuote,5000);
var twainSet = [
"If you tell the truth, you don't have to remember anything.",
"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
"Good friends, good books, and a sleepy conscience: this is the ideal life.",
"The man who does not read has no advantage over the man who cannot read.",
"I have never let my schooling interfere with my education.",
"Never tell the truth to people who are not worthy of it.",
"God created war so that Americans would learn geography.",
"Never allow someone to be your priority while allowing yourself to be their option.",
"Wrinkles should merely indicate where the smiles have been.",
"Sanity and happiness are an impossible combination.",
"Always do what is right. It will gratify half of mankind and astound the other.",
"You can't depend on your eyes when your imagination is out of focus.",
"If you don't read the newspaper, you're uninformed. If you read the newspaper, you're mis-informed.",
"Courage is resistance to fear, mastery of fear - not absence of fear.",
"Kindness is a language which the deaf can hear and the blind can see.",
"Everyone is a moon, and has a dark side which he never shows to anybody.",
"I've lived through some terrible things in my life, some of which actually happened.",
"The best way to cheer yourself is to try to cheer someone else up.",
"Education: the path from cocky ignorance to miserable uncertainty.",
"The secret to getting ahead is getting started.",
"All you need in this life is ignorance and confidence; then success is sure.",
"The worst loneliness is to not be comfortable with yourself.",
"Get your facts first, and then you can distort them as much as you please.",
"A clear conscience is the sure sign of a bad memory.",
"History doesn't repeat itself, but it does rhyme.",



];