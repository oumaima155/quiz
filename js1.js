function alpha() {
  var nom = document.getElementById('nom').value;
  var regex = /^[A-Z][a-z]*$/;

  if (nom === "") {
    alert("Please input your name.");
    return false;
  } else if (!regex.test(nom)) {
    alert("Please write your name. The first character should be capitalized.");
    return false;
  }else{
     alert("Hey " + nom + ", I hope you will enjoy here ^-^");
    window.location.href="quizz.html";
  }
}

var myjsonqst = '{"qst":["What is the largest planet in our solar system?","What is the closest star to Earth (besides the Sun)?","What is the name of the galaxy that contains our solar system?","What is a supernova?","What causes the seasons on Earth?"]}';
var myjsonrep = '{"rep1":["Earth"," Jupiter"," Saturn","Mars"],"rep2":["Alpha Centauri","Sirius"," Proxima Centauri","Betelgeuse"],"rep3":["Andromeda","Milky Way","Sombrero","Whirlpool"],"rep4":["A type of comet"," A type of galaxy"," An exploding star","A type of asteroid"],"rep5":["The tilt of Earth s axis"," The distance from the Sun","The speed of Earth s rotation","The presence of the Moon"]}';
var myobjsqt = JSON.parse(myjsonqst);
var myobjrep = JSON.parse(myjsonrep);
var r = 0;
var i = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('sqt').innerHTML = myobjsqt.qst[0];
  document.getElementById('b1').innerHTML = myobjrep.rep1[0];
  document.getElementById('b2').innerHTML = myobjrep.rep1[1];
  document.getElementById('b3').innerHTML = myobjrep.rep1[2];
  document.getElementById('b4').innerHTML = myobjrep.rep1[3];
});

function plus1(buttonIndex) {
  if (buttonIndex === 0) {
    r = r + 1;
  }

  if ((i === 2 || i === 0) && buttonIndex === 1) {
    r = r + 1;
  } else if ((i === 1 || i === 3) && buttonIndex === 2) {
    r = r + 1;
  } else if (i === 4 && buttonIndex === 0) {
    r = r + 1;
  }

  alert(r);

  if (i === 4) {
    window.location.href = "result.html";
  }

  i = i + 1;

  if (i < myobjsqt.qst.length) {
    var n = "rep" + (i + 1);
    document.getElementById('sqt').innerHTML = myobjsqt.qst[i];
    document.getElementById('b1').innerHTML = myobjrep[n][0];
    document.getElementById('b2').innerHTML = myobjrep[n][1];
    document.getElementById('b3').innerHTML = myobjrep[n][2];
    document.getElementById('b4').innerHTML = myobjrep[n][3];
  }
}
var myjsonqst = '{"qst":["What is the largest planet in our solar system?","What is the closest star to Earth (besides the Sun)?","What is the name of the galaxy that contains our solar system?","What is a supernova?","What causes the seasons on Earth?"]}';
var myjsonrep = '{"rep1":["Earth"," Jupiter"," Saturn","Mars"],"rep2":["Alpha Centauri","Sirius"," Proxima Centauri","Betelgeuse"],"rep3":["Andromeda","Milky Way","Sombrero","Whirlpool"],"rep4":["A type of comet"," A type of galaxy"," An exploding star","A type of asteroid"],"rep5":["The tilt of Earth s axis"," The distance from the Sun","The speed of Earth s rotation","The presence of the Moon"]}';
var myobjsqt = JSON.parse(myjsonqst);
var myobjrep = JSON.parse(myjsonrep);
var r = 0;
var i = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('sqt').innerHTML = myobjsqt.qst[0];
  document.getElementById('b1').innerHTML = myobjrep.rep1[0];
  document.getElementById('b2').innerHTML = myobjrep.rep1[1];
  document.getElementById('b3').innerHTML = myobjrep.rep1[2];
  document.getElementById('b4').innerHTML = myobjrep.rep1[3];
});

function plus1(buttonIndex) {

  if ((i === 2 || i === 0) && buttonIndex === 1) {
    r = r + 1;
  } else if ((i === 1 || i === 3) && buttonIndex === 2) {
    r = r + 1;
  } else if (i === 4 && buttonIndex === 0) {
    r = r + 1;
  }

  if (i === 4) {
    alert("You got " + r + " right! Write question");

    window.location.href = "result.html";
  }

  i = i + 1;

  if (i < myobjsqt.qst.length) {
    var n = "rep" + (i + 1);
    document.getElementById('sqt').innerHTML = myobjsqt.qst[i];
    document.getElementById('b1').innerHTML = myobjrep[n][0];
    document.getElementById('b2').innerHTML = myobjrep[n][1];
    document.getElementById('b3').innerHTML = myobjrep[n][2];
    document.getElementById('b4').innerHTML = myobjrep[n][3];
  }
}


