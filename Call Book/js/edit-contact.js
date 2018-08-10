class EditContact {
  constructor (options){

  }
  addEditFieldToMainInfo (arr){
    const fields = arr.map(value =>
      `<div class="edit-field">
        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          <span>${value}</span>
        </button>
      </div>`
    ).join("")
    return `<div class="main-info-holder"> ${fields}</div> `
  }

   addEditFieldToScrollHolder(arr){
    const scrollHolder = arr.map(value =>
      `<div class="edit-field">
        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          <span>${value}</span>
        </button>
      </div>`
    ).join("")

    return `<div class="scroll-holder">
      <div class="edit-info">
        ${scrollHolder}
        <div class="edit-field">
          <button href="#" class="delete-contact">delete contact</button>
        </div>
      </div>
    </div>`
  }

  editContactPageOutput(){
    let main = document.getElementById('app')

    main.innerHTML = `<header class="header">
  		<div class="container top-radius">
  			<nav class="user-top-line">
  				<a href="user.html">Cansel</a>
  				<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn">Done</button>
  			</nav>
  		</div>
  	</header>
  	<main class="main">
  		<div class="container">
  			<div class="edit-main-info">
  				<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
          ${this.addEditFieldToMainInfo(["First Name",'Last Name','Company'])}

  			</div>

        ${this.addEditFieldToScrollHolder(['add mobile phone','add  home phone',
        'add email','add address','add birthday','add social profile', 'add field'])}

  			</div>
  		</main>`

  }
}

let myEditContact = new EditContact()
myEditContact.editContactPageOutput()
