const imgs = [
    "https://sospantanal.org.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-11-29-at-10.12.08.jpeg",
    "https://img.nsctotal.com.br/wp-content/uploads/2022/05/pantanal-turismo.jpeg",
    "https://portal.comunique-se.com.br/wp-content/uploads/2024/06/8c66cce6-1673-44e3-be43-18e7a41d3dc8-1280x720.jpg",
    "https://wallpapers.com/images/featured/lindas-fotos-da-natureza-oixs7q0he0hhoa6v.jpg",
    "https://s2-g1.glbimg.com/c4cIy6uiqHKoHT580oea1lNuMf0=/0x0:4608x3072/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/I/j/BitFoaS9eTy4xqUhA5UA/img-2417.jpg",
    "https://cdn.shopify.com/s/files/1/0073/8269/6034/files/348243-admin_1024x1024.jpg?v=1595438849",
    "https://www.avina.net/wp-content/uploads/2020/05/La-necesidad-de-restaurar-la-naturaleza-y-reducir-las-emisiones-2.jpg",
    "https://minutoscomdeus.com.br/wp-content/uploads/2023/05/natureza-como-obra-de-deus.webp"
]

const containerImg = document.querySelector("#containe-img")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
let html = ""

imgs.forEach(function (url){
    html += `
        <div class="item">
            <img src="${url}">
        </div>
    `
})

containerImg.innerHTML = html
let items = document.querySelectorAll(".item")


function next(){
    containerImg.appendChild(items[0])
    items = document.querySelectorAll(".item")
}

function prev(){
    let lastItem = items[items.length - 1]
    containerImg.insertBefore(lastItem, items[0])
    items = document.querySelectorAll(".item")
    console.log(lastItem)
}

nextBtn.addEventListener("click", next)
prevBtn.addEventListener("click", prev)

