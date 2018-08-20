class AddUser{
constructor(options){
// this.context = new Context()
  }






  addEditFieldToMainInfo (arr){
    const fields = arr.map(value =>
      `<div class="edit-field">
        <input  placeholder="${value}" href="#" id="${value}" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>

        </input>
      </div>`
    ).join("")
    return `<div class="main-info-holder"> ${fields}</div> `
  }

  addEditFieldToScrollHolder (arr) {
    const scrollHolder = arr.map(value =>
      `<div class="edit-field">
        <input href="#"  placeholder="${value}" id="${value}" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>

        </input>
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

   addUserPageOutput (){
    let main = document.getElementById('app')


    main.innerHTML = `<header class="header">
  		<div class="container top-radius">
  			<nav class="user-top-line">
  				<a href="user.html">Cansel</a>
  				<button class = "done-btn">Done</button>
  			</nav>
  		</div>
  	</header>
  	<main class="main">
  		<div class="container">
  			<div class="edit-main-info">
  				<div class="edit-foto">
  					<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
  						<span>add foto</span></button>
  					</div>
            ${this.addEditFieldToMainInfo(["Name",'Surname','Company'])}
            </div>
            ${this.addEditFieldToScrollHolder(['mobile phone','home phone',
            'email','address','birthday','social profile', 'field'])}
  			</div>
  		</main>`
      let deleteBtton = document.querySelector(".delete-contact")
      let doneBtn = document.querySelector('.done-btn')

      // this.contentEditable();
      deleteBtton.addEventListener('click', e=>{

        let inputs = document.querySelectorAll(' .edit-field > input')

        inputs.forEach(input =>{
          input.value = ""
        })

      })

      // console.log(this);

    }
  }

// let myAddUser = new addUser()
// myAddUser.addUserPageOutput()
