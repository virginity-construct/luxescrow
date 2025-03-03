// LuxEscrow Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.option-card, .step-card, .feature-card, .metric');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.option-card, .step-card, .feature-card, .metric').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Gold shimmer effect on primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #F2D675, #D4AF37)';
            this.style.boxShadow = '0 5px 15px rgba(212, 175, 55, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #D4AF37, #AA8C2C)';
            this.style.boxShadow = '0 5px 15px rgba(212, 175, 55, 0.2)';
        });
    });
    
    // Form validation for the application form (if implemented)
    const applyForm = document.getElementById('apply-form');
    if (applyForm) {
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation logic would go here
            
            // Show success message
            alert('Your application has been submitted. Our team will contact you shortly.');
            this.reset();
        });
    }
    
    // Popup System Implementation
    
    // Function to open popup
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            document.body.classList.add('popup-open');
            popup.classList.add('active');
            
            // Focus trap for accessibility
            popup.setAttribute('tabindex', '-1');
            popup.focus();
        }
    }
    
    // Function to close popup
    function closePopup(popup) {
        document.body.classList.remove('popup-open');
        popup.classList.remove('active');
    }
    
    // Close popup when clicking the close button
    document.querySelectorAll('.popup-close').forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            const popup = this.closest('.popup-overlay');
            closePopup(popup);
        });
    });
    
    // Close popup when clicking outside the content
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup(this);
            }
        });
    });
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activePopup = document.querySelector('.popup-overlay.active');
            if (activePopup) {
                closePopup(activePopup);
            }
        }
    });
    
    // Setup popup triggers for footer links
    const popupLinks = {
        // Services column
        'For Clients': 'clients-popup',
        'For Providers': 'providers-popup',
        'Escrow Options': 'escrow-options-popup',
        
        // Company column
        'About Us': 'about-us-popup',
        'Privacy Policy': 'privacy-policy-popup',
        'Terms of Service': 'terms-of-service-popup',
        
        // Support column
        'Contact': 'contact-popup',
        'FAQ': 'faq-popup',
        'Dispute Resolution': 'dispute-resolution-popup',
        
        // Additional links
        'Company': 'company-popup'
    };
    
    // Attach event listeners to all footer links
    document.querySelectorAll('.footer-column a').forEach(link => {
        const linkText = link.textContent.trim();
        const popupId = popupLinks[linkText];
        
        if (popupId) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                openPopup(popupId);
            });
        }
    });
    
    // Update "Apply for Verified Access" button to open in new tab
    const applyButtons = document.querySelectorAll('.btn-primary');
    applyButtons.forEach(button => {
        if (button.textContent.includes('Apply for Verified Access')) {
            button.setAttribute('href', 'https://t.me/+u1Xns6Laf_swYTI1');
            button.setAttribute('target', '_blank');
            button.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
