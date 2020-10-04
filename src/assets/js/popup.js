
const popup = {

    meta: {
        version: "1.0",
        date: "2020-10-03",
    },

    element: '',
    decorations: Array.from(document.getElementsByClassName('decor')),

    initialize: function(element){
        popup.element = element

        popup.setDisplayed()
        popup.show()
    },

    setDisplayed: function(){
        localStorage.setItem('popupDisplayed', true)
    },

    show: function(){
        popup.element.classList.add('open')

        if(userWidth >= mediumBreak)
            popup.showDecorations()
    },

    close: function(event){
        event.preventDefault()
        popup.element.classList.remove('open')
        popup.closeDecorations()
    },

    showDecorations: function(){
        for(let i = 0; i < popup.decorations.length; i++){
            popup.decorations[i].classList.add('open')
        }
    },

    closeDecorations: function(){
        for(let i = 0; i < popup.decorations.length; i++){
            popup.decorations[i].classList.remove('open')
        }
    }

}
