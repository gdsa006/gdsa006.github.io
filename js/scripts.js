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


// contact for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add viewport meta tag for mobile devices
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
    document.head.appendChild(meta);
  
    // Create and append mobile contact bar
    const mobileContactBar = document.createElement('div');
    mobileContactBar.className = 'mobile-contact-bar';
    mobileContactBar.innerHTML = `
      <a href="tel:+918146890562" role="button" aria-label="Call us">
        <i class="fas fa-phone"></i>
        <span>Call</span>
      </a>
      <a href="mailto:sgkmtrust@gmail.com" role="button" aria-label="Email us">
        <i class="fas fa-envelope"></i>
        <span>Email</span>
      </a>
      <a href="https://wa.me/918146890562?text=Hello, I have a query." target="_blank" role="button" aria-label="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    `;
    document.body.appendChild(mobileContactBar);
  
    // Scroll direction detection with improved performance
    let lastScrollTop = 0;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          
          if (st > lastScrollTop && st > 50) {
            // Scrolling down and not at top
            mobileContactBar.classList.add('hidden');
          } else {
            // Scrolling up or at top
            mobileContactBar.classList.remove('hidden');
          }
          
          lastScrollTop = st <= 0 ? 0 : st;
          ticking = false;
        });
        
        ticking = true;
      }
    }, { passive: true });
  
    // Handle iOS Safari bottom bar
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      
      window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      });
    }
  });