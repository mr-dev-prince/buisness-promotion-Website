

const subscribeBtn = document.querySelectorAll(".btn")
// console.log(subscribeBtn.textContent); 

console.log(subscribeBtn);

subscribeBtn[0].addEventListener("click", ()=>{
    subscribeBtn[0].textContent = "Subscribed";
    subscribeBtn[0].style.background  = "red";
    subscribeBtn[0].style.border  = "red";
})

subscribeBtn[1].addEventListener("click", ()=>{
    subscribeBtn[1].textContent = "Coming Soon!";
    subscribeBtn[1].style.background  = "blue";
    subscribeBtn[1].style.border  = "blue";
})