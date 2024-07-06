document.addEventListener('DOMContentLoaded', function() {
    // Lead Form Submission Script
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            
            // Validate form fields (add your validation logic here)
            if (name && email && company) {
                // Simulate form submission and catalog download
                alert(`Thank you, ${name}. The catalog will be sent to ${email}`);
                
                // Close the modal
                $('#leadModal').modal('hide');
                
                // Clear form fields
                leadForm.reset();
                
                // Trigger download (provide the actual catalog link here)
                window.location.href = 'path/to/your/catalog.pdf';
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Contact Us Script
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            
            if (email && message) {
                alert(`Thank you for your message. We will get back to you at ${email}`);
                
                // Clear form fields
                contactForm.reset();
                
                // Add your form submission logic here (e.g., sending the data to your server)
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Video Background Resize Script
    function resizeVideo() {
        var video = document.querySelector('video.fill-width');
        if (video) {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            video.style.width = windowWidth + 'px';
            video.style.height = windowHeight + 'px';
        }
    }
    window.addEventListener('resize', resizeVideo);
    resizeVideo();
    
    // Smooth Scrolling Script
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scrollspy Script
    $('body').scrollspy({ target: '#navbar', offset: 80 });
    $(window).on('activate.bs.scrollspy', function() {
        var activeSection = $('#navbar .nav-item.active').find('a').attr('href');
        console.log('Currently viewing section: ' + activeSection);
    });
    
    // Owl Carousel Initialization Script
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

// Google Analytics Script
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-MBDQ8NRHJG";
    document.head.appendChild(script);
    
    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MBDQ8NRHJG');
    }
})();

// Chat Widget Script
(function(d,t) {
    var BASE_URL="https://app.chatwoot.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'WDEnQfE7Dz83v9X67kcUSZij',
        baseUrl: BASE_URL
      })
    }
})(document,"script");
