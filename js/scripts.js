// page anim
AOS.init({
  duration: 1500,
});



// contact pop
document.addEventListener('DOMContentLoaded', (event) => {
const floatingContact = document.querySelector('.floating-contact');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        floatingContact.classList.add('minimized');
        floatingContact.style.animation = 'minimize 0.3s ease-out forwards';
    } else {
        floatingContact.classList.remove('minimized');
        floatingContact.style.animation = 'maximize 0.3s ease-out forwards';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);
});


// donate popup
function openDonationPopup() {
document.getElementById("donationPopup").style.display = "flex";
}

function closeDonationPopup() {
document.getElementById("donationPopup").style.display = "none";
}

window.onclick = function(event) {
if (event.target == document.getElementById("donationPopup")) {
document.getElementById("donationPopup").style.display = "none";
}
}


// lighthouse
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("modal-close")[0];

document.querySelectorAll('.gallery-img').forEach(img => {
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.style.overflow = 'hidden';
}
});

closeBtn.onclick = function() {
closeModal();
}

modal.onclick = function(event) {
if (event.target === modal) {
    closeModal();
}
}

document.addEventListener('keydown', function(event) {
if (event.key === 'Escape') {
    closeModal();
}
});

function closeModal() {
modal.style.display = "none";
document.body.style.overflow = 'auto';
}
