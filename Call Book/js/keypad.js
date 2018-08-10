
class Keypad {
  constructor (options){

  }



  outputNumb(value){
    let numb = document.getElementById("numberInput")
      numb.innerHTML += value;
  }


  glyphicon(){
    let numb = document.getElementById("numberInput")
    numb.innerHTML = "";
  }




  addUserPageOutput() {
    let main = document.getElementById('app')

    main.innerHTML = `<header class="header">
  		<div class="container top-radius">
  			<h2>Keypad</h2>
  		</div>
  	</header>
  	<main class="main">
  		<div class="container">
  			<div class="number">
  				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
  				<span id="numberInput" class ="numbers"></span>
  				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true" onclick="myKeyad.glyphicon()"></span>
  			</div>
        <div class="keypad-holder">

          <button class="key numbersInKeypad" >1</button>
          <button class="key numbersInKeypad" >2</button>
          <button class="key numbersInKeypad" >3</button>
          <button class="key numbersInKeypad" >4</button>
          <button class="key numbersInKeypad" >5</button>
          <button class="key numbersInKeypad" >6</button>
          <button class="key numbersInKeypad" >7</button>
          <button class="key numbersInKeypad" >8</button>
          <button class="key numbersInKeypad" >9</button>
          <button class="key numbersInKeypad" >*</button>
          <button class="key numbersInKeypad" >0</button>
          <button class="key numbersInKeypad" >#</button>

          <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
         </div>
         </div>
         </main>`



      let placeNumbers = document.getElementById("numberInput");
      let keypadsButtons = document.querySelectorAll("button.numbersInKeypad");
      [...keypadsButtons].forEach(keypadButton => {
      keypadButton.addEventListener("click", function(event) {
if (placeNumbers.innerHTML.length <=15) {


    if (keypadButton.innerHTML == "#" && placeNumbers.innerHTML == "" ||
      keypadButton.innerHTML == "*" && placeNumbers.innerHTML == "") {
      placeNumbers.innerHTML += `${keypadButton.innerHTML}`
    } else if (placeNumbers.innerHTML[0] == "*" ||
      placeNumbers.innerHTML[0] == "#") {
      placeNumbers.innerHTML += `${keypadButton.innerHTML}`
    } else if (keypadButton.innerHTML != "#" && placeNumbers.innerHTML == "" ||
      keypadButton.innerHTML != "*" && placeNumbers.innerHTML == "") {
      placeNumbers.innerHTML += `(${keypadButton.innerHTML}`;
    } else if (keypadButton.innerHTML == "#" && placeNumbers.innerHTML[0] == "(" ||
      keypadButton.innerHTML == "*" && placeNumbers.innerHTML[0] == "(") {
      placeNumbers.innerHTML = placeNumbers.innerHTML
    } else if (placeNumbers.innerHTML.length == 3) {
      placeNumbers.innerHTML += `${keypadButton.innerHTML})-`
    } else if (placeNumbers.innerHTML.length == 8 || placeNumbers.innerHTML.length == 11) {
      placeNumbers.innerHTML += `-${keypadButton.innerHTML}`
    } else {
      placeNumbers.innerHTML += `${keypadButton.innerHTML}`
    }
  }
  })
    })

    window.addEventListener("keydown", e => {
      

      if (e.keyCode <= 57 && e.keyCode >= 48 && placeNumbers.innerHTML.length <= 15) {


      if (String.fromCharCode(e.keyCode) == "#" && placeNumbers.innerHTML == "" ||
        String.fromCharCode(e.keyCode) == "*" && placeNumbers.innerHTML == "") {
        placeNumbers.innerHTML += `${String.fromCharCode(e.keyCode)}`
      } else if (placeNumbers.innerHTML[0] == "*" ||
        placeNumbers.innerHTML[0] == "#") {
        placeNumbers.innerHTML += `${String.fromCharCode(e.keyCode)}`
      } else if (String.fromCharCode(e.keyCode) != "#" && placeNumbers.innerHTML == "" ||
        String.fromCharCode(e.keyCode) != "*" && placeNumbers.innerHTML == "") {
        placeNumbers.innerHTML += `(${String.fromCharCode(e.keyCode)}`;
      } else if (String.fromCharCode(e.keyCode) == "#" && placeNumbers.innerHTML[0] == "(" ||
        String.fromCharCode(e.keyCode) == "*" && placeNumbers.innerHTML[0] == "(") {
        placeNumbers.innerHTML = placeNumbers.innerHTML
      } else if (placeNumbers.innerHTML.length == 3) {
        placeNumbers.innerHTML += `${String.fromCharCode(e.keyCode)})-`
      } else if (placeNumbers.innerHTML.length == 8 || placeNumbers.innerHTML.length == 11) {
        placeNumbers.innerHTML += `-${String.fromCharCode(e.keyCode)}`
      } else {
        placeNumbers.innerHTML += String.fromCharCode(e.keyCode);
      }
    }

    })



  }
}

let myKeyad = new Keypad();
myKeyad.addUserPageOutput()
