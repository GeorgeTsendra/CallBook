class addUser{
constructor(options){

  }


  contentEditable(){

    let name = document.getElementById("Name")
    let surname = document.getElementById("Surname")

    let doneBtn = document.querySelector('.done-btn')
    let phone = document.querySelectorAll('.edit-info > .edit-field > input')[0]
    let email = document.querySelectorAll('.edit-info > .edit-field > input')[2]

    const url = "http://easycode-js.herokuapp.com/GeogreTsendra13"
    const serverAddUser = () =>{
      let user = {
        fullName: `${name.value} ${surname.value} `,
        email: email.value,
        phone: phone.value
      };
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () =>{
      };
      xhr.open("POST", url + '/users', false);
      xhr.setRequestHeader("Content-type","application/json")
      xhr.send(JSON.stringify(user))
      xhr.timeout = 30000;
      xhr.ontimeout = function() {
        alert("Hi, you lose")
      }
    }

    doneBtn.addEventListener("click", e=>{
      if (name.value == " "
      || surname.value == " "
      || phone.value == " "
      || email.value == " "
      || typeof phone.value != "number"
      || typeof name.value != "string"
      || typeof surname.value != "string"
      ){
          alert("Некорректно заполненая форма")
      }else {
          serverAddUser()

      }
    })

    window.addEventListener("keydown", e=>{
      if (e.keyCode == 13 ) {
        if (name.value == " "
        || surname.value == " "
        || phone.value == " "
        || email.value == " "
        || typeof phone.value != "number"
        || typeof name.value != "string"
        || typeof surname.value != "string"
        ){
            alert("Некорректно заполненая форма")
        }else {
            serverAddUser()

        }
      }
    })

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


    main.innerHTML += `<header class="header">
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
    
      this.contentEditable();
      deleteBtton.addEventListener('click', e=>{

        let inputs = document.querySelectorAll(' .edit-field > input')

        inputs.forEach(input =>{
          input.value = ""
        })

      })



    }
  }

let myAddUser = new addUser()
myAddUser.addUserPageOutput()
