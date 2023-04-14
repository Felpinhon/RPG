const imgDiscord = document.getElementById('discord')
const divDiscord = document.getElementById('discordDiv')
const imgPaulo = document.getElementById('paulo')
const divPaulo = document.getElementById('pauloDiv')
const imgJoao = document.getElementById('joao')
const divJoao = document.getElementById('joaoDiv')
const imgLuis = document.getElementById('luis')
const divLuis = document.getElementById('luisDiv')
const container = document.querySelector('.container')

function expandirPaulo() {

    var display = window.getComputedStyle(divPaulo).display

    if(display == 'block') {

        container.style.border = 'none'

        divPaulo.style.position = 'absolute'
        divPaulo.style.display = 'flex'
        divPaulo.style.border = '3px solid #000'
        divPaulo.style.width = '25.4%'
        divPaulo.style.left = '25%'
    
        divDiscord.style.width = '25.5%'
        divDiscord.style.left = '-0.5%'
    
        imgDiscord.style.width = '68%'
    
        divJoao.style.width = '23.5%'
        divJoao.style.left = '8.5%'
        divJoao.style.flex = '0%'
    
        divLuis.style.width = '25.5%'
        divLuis.style.left = '17.1%'
    
        imgLuis.style.width = '135%'
    
        divPaulo.classList.add('expandir-paulo')
    
        setTimeout(() => {
    
            divPaulo.style.width = '100%'
            divPaulo.style.left = '0%'
            divPaulo.classList.remove('expandir-paulo')
    
        }, 1000)

    }

}