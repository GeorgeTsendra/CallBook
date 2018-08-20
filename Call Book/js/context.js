
class Context {

  constructor() {
    this.dataBase = [],
    this.usersWithFullName = [],
    this.userUrl = "",
    this.editContact = new EditContact(),
    this.footer = new Footer()
    // this.router = new Router()
  }


  createFoterWithoutListener(){
    let buttonDone = document.getElementById('buttonDone')
    buttonDone.addEventListener("click", (e)=>{

      this.footer.footerOutput()
      let addUserButton = document.getElementById('addUser')
      let keypadButton = document.getElementById('keypad')
      let userButton = document.getElementById('user')
      let editContactButton = document.getElementById('editContact')
      let contextButton = document.getElementById('context')
      addUserButton.addEventListener("click", (e)=>{this.addUser.addUserPageOutput()
        this.contentEditable()
      })
      keypadButton.addEventListener("click", (e)=>{this.keypad.addUserPageOutput()})
      userButton.addEventListener("click", (e)=>{this.user.addUserPageOutput()})
      editContactButton.addEventListener("click", (e)=>{this.editContact.editContactPageOutput()
      })
      contextButton.addEventListener("click", (e)=>{
      this.context.render()
      this.editPage()
    })

    })
  }

  initialRender(){
    let main = document.getElementById('app')
    let footer = document.getElementById('footer')

    main.innerHTML = `
    <header class="header">
  		<div class="container top-radius">
  			<h2>Authorization</h2>
  		</div>
  	</header>
    <main>
  		<div class="container">
      <form class="form-inline search-form">
        <div class="form-group">
          <label class="sr-only" for="search">authorization</label>
          <input type="text" class="form-control" id= "authorization" placeholder="your nickname">
          <button type="button" name="button" id="buttonDone"> done</button>
        </div>
      </form>
		</main>
    `
footer.innerHTML = `<footer class="footer">
  <div class="container bottom-radius">
    <nav class="main-nav">
</nav>
</div>
</footer>`

    let authorizationInput = document.getElementById('authorization')
    let buttonDone = document.getElementById('buttonDone')
    buttonDone.addEventListener('click', (e)=>{
      if (!authorizationInput.value) {
        return
      }
        this.userUrl = authorizationInput.value;
        this.serverRequest()
        this.footer.footerOutput()

        this.userUrl = ""
    })


  }




