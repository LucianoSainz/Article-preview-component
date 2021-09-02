

const socials = document.querySelector('.open')
const shareBtn = document.getElementById('share')


shareBtn.addEventListener("click", () => {
    socials.classList.add("clicked");
})
