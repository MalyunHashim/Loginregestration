const formOpenBtn=document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwshowHide =document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));  


pwshowHide.forEach(icon => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      if(getPwInput.typen === "password"){
        getPwInput.type = "text";
        icon.classList.replace(" uil-eye-slash", "uill-eye ");
      }else{
        getPwInput.type ="password";
        icon.classList.replace(" uil-eye","uil-eye-slash ")
      }
      
    })
})



signupBtn.addEventListener("click",  (e) => {
e.preventDefault();
formContainer.classList.add("active");
});
loginBtn.addEventListener("click",  (e) =>{
e.preventDefault();
formContainer.classList.remove("active");
});