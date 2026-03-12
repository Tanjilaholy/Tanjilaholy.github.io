// Theme toggle
const toggle = document.getElementById("themeToggle");

toggle.onclick = function() {
    document.body.classList.toggle("light-mode");
}

// Certificate modal
const modal = document.getElementById("certificateModal");
const btn = document.getElementById("viewCertificateBtn");
const span = document.querySelector(".close");

btn.onclick = function(){
    modal.style.display = "flex";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}