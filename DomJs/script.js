const button = document.getElementsByTagName('button')[0]
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]
const h1 =  document.getElementsByTagName('h1')[0]

const darkModeClass = 'dark-mode'

button.addEventListener('click', changeMode)

function changeMode(){
    changeClass()
    changeText()
}

function changeText(){
    const darkMode = "Dark Mode"
    const lightMode = "Light Mode"

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + " ON"
        return
    }
    
    button.innerHTML = darkMode
    h1.innerHTML = lightMode + " ON"
}

function changeClass(){
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
}