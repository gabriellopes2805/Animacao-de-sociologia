const element = document.getElementById('wasted')
const sound = document.getElementById('wasted_som')
const oof = document.getElementById('roblox')

document.getElementById('astronauta').addEventListener('click', () => {
    oof.currentTime = 0
    oof.play()
})

document.querySelectorAll('.butao').forEach(opcao => {
    setInterval(() => {
        element.classList.remove('animaErro')
    },8000)

    opcao.addEventListener('click', () => {
        element.classList.toggle('animaErro')
        sound.currentTime = 0
        sound.play()
    })
})