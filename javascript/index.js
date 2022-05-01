 dropMenu.style.display = "none";
let button = () => {
    let dropMenu = document.getElementById("dropMenu")
    if (dropMenu.style.display === "none") {
        dropMenu.style.display = "block"
        dropMenu.style.animationName = "menu"
    } else {
        
         setTimeout(() => (dropMenu.style.display = "none"),500)
    }
}
let exit = () => {
    let dropMenu = document.getElementById("dropMenu")
    if (dropMenu.style.display === "block") {
        dropMenu.style.animationName = "menuUp"
        setTimeout(() => (dropMenu.style.display = "none"),500)
    } else {
        dropMenu.style.display = "block"
    }
}