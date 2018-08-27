class EditContact {
  constructor (options){
    this.context
    this.app
  }

  MaximumCallStackSizeExceededDesidion(){
    this.context = new Context()
    this.app = new App()
  }
  addEditFieldToMainInfo (arr){

    const fields = arr.map((value, index, arr) =>
      `<div class="edit-field">
        <button href="#" class="add-btn" >
          <input type="text" id="MainInfoButton_${index}" style="width: 80%; fload: right; margin: 0 auto; color: black; background:transparent; border: 0;"
           value="${value}"></input>
        </button>
      </div>`
  ).join("")

    return `<div class="main-info-holder"> ${fields}</div> `
  }

   addEditFieldToScrollHolder(arr){

    const scrollHolder = arr.map((value, index ,arr) =>
      `<div class="edit-field">
        <button href="#"  class="add-btn">
        <input type="text" id="ScrollHolderButton_${index}" style="width: 80%; fload: right; margin: 0 auto; color: black; background:transparent; border: 0;"
         value="${value}"></input>
        </button>
      </div>`
    ).join("")


    return `<div class="scroll-holder">
      <div class="edit-info">
        ${scrollHolder}
        <div class="edit-field">
          <button href="#" id="delete_button" class="delete-contact">delete contact</button>
        </div>
      </div>
    </div>`
  }

  editContactPageOutput(userToEdit){
    let main = document.getElementById('app')

    main.innerHTML = `<header class="header">
  		<div class="container top-radius">
  			<nav class="user-top-line">
  				<a href="#" id = "cansel">Cansel</a>
  				<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" id="done_btn" class = "done-btn">Done</button>
  			</nav>
  		</div>
  	</header>
  	<main class="main">
  		<div class="container">
  			<div class="edit-main-info">
  				<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
          ${this.addEditFieldToMainInfo([`${userToEdit.name}`,`${userToEdit.surname}`,'add Company'])}

  			</div>

        ${this.addEditFieldToScrollHolder([`${userToEdit.phone}`,'add  home phone',
        `${userToEdit.email}`,'add address','add birthday','add social profile', 'add field'])}

  			</div>
  		</main>`

        this.MaximumCallStackSizeExceededDesidion();


      let canselButton = document.getElementById("cansel")
      canselButton.addEventListener("click", (e)=>{
        this.app.appRender()
        // this.context.serverRequest()


      })
  }
}
