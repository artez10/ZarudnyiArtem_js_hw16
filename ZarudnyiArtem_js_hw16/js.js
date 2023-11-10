let result = 0;

prompt("what is 2+2?") === "4" ? (result += 10) : (result += 0);
prompt("Does the Sun rise at the east?") === "yes" ? (result += 10) : (result += 0);
prompt("Devide 5/0") === "nope" ? (result += 10) : (result += 0);
prompt("What color is the sky") === "blue" ? (result += 10) : (result += 0);
prompt("What is the Answer to the Ultimate Question of Life, the Universe, and Everything?") === "42" ? (result += 10) : (result += 0);

alert(`you reached the score of ${result} points`)




