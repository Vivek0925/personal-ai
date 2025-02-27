const container = document.querySelector(".container")
const LoginLink = document.querySelector(".SingInLink")
const RegisterLink = document.querySelector(".SingUpLink")
RegisterLink.addEventListener('click',function(){
    container.classList.add('active');
})
LoginLink.addEventListener('click',function(){
    container.classList.remove('active')
})

document.getElementById("togglePassword").addEventListener("click", function () {
  let passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    this.classList.replace("ri-eye-off-fill", "ri-eye-fill");
  } else {
    passwordField.type = "password";
    this.classList.replace("ri-eye-fill", "ri-eye-off-fill");
  }
});



gsap.from(".stars",{
    y:-100,
    opacity:0,
    delay:0.4,
    duration:1,
})

gsap.from(".container",{
    y: 150,
    opacity:0,
    delay:0.4,
    duration: 1.6,
    stagger:1
})