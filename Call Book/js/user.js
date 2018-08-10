class User{

  constructor(options){
  }


  optionsTableuOtpu (arr) {

    let table = arr.map(value =>
      `<div class ="options-item"><a href="#">${value}</a></div>`

    ).join("")
    return `<div class="options-table">${table}</div>`
  }



  optionsLine(text, className){
    let i = 0;

    let table = text.map(value =>
      `<div class="${value}">
        <div class= "options-icon"><span class="icon glyphicon ${className[i++]}" aria-hidden="true"></span></div>

        <span class = "options-text"> ${value} </span>
      </div>`
    ).join("");

    return `<div class="options-line"> ${table} </div>`;
  }


  addUserPageOutput () {
    let main = document.getElementById('app')

    main.innerHTML += `<header class="header">
  		<div class="container top-radius">
  			<div class="user-top-line">
  				<a href="index.html">
  					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  					Contacts</a>
  					<a href="edit-contact.html">Edit</a>
  				</div>
  			</div>
  		</header>

  		<main class="main">
  			<div class="container">
  				<img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
  				<div class="user-name">User Name</div>


          ${this.optionsLine(["massege","call","video","mail"],
          ["glyphicon-comment" ,"glyphicon-earphone","glyphicon-facetime-video","glyphicon-envelope"])}



  				<div class="tel-number">
  					<h3>mobile</h3>
  					<div> +38 (093) 989 89 89</div>
  				</div>
  				<div class="tel-number">
  					<h3>home</h3>
  					<div> +38 (093) 989 89 89</div>
  				</div>
          ${this.optionsTableuOtpu(["Notes" , "Send message","Share contact","Add to favorites",
                              "Share my location","Block this caller"])}

  			</div>
  		</main>`
    }
}

let myUser = new User()
myUser.addUserPageOutput()
