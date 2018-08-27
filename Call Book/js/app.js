class App {
  constructor() {
    this.footer = new Footer()
    this.addUser = new AddUser()
    this.user = new User()
    this.keypad = new Keypad()
    this.editContact = new EditContact()
    this.context = new Context()
    this.userUrl = ""

  }

  createFoterWithListeners(){
    let buttonDone = document.getElementById('buttonDone')
      buttonDone.addEventListener("click", (e)=>{

      this.footer.footerOutput()
      let addUserButton = document.getElementById('addUser')
      let keypadButton = document.getElementById('keypad')
      let userButton = document.getElementById('user')
      let contextButton = document.getElementById('context')

      addUserButton.addEventListener("click", (e)=>{this.addUser.addUserPageOutput()
        this.contentEddUser()
      })
      keypadButton.addEventListener("click", (e)=>{this.keypad.addUserPageOutput()})
      userButton.addEventListener("click", (e)=>{this.user.addUserPageOutput()})

      contextButton.addEventListener("click", (e)=>{
      this.context.serverRequest()

    })

    })
  }


  contentEddUser(){

    let name = document.getElementById("Name")
    let surname = document.getElementById("Surname")

    let doneBtn = document.querySelector('.done-btn')
    let phone = document.querySelectorAll('.edit-info > .edit-field > input')[0]
    let email = document.querySelectorAll('.edit-info > .edit-field > input')[2]

    const url = `http://easycode-js.herokuapp.com/${this.userUrl}`
    // console.log("contentEddtUser request " + url);
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

          this.context.serverRequest()
          // this.context.initialRender()
          this.createFoterWithListeners()
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
              this.context.serverRequest()
              // this.context.initialRender()
              this.createFoterWithListeners()

        }
      }
    })

  }


appRender(){
    this.context.initialRender()
    this.createFoterWithListeners()


    let authorizationInput = document.getElementById('authorization')
    let buttonDone = document.getElementById('buttonDone')
    buttonDone.addEventListener('click', (e) => {
      if (!authorizationInput.value) {
        return
      }
      this.userUrl = authorizationInput.value;
      // console.log(this.userUrl);

  })

}
}


let app = new App()
app.appRender()
