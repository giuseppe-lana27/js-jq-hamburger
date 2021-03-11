/* mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS */
// 1. inizializzo le variabili
var openMenu = $(".header-right i");
var closeMenu = $(".close");
var menu = $(".hamburger-menu");

// 2. funzioni per mostrare il menu
openMenu.click(
  function (){
    menu.show("slow");
  }
);
// 3. funzioni per nascondere il menu
closeMenu.click(
  function (){
    menu.hide("slow");
  }
);
