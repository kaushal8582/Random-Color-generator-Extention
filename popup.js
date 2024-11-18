
function generateRandomColor(){
    const str = '0123456789ABCDEF'
    let colour ="#";
    for(let i=0;i<6;i++){
        colour+=str[Math.floor(Math.random()*str.length)]
    }
    return colour;

}

function createMultipleCard(){
    let cluster = ''
    for(let i=0;i<15;i++){
        let c = generateRandomColor()
        cluster+=`<div class="card" style="background-color: ${c};" >
              <h3 class="hex-code" style="color:#fff"; >${c}</h3> 
        </div>`
    }
    document.querySelector("main").innerHTML = cluster;
}


createMultipleCard()

document.querySelector("button").addEventListener("click",createMultipleCard)

let allCard =document.querySelectorAll(".card")
allCard.forEach((card)=>[
    card.addEventListener("click",()=>{
        let code = card.querySelector("h3").innerText
        navigator.clipboard.writeText(code).then(()=>{
            alert("Color code copies ")
        })
    })
])
