class Router {
  constructor() {
    this.footer = new Footer()
    this.addUser = new AddUser()
    this.user = new User()
    this.keypad = new Keypad()
    this.editContact = new EditContact()
    this.context = new Context()

  }

  createFoterWithoutListener(){
    let buttonDone = document.getElementById('buttonDone')
    buttonDone.addEventListener("click", (e)=>{

      this.footer.footerOutput()
      let addUserButton = document.getElementById('addUser')
      let keypadButton = document.getElementById('keypad')
      let userButton = document.getElementById('user')
      // let editContactButton = document.getElementById('editContact')
      let contextButton = document.getElementById('context')
      addUserButton.addEventListener("click", (e)=>{this.addUser.addUserPageOutput()
        this.contentEditable()
      })
      keypadButton.addEventListener("click", (e)=>{this.keypad.addUserPageOutput()})
      userButton.addEventListener("click", (e)=>{this.user.addUserPageOutput()})
      // editContactButton.addEventListener("click", (e)=>{this.editContact.editContactPageOutput()
      // })
      contextButton.addEventListener("click", (e)=>{
      this.context.render()
      
    })

    })
  }


  contentEditable(){

    let name = document.getElementById("Name")
    let surname = document.getElementById("Surname")

    let doneBtn = document.querySelector('.done-btn')
    let phone = document.querySelectorAll('.edit-info > .edit-field > input')[0]
    let email = document.querySelectorAll('.edit-info > .edit-field > input')[2]

    const url = "http://easycode-js.herokuapp.com/GeogreTsendra13"

    const serverAddUser = () => {

      return fetch(url + '/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({

            fullName: `${name.value} ${surname.value} `,
            email: email.value,
            phone: phone.value
          })
        })
        .then(response => {
          return response.json();

        })
    }
    doneBtn.addEventListener("click", (e)=>{
      if (name.value == ""
      || surname.value == ""
      || phone.value == ""
      || email.value == ""
      ){
          alert("Некорректно заполненая форма")
      }else {
          serverAddUser()
          this.context.initialRender()
          this.createFoterWithoutListener()
      }
    })

    window.addEventListener("keydown", (e)=>{
      if (e.keyCode == 13 ) {
        if (name.value == ""
        || surname.value == ""
        || phone.value == ""
        || email.value == ""

        ){
            alert("Некорректно заполненая форма")
        }else {
            serverAddUser()
              this.context.initialRender()
              this.createFoterWithListener()

        }
      }
    })

  }








  routerRender(){
    this.context.initialRender()
    this.createFoterWithoutListener()



  }

}


let router = new Router()
router.routerRender()
