/* mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS */
var openMenu = $(".header-right i");
var closeMenu = $(".close");
var menu = $(".hamburger-menu");

openMenu.click(
  function (){
    menu.show("slow");
  }
);

closeMenu.click(
  function (){
    menu.hide("slow");
  }
);
