const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')
const loader = document.getElementById('loader')
const container = document.getElementsByClassName('container')

let init = 0
let userData = []

const botSay = (data) => {
    return [
        "Hallo, Kenalin saya Razki bot, Siapa nama kamu?",
        `Halo, ${data?.nama}, berapa usia kamu bro?`,
        `Owalah, ${data?.usia}, kalo hobi kamu apa?`,
        `Owww kamu suka ${data?.hobi}, aku juga suka ${data?.hobi}, kalo pacar kamu punya?`,
        `Ohhh ${data?.pacar}, yaudah deh kalo gitu, udah dulu ya hehe`
    ]
}

pertanyaan.innerHTML = botSay()[0]

function botStart() {
    if(jawaban.value.length < 1) return alert("Silahkan isi jawabannya")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loader.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loader.style.display = "none"
        container[0].style.filter = "none"
    }, 1000)
    userData.push(jawaban.value)
    jawaban.value = ''
}

function finishing () {
    pertanyaan.innerHTML = `Makasih ya ${userData[0]} sudah main ke Razki Bot, lain kali kita main ${userData[2]} bareng ya...`
    jawaban.value = `Siap Thanks juga`
    setTimeout(() => {
        window.location.reload() 
    }, 3000);
}

function botEnd() {
    alert(`Terimakasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama kembali`)
    window.location.reload() 
}