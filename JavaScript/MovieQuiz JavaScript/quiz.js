// Beginning, no correct answers.
var correct = 0;

// Quiz Questions Begins Theme: Movies.
var quest1 = prompt('What movie is about a boat starring Leonardo Dicaprio?');
if ( quest1.toUpperCase() === 'TITANIC' ){
  correct += 1;
}
var quest2 = prompt('What movie was Quentin Tarrantinos first block buster?');
if ( quest2.toUpperCase() === 'PULP FICTION' ){
  correct += 1;
}
var quest3 = prompt('What movie is about a hobbit and the path of a ring?');
if ( quest3.toUpperCase() === 'LORD OF THE RINGS' ){
  correct += 1;
}
var quest4 = prompt('Wich movie is based on a book of Stephen King and portraits a family in a haunted hotel?');
if ( quest4.toUpperCase() === 'THE SHINING' ){
  correct += 1;
}
var quest5 = prompt('Who is the director behind Lockstock & two smoking barrels?');
if ( quest5.toUpperCase() === 'GUY RICHIE' ){
  correct += 1;
}

if (correct === 5) {
    alert('You had ' +correct+ ' correct answers, you\'ve earned a gold star!')
} else if (correct >= 3 ) {
    alert('You had ' +correct+ ' correct answers, you\'ve earned a silver star!')
  } else if (correct >= 1) {
    alert('You had ' +correct+ ' correct answers, you\'ve earned a bronze star!')
  } else {
    document.write('<h2 style="color: red;">You had no correct answers, go and watch some movies!!</h2>')
  }
