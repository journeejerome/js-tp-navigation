(function () {
   const navBar = {
       init(){
          document.body.classList.toggle('js-enabled');
          this.menu = document.querySelectorAll(".menu");
          for(element of this.menu) {
              element.addEventListener('mouseover', this.montreSousMenu);
              element.addEventListener('mouseout', this.cacheSousMenu);
          }
       },
       montreSousMenu(event){
           //console.log(event.currentTarget);
           event.currentTarget.classList.add('show');
       },
       cacheSousMenu(event){
           event.currentTarget.classList.remove('show');
       },
   }
   navBar.init();
})();
