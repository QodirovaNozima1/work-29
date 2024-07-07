const title = document.querySelector(".title")
const btn = document.querySelector(".btn")



const TEL_NUMBER = [
    "+998 99 902 00 65",
    "+998 99 851 45 80",
    "+998 99 791 24 84",
    "+998 99 011 45 74",
    "+998 74 343 65 76",
    "+998 96 466 65 22",
    "+998 98 312 66 63",
]
console.log();

btn.addEventListener("click",()=>{
    btn.setAttribute("disabled",true)
    let interval = setInterval(()=>{
        let index = Math.floor( Math.random() * TEL_NUMBER.length)
    title.textContent = TEL_NUMBER[index]
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        btn.removeAttribute("disabled")
    },2500)
})