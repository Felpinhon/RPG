const imgDiscord = document.getElementById('discord')
const divDiscord = document.getElementById('discordDiv')
const imgPaulo = document.getElementById('paulo')
const divPaulo = document.getElementById('pauloDiv')
const imgJoao = document.getElementById('joao')
const divJoao = document.getElementById('joaoDiv')
const imgLuis = document.getElementById('luis')
const divLuis = document.getElementById('luisDiv')
const container = document.querySelector('.container')
const item = document.querySelector('.item')
const link = document.querySelector('#link')
const back = document.querySelector('.back')

const ajeitar = () => {

    setTimeout(() => {

        container.style.border = '5px solid black'

        divDiscord.style.position = 'static'
        divDiscord.style.display = 'block'
        divDiscord.style.border = 'none'
        divDiscord.style.borderRight = '3px solid #000'
        divDiscord.style.width = '100%'
        divDiscord.style.flex = '13%'

        divPaulo.style.position = 'static'
        divPaulo.style.display = 'block'
        divPaulo.style.border = 'none'
        divPaulo.style.borderRight = '3px solid #000'
        divPaulo.style.width = '100%'
        divPaulo.style.flex = '13%'
    
        divJoao.style.position = 'static'
        divJoao.style.display = 'block'
        divJoao.style.border = 'none'
        divJoao.style.borderRight = '3px solid #000'
        divJoao.style.width = '100%'
        divJoao.style.flex = '13%'
    
        divLuis.style.position = 'static'
        divLuis.style.display = 'block'
        divLuis.style.border = 'none'
        divLuis.style.borderRight = '3px solid #000'
        divLuis.style.width = '100%'
        divLuis.style.flex = '13%'

        imgDiscord.style.width = '100%'   
        imgDiscord.style.objectFit = 'cover' 
        imgLuis.style.width = '100%'
        imgLuis.style.objectFit = 'cover' 
        imgJoao.style.width = '100%'
        imgJoao.style.objectFit = 'cover' 
        imgPaulo.style.width = '135%'
        imgPaulo.style.objectFit = 'cover' 

        back.style.display = 'none'
        link.href = '#'

    }, 1000)

}

function retrair() {

    ajeitar()

    if(divDiscord.style.width == '100%') {

        divDiscord.classList.add('retrair-discord')

        setTimeout(() => {

            divDiscord.classList.remove('retrair-discord')

        }, 1000)

    }

    if(divPaulo.style.width == '100%') {

        divPaulo.classList.add('retrair-paulo')

        setTimeout(() => {

            divPaulo.classList.remove('retrair-paulo')

        }, 1000)

    }

    if(divLuis.style.width == '100%') {

        divLuis.classList.add('retrair-luis')

        setTimeout(() => {

            divLuis.classList.remove('retrair-luis')

        }, 1000)

    }

    if(divJoao.style.width == '100%') {

        divJoao.classList.add('retrair-joao')

        setTimeout(() => {

            divJoao.classList.remove('retrair-joao')

        }, 1000)

    }

}

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
            back.style.display = 'flex'

        }, 1000)

    }

}

function expandirLuis() {

    var display = window.getComputedStyle(divLuis).display

    if(display == 'block') {

        container.style.border = 'none'

        divLuis.style.position = 'absolute'
        divLuis.style.display = 'flex'
        divLuis.style.border = '3px solid #000'
        divLuis.style.width = '25.5%'
        divLuis.style.left = '50.3%'

        divPaulo.style.width = '25.4%'
        divPaulo.style.left = '25%'
        divPaulo.style.flex = '29%'
    
        divDiscord.style.width = '25.5%'
        divDiscord.style.left = '-0.5%'
    
        divJoao.style.width = '23.5%'
        divJoao.style.left = '8.5%'
        divJoao.style.flex = '20%'
    
        imgDiscord.style.width = '100%'
        imgLuis.style.width = '100%'
        imgJoao.style.width = '120%'
        imgPaulo.style.width = '60%'

        divLuis.classList.add('expandir-luis')

        setTimeout(() => {

            divLuis.style.width = '100%'
            divLuis.style.left = '0%'
            divLuis.classList.remove('expandir-luis')
            back.style.display = 'flex'

        }, 1000)

    }

}

function expandirJoao() {

    var display = window.getComputedStyle(divJoao).display

    if(display == 'block') {

        container.style.border = 'none'

        divJoao.style.position = 'absolute'
        divJoao.style.display = 'flex'
        divJoao.style.border = '3px solid #000'
        divJoao.style.width = '25.5%'
        divJoao.style.left = '74.5%'
        divJoao.style.flex = '20%'

        divPaulo.style.width = '25.4%'
        divPaulo.style.left = '25%'
        divPaulo.style.flex = '5%'
    
        divDiscord.style.width = '25.5%'
        divDiscord.style.left = '-0.5%'
        divDiscord.style.flex = '4%'
    
        divLuis.style.width = '25.5%'
        divLuis.style.left = '50.3%'
        divLuis.style.flex = '30%'

        imgDiscord.style.width = '100%'    
        imgLuis.style.width = '50%'
        imgJoao.style.width = '100%'
        imgPaulo.style.width = '100%'

        divJoao.classList.add('expandir-joao')
        imgJoao.classList.add('ajustar')

        setTimeout(() => {

            divJoao.style.width = '100%'
            divJoao.style.left = '0%'
            divJoao.classList.remove('expandir-joao')
            imgJoao.style.height = '200%'
            imgJoao.classList.remove('ajustar')
            back.style.display = 'flex'

        }, 1000)

    }

}

function expandirDiscord() {

    var display = window.getComputedStyle(divDiscord).display

    if(display == 'block') {

        container.style.border = 'none'

        divDiscord.style.position = 'absolute'
        divDiscord.style.display = 'flex'
        divDiscord.style.border = '3px solid #000'
        divDiscord.style.width = '25.5%'
        divDiscord.style.left = '0%'
        divDiscord.style.flex = '4%'

        divPaulo.style.width = '25.4%'
        divPaulo.style.left = '25%'
        divPaulo.style.flex = '58%'
    
        divJoao.style.width = '25.5%'
        divJoao.style.left = '74.5%'
        divJoao.style.flex = '29%'
    
        divLuis.style.width = '25.5%'
        divLuis.style.left = '50.3%'
        divLuis.style.flex = '30%'

        imgDiscord.style.width = '100%'    
        imgLuis.style.width = '100%'
        imgJoao.style.width = '100%'
        imgPaulo.style.width = '135%'

        divDiscord.classList.add('expandir-discord')

        setTimeout(() => {

            divDiscord.style.width = '100%'
            divDiscord.style.left = '0%'
            divDiscord.classList.remove('expandir-discord')
            back.style.display = 'flex'

        }, 1000)

    } 
    
    if(display == 'flex') {

        link.href = 'https://discord.gg/B2V2DrGmCg'
        link.target = "_blank"

    }

}