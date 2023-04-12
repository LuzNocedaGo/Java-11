let container = document.querySelector('.container')
let changeColor = document.querySelector('.change-color')
let copyColor = document.querySelector('.copy-color')

function generateRandomColorRgb(){
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

changeColor.addEventListener('click', function(){
    let randomColor = generateRandomColorRgb()
    container.style.backgroundColor = randomColor
})

copyColor.addEventListener('click', function(){
    let bgColor = container.style.backgroundColor
    navigator.clipboard.writeText(bgColor)
})
