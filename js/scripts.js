// Initialize AOS for page animations
AOS.init({
    duration: 1500,
  });
  
  // Floating Contact Scroll Behavior
  document.addEventListener('DOMContentLoaded', () => {
    const floatingContact = document.querySelector('.floating-contact');
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        floatingContact.classList.add('minimized');
        floatingContact.style.animation = 'minimize 0.3s ease-out forwards';
      } else {
        floatingContact.classList.remove('minimized');
        floatingContact.style.animation = 'maximize 0.3s ease-out forwards';
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  });
  
  // Donation Popup
  function openDonationPopup() {
    document.getElementById("donationPopup").style.display = "flex";
  }
  
  function closeDonationPopup() {
    document.getElementById("donationPopup").style.display = "none";
  }
  
  window.addEventListener('click', (event) => {
    if (event.target === document.getElementById("donationPopup")) {
      closeDonationPopup();
    }
  });
  
  // Image Modal (Lighthouse + LazySizes)
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("modal-close")[0];
  
    // Check if elements exist
    if (!modal || !modalImg || !closeBtn) {
      console.error('Modal elements not found');
      return;
    }
  
    // Handle gallery image clicks (supports lazy-loaded images)
    document.querySelectorAll('.gallery-img').forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = "block";
        const imgSrc = img.getAttribute('src') || img.getAttribute('data-src');
        modalImg.src = imgSrc;
        document.body.style.overflow = 'hidden';
      });
    });
  
    // Close modal on close button click
    closeBtn.addEventListener('click', closeModal);
  
    // Close modal on clicking outside
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Close modal on Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  });
  
  // Background Music
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
  
    if (audio && playButton) {
      playButton.addEventListener('click', () => {
        audio.play()
          .then(() => console.log('Playback started!'))
          .catch(error => console.error('Playback failed:', error));
      });
    } else {
      console.error('Audio or play button not found');
    }
  });
  
  // Activate Events Tab
  function activateEventsTab() {
    document.querySelectorAll('#galleryTab .nav-link').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content .tab-pane').forEach(pane => pane.classList.remove('show', 'active'));
    const eventsTab = document.querySelector('#galleryTab a[href="#events"]');
    const eventsPane = document.querySelector('#events');
    if (eventsTab && eventsPane) {
      eventsTab.classList.add('active');
      eventsPane.classList.add('show', 'active');
    } else {
      console.error('Events tab or pane not found');
    }
  }