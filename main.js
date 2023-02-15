const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")


const fortune = [
    "A morte é como o vento, está sempre ao meu lado",
    "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas",
    "A escalada é longa, mas a vista vale a pena!",
    "Seria o único propósito da folha, o de cair?",
    "O ego sempre deixa todos de joelhos.",
    "Toda espada é sua própria mestra.",
    "Certas coisas não perdem o fio, certos erros não podem ser cometidos duas vezes.",
    "A pior mentira e a perfeição.",
    "Ser o chefe é muito melhor do que não ser o chefe.",

]

    fortuneCookie.addEventListener('click', handleTryClick)
    tryAgain.addEventListener('click', handleResetClick)
    document.addEventListener('keydown', function(e){
        if(e.key == 'Enter' && screen2.classList.contains('hide')){
            handleTryClick()
        } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
            handleResetClick()
        }
    })


    function handleTryClick(event) {
        toggleScreen()
        pickFortune()
    }


    function handleResetClick() {
        toggleScreen()
    }

    function pickFortune() {
        let allFortunes = fortune.length
        let randomNumber = Math.floor(Math.random() * allFortunes)  
        screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
    }
    

    function toggleScreen() {
        screen2.classList.toggle("hide")
        screen1.classList.toggle("hide")
    }
