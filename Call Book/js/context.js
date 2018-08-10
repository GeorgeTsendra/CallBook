
class Context {
  constructor() {


    this.dataBase = []

  }



  serverRequest(){
    const btn = document.querySelector("button");
    const add = document.querySelector(".add");

    const url = "http://easycode-js.herokuapp.com/GeogreTsendra13"
    const xhr = new XMLHttpRequest()
    let dataBaze;
    let usersWithFullName = []
    let users = [];
          xhr.onreadystatechange = () =>{
            if (xhr.readyState == XMLHttpRequest.DONE ) {
              dataBaze = JSON.parse(xhr.responseText)

              for (var key in dataBaze) {

                if (key == "users") {
                  dataBaze[key].forEach(value =>{
                    usersWithFullName.push(value)
                  })
                }
              }



              }

              usersWithFullName.forEach((value, index, arr)=>{
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
                // console.log(newObj);
                this.dataBase.push(newObj)
                console.log(this.dataBase);
              })
            };

    xhr.open("GET", url, false);
    xhr.send()

  }




  searchUsers(username) {
    let allUsers = [];
    this.dataBase.forEach((value, index, arr)=> {

      if (value.name == username) {
        allUsers.push(this.dataBase[index]);

      }
    })

    this.dataBase = allUsers
    this.buildHtmlTags()

  }


  createTh(arr){
    const innerTr = arr.map(value =>
      `<td OnClick = "myContext.sortUsers('${value}')">${value}</td>`
    ).join('');
    return `<thead><tr>
      ${innerTr}
    </tr></thead>`
  }


  buildHtmlTags (){
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

    window.addEventListener("keydown", e => {

      if (e.keyCode == 13) {
        this.searchUsers(`${formToSearch.value}`)
      }
      // console.log(`${formToSearch.value}`);
    })
    this.serverRequest()
    this.outputDataArray(this.dataBase)
    this.checkUser()
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

        console.log(innerTdName);
        console.log(innerTdSurname);
        console.log(innerTdNumber);

      })
    })


  }




}


let myContext = new Context();

myContext.buildHtmlTags()