  serverRequest(){
    const btn = document.querySelector("button");
    const add = document.querySelector(".add");

      const url = `http://easycode-js.herokuapp.com/${this.userUrl}`

    let dataBaze;
    let usersWithFullName = []
    let users = [];


    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(userJson => userJson.users.forEach((value, index, arr)=>{
          let newObj = {}
          for(var key in value) {

            if (key != "fullName") {
              newObj[key] = value[key];

            }else {
              let nameSurnameSplit = value[key].split(" ")
              if (  newObj.surname = nameSurnameSplit[1]) {
                newObj.name = nameSurnameSplit[0]
                newObj.surname = nameSurnameSplit[1]
              }else {
                newObj.name = nameSurnameSplit[0]
                newObj.surname = nameSurnameSplit[0]
              }
            }
          }
          this.dataBase.push(newObj)

          if (this.dataBase.length >= userJson.users.length) {

              this.render()
              // this.footer.footerOutput()
            }
        }))
}


editPage(){
  let allUsers = document.querySelectorAll(".tr_class")
  allUsers.forEach((value, index,arr)=>{
    value.addEventListener("click", (e)=>{
      let user = {};
      let userId = 0
      let phoneNum = value.lastChild.innerHTML;
      let name = value.firstChild.innerHTML;
      let surname = value.childNodes[1].innerHTML;

      this.dataBase.reduce((newObj, value, index, arr)=>{

        if (value.phone == phoneNum && value.name == name && value.surname == surname) {
          userId = value._id
          return
        }
      }, {})
      this.dataBase.forEach((value, index, arr)=>{
        if (value._id == userId) {
          user = value;
        }
      })

      this.editContact.editContactPageOutput(user)


      const url = "http://easycode-js.herokuapp.com/GeogreTsendra13"
      const deleteUser = (user_id) => {

        return fetch(url + '/users/' + user_id, {
          headers: {
            "Content-Type": "application/json"
          },
            method: 'delete'
          })
          .then(response => response.json())


        }

        let deleteButton = document.getElementById("delete_button")
        deleteButton.addEventListener("click", (e)=>{
          deleteUser(user._id)
          this.initialRender()
          // this.createFoterWithoutListener()
        })


      const serverEditUser = (user) => {

        return fetch(url + '/users', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({

              fullName: user.fullName,
              email: user.emailFromUser,
              phone: user.phoneFromUser
            })
          })
          .then(response => {
            return response.json();

          })
      }
      let doneButt = document.getElementById("done_btn")
      doneButt.addEventListener("click", (e)=>{
        let nameFromUser = document.getElementById('MainInfoButton_0').value;
        let surnameFromUser = document.getElementById('MainInfoButton_1').value;
        let companyFromUser = document.getElementById('MainInfoButton_2').value;
        let phoneFromUser = document.getElementById('ScrollHolderButton_0').value;
        let homePhoneFromUser = document.getElementById('ScrollHolderButton_1').value;
        let emailFromUser = document.getElementById('ScrollHolderButton_2').value;
        let adressFromUser = document.getElementById('ScrollHolderButton_3').value;
        let birthdayFromUser = document.getElementById('ScrollHolderButton_4').value;
        let socialFromUser = document.getElementById('ScrollHolderButton_5').value;
        let fieldFromUser = document.getElementById('ScrollHolderButton_6').value;
        let userToUpdate = {
          fullName : `${nameFromUser} ${surnameFromUser}`,
          _id: userId,
          phone: phoneFromUser,
          homePhone: homePhoneFromUser,
          email : emailFromUser,
          adress : adressFromUser,
          birthday : birthdayFromUser,
          social: socialFromUser,
          field: fieldFromUser,
        };
        // console.log(userToUpdate);
        serverEditUser(userToUpdate)
      })
    })
  })
}

  searchUsers(username) {
    let allUsers = [];
    this.dataBase.forEach((value, index, arr)=> {

      if (value.name == username) {
        allUsers.push(this.dataBase[index]);

      }
    })
    this.dataBase = {}
    this.dataBase = allUsers
    this.render()
}


  createTh(arr){
    const innerTr = arr.map(value =>
      `<td class="td_header">${value}</td>`
    ).join('');
    return `<thead><tr>
      ${innerTr}
    </tr></thead>`
  }

  // sentRequestWhenEddPageWasDone(){
  //
  // }



  render (){

    let main = document.getElementById('app')
    main.innerHTML = `<header class="header">
  		<div class="container top-radius">
  			<h2>Contacts</h2>
  		</div>
  	</header>
    <main>
  		<div class="container">
      <form class="form-inline search-form">
        <div class="form-group">
          <label class="sr-only" for="search">Search</label>
          <input type="text" class="form-control" id= "search" placeholder="Search">
        </div>
      </form>
      <table class="table table-hover contacts">

          ${this.createTh(['name','surname', 'phone'])}

        <tbody id="tbody_id">
        </tbody>
    </table>
      </div>
  	</main>`


    let formToSearch = document.querySelector(".form-control")

    this.checkUser()

    this.outputDataArray(this.dataBase)

    window.addEventListener("keydown", e => {

      if (e.keyCode == 13) {
        this.searchUsers(`${formToSearch.value}`)
      }

    })

    this.editPage();


  }

  createElement (value, key, index){
    let td = document.createElement('td');
    let rtById = document.getElementById(`tr_${index}`)
    rtById.appendChild(td)
    td.textContent = value[key]
  }

  outputDataArray(options) {
    let tabelBody = document.getElementById("tbody_id")
    options.forEach((value, index, arr) => {
      let tr = document.createElement('tr')
      tr.setAttribute('id', `tr_${index}`);
      tr.setAttribute('class', `tr_class`);
      tabelBody.appendChild(tr);
          this.createElement(value, 'name', index)
          this.createElement(value, 'surname', index)
          this.createElement(value, 'phone', index)
        })
  }

  sortUsers(property){

      var newArray = this.dataBase.sort((a, b) => {
        return a[property] == b[property] ? 0 : a[property] < b[property] ? -1 : 1;
      })
      let tabelBody = document.getElementById("tbody_id")
      tabelBody.innerHTML = "";
      return   this.outputDataArray(newArray)
  }

  checkUser(){

    let allTr = document.querySelectorAll(".tr_class")
    allTr.forEach((tr, index, arr)=>{
      tr.addEventListener("click", a =>{
        let allTd = tr.querySelectorAll("td")

        let innerTdName = allTd[0].innerHTML
        let innerTdSurname = allTd[1].innerHTML
        let innerTdNumber = allTd[2].innerHTML

      })
    })
  }
}
