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
const loginpopup = document.querySelector('.-loginpopup')
const rpgPop = document.querySelector('.-rpgpopup')
const pauloPop = document.querySelector('.paulo__popup')
const luisPop = document.querySelector('.luis__popup')
const joaoPop = document.querySelector('.joao__popup')
const navigation =  document.querySelector('.navigation')
const rpgTxt = document.querySelector('.navigation__categories__window__text')
const imgButton = document.querySelector('.navigation__categories__login')

function loginPopup() {
    loginpopup.style.display = 'flex'
    document.getElementById('btnDisc').disabled = true;
    document.getElementById('btnPaulo').disabled = true;
    document.getElementById('btnLuis').disabled = true;
    document.getElementById('btnJoao').disabled = true;
}

function loginPopupFechar() {
    loginpopup.style.display = 'none'
    document.getElementById('btnDisc').disabled = false;
    document.getElementById('btnPaulo').disabled = false;
    document.getElementById('btnLuis').disabled = false;
    document.getElementById('btnJoao').disabled = false;

}

const ajeitar = () => {

    setTimeout(() => {

        container.style.border = '5px solid black'

        navigation.classList.remove('descer')
        navigation.style.height = '12%'
        rpgTxt.style.display = 'flex'
        imgButton.style.display = 'block'

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

        imgDiscord.style.width = '133%'
        imgDiscord.style.marginLeft = '-21%'
        imgDiscord.style.objectFit = 'cover' 
        imgLuis.style.width = '100%'
        imgLuis.style.objectFit = 'cover' 
        imgJoao.style.width = '100%'
        imgJoao.style.height = '100%'
        imgJoao.style.objectFit = 'cover' 
        imgPaulo.style.width = '100%'
        imgPaulo.style.objectFit = 'cover' 

        back.style.display = 'none'
        link.href = '#'

    }, 1000)

}

function retrair() {

    back.style.display = 'none'
    rpgPop.style.display = 'none'
    pauloPop.style.display = 'none'
    luisPop.style.display = 'none'
    joaoPop.style.display = 'none'
    navigation.classList.add('descer')

    ajeitar()

    if(divDiscord.style.width == '100%') {

        divDiscord.classList.add('retrair-discord')

        setTimeout(() => {

            divDiscord.classList.remove('retrair-discord')
            imgDiscord.style.width = '100%'
            imgDiscord.style.marginLeft = '0%'

        }, 1000)

    }

    if(divPaulo.style.width == '100%') {

        divPaulo.classList.add('retrair-paulo')

        setTimeout(() => {

            divPaulo.classList.remove('retrair-paulo')
            imgDiscord.style.width = '100%'
            imgDiscord.style.marginLeft = '0%'

        }, 1000)

    }

    if(divLuis.style.width == '100%') {

        divLuis.classList.add('retrair-luis')

        setTimeout(() => {

            divLuis.classList.remove('retrair-luis')
            imgDiscord.style.width = '100%'
            imgDiscord.style.marginLeft = '0%'
            imgPaulo.style.width = '100%'
            imgPaulo.style.marginLeft = '0%'

        }, 1000)

    }

    if(divJoao.style.width == '100%') {

        divJoao.classList.add('retrair-joao')
        imgJoao.classList.add('retrair-imagem')

        setTimeout(() => {

            divJoao.classList.remove('retrair-joao')
            imgJoao.classList.remove('retrair-imagem')
            imgDiscord.style.width = '100%'
            imgDiscord.style.marginLeft = '0%'
            imgLuis.style.width = '100%'
            imgLuis.style.marginLeft = '0%'

        }, 1000)

    }

}

function expandirPaulo() {

    var display = window.getComputedStyle(divPaulo).display

    if(display == 'block') {

        navigation.classList.add('subir')
        container.style.border = 'none'
        rpgTxt.style.display = 'none'
        imgButton.style.display = 'none'

        divPaulo.style.position = 'absolute'
        divPaulo.style.display = 'flex'
        divPaulo.style.border = '3px solid #000'
        divPaulo.style.width = '25.4%'
        divPaulo.style.left = '25%'
    
        divDiscord.style.width = '25.5%'
        divDiscord.style.left = '-0.5%'
    
        imgDiscord.style.width = '133%'
        imgDiscord.style.marginLeft = '-33%'
    
        divJoao.style.width = '23.5%'
        divJoao.style.left = '8.5%'
        divJoao.style.flex = '0%'
    
        divLuis.style.width = '25.5%'
        divLuis.style.left = '17.1%'
    
        imgLuis.style.width = '135%'

        divPaulo.classList.add('expandir-paulo')

        setTimeout(() => {

            navigation.style.height = '4%'
            rpgPop.style.display = 'flex'
            pauloPop.style.display = 'flex'
            divPaulo.style.width = '100%'
            divPaulo.style.left = '0%'
            navigation.classList.remove('subir')
            divPaulo.classList.remove('expandir-paulo')
            back.style.display = 'flex'

        }, 1000)

    }

}

function expandirLuis() {

    var display = window.getComputedStyle(divLuis).display

    if(display == 'block') {

        navigation.classList.add('subir')
        container.style.border = 'none'
        rpgTxt.style.display = 'none'
        imgButton.style.display = 'none'

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
        imgPaulo.style.width = '100%'
        imgPaulo.style. marginLeft = '-40%'

        divLuis.classList.add('expandir-luis')

        setTimeout(() => {

            navigation.style.height = '4%'
            rpgPop.style.display = 'flex'
            luisPop.style.display = 'flex'
            divLuis.style.width = '100%'
            divLuis.style.left = '0%'
            navigation.classList.remove('subir')
            divLuis.classList.remove('expandir-luis')
            back.style.display = 'flex'

        }, 1000)

    }

}

function expandirJoao() {

    var display = window.getComputedStyle(divJoao).display

    if(display == 'block') {

        navigation.classList.add('subir')
        container.style.border = 'none'
        rpgTxt.style.display = 'none'
        imgButton.style.display = 'none'

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
        imgLuis.style.width = '100%'
        imgLuis.style.marginLeft = '-50%'
        imgJoao.style.width = '100%'
        imgPaulo.style.width = '100%'

        divJoao.classList.add('expandir-joao')
        imgJoao.classList.add('ajustar')

        setTimeout(() => {

            navigation.style.height = '4%'
            rpgPop.style.display = 'flex'
            joaoPop.style.display = 'flex'
            divJoao.style.width = '100%'
            divJoao.style.left = '0%'
            divJoao.classList.remove('expandir-joao')
            navigation.classList.remove('subir')
            imgJoao.style.height = '200%'
            imgJoao.classList.remove('ajustar')
            back.style.display = 'flex'

        }, 1000)

    }

}

function expandirDiscord() {

    var display = window.getComputedStyle(divDiscord).display

    if(display == 'block') {

        navigation.classList.add('subir')
        container.style.border = 'none'
        rpgTxt.style.display = 'none'
        imgButton.style.display = 'none'

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
        imgPaulo.style.width = '150%'

        divDiscord.classList.add('expandir-discord')

        setTimeout(() => {

            navigation.style.height = '4%'
            divDiscord.style.width = '100%'
            divDiscord.style.left = '0%'
            divDiscord.classList.remove('expandir-discord')
            navigation.classList.remove('subir')
            back.style.display = 'flex'

        }, 1000)

    } 
    
    if(display == 'flex') {

        link.href = 'https://discord.gg/B2V2DrGmCg'
        link.target = "_blank"

    }

}