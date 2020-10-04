/**
 * Settings
 */
const mediumBreak = 768

let userWidth = document.body.offsetWidth

/**
 * Open Popup after 3 seconds on page
 * Do not open the Popup a second time
 */
if(!localStorage.getItem('popupDisplayed')){
  setTimeout(function(){
    popup.initialize(document.getElementById('popup-launch'))
  }, 3000)
}

/**
 * Close Popup
 */
const btnClose = document.getElementById('popup-close')
btnClose.addEventListener('click', popup.close)

window.onkeydown = function(event){
    if(event.keyCode == 27){
        btnClose.click()
    }
}

/**
 * Parallax Effect
 */
var rellax = new Rellax('.rellax', {
    center:true
  });

/**
 * Hide/show decorations depending on device's size
 */
const onresize = function(e) {
    userWidth = e.target.outerWidth;

    if(userWidth < mediumBreak)
        popup.closeDecorations()
    else
        popup.showDecorations()
}
window.addEventListener("resize", onresize);