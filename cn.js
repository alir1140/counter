const value = document.querySelector("#value")
let count = 0;
const btns = document.querySelectorAll(".btn")

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count=0;
        }

        if(count > 0){
            value.style.color="green"
        }
        if(count > 10){
            value.style.color="gold"
        }
        if(count < 0){
            value.style.color="red"
        }
        if(count < -10){
            value.style.color="pink"
        }
        if(count === 0){
            value.style.color="white"
        }
        value.textContent=count
    })
})