
class Footer{

  constructor(){

  }
   createNav (classes, context, bull)  {

    if (bull) {
      return ` <span class="${classes} aria-hidden="${bull}"">${context}</span>`
    }else {
      return ` <span class="${classes}">${context}</span>`
    }

  }

  footerOutput (){
    let footer = document.getElementById('footer')
   footer.innerHTML = `
   <footer class="footer">
     <div class="container bottom-radius">
       <nav class="main-nav">
         <a href="index.html" class="tab active">
           ${this.createNav("glyphicon glyphicon-search", ``,`true`)}
           ${this.createNav("tab-text", `Context`)}
         </a>
         <a href="keypad.html" class="tab">

             ${this.createNav("glyphicon glyphicon-th", ``,`true`)}
             ${this.createNav("tab-text", `Keypad`)}
         </a>
         <a href="edit-contact.html" class="tab">

           ${this.createNav("glyphicon glyphicon-pencil", ``,`true`)}
           ${this.createNav("tab-text", `Edit contact`)}
         </a>
         <a href="user.html" class="tab">

           ${this.createNav("glyphicon glyphicon-user", ``,`true`)}
           ${this.createNav("tab-text", `User`)}
         </a>
         <a href="add-user.html" class="tab">
           ${this.createNav("glyphicon glyphicon-plus", ``,`true`)}
           ${this.createNav("tab-text", `Add user`)}
         </a>
       </nav>
     </div>
   </footer>`
 }
}
let myFooter = new Footer()
myFooter.footerOutput()
