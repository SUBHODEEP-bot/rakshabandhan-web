// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Loading Screen Animation
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContainer = document.getElementById('mainContainer');
    const loadingProgress = document.querySelector('.loading-progress');

    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide loading screen and show main content
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContainer.classList.add('loaded');
                    
                    // Start background music (optional)
                    const backgroundMusic = document.getElementById('backgroundMusic');
                    if (backgroundMusic) {
                        backgroundMusic.volume = 0.3;
                        // Uncomment the next line if you want autoplay (requires user interaction)
                        // backgroundMusic.play();
                    }
                }, 500);
            }, 500);
        }
        loadingProgress.style.width = progress + '%';
    }, 100);

    // Interactive Rakhi Tying Feature
    const tieRakhiBtn = document.getElementById('tieRakhiBtn');
    const rakhiDesign = document.querySelector('.rakhi-design');
    const wrist = document.querySelector('.wrist');

    if (tieRakhiBtn && rakhiDesign) {
        tieRakhiBtn.addEventListener('click', function() {
            tieRakhi();
        });

        rakhiDesign.addEventListener('click', function() {
            tieRakhi();
        });
    }

    function tieRakhi() {
        // Create celebration effect
        createCelebrationEffect();
        
        // Animate rakhi tying
        rakhiDesign.style.transform = 'scale(1.2)';
        rakhiDesign.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            rakhiDesign.style.transform = 'scale(1)';
            
            // Move rakhi to wrist
            const rakhiClone = rakhiDesign.cloneNode(true);
            rakhiClone.style.position = 'absolute';
            rakhiClone.style.top = '50%';
            rakhiClone.style.left = '50%';
            rakhiClone.style.transform = 'translate(-50%, -50%) scale(0.3)';
            rakhiClone.style.zIndex = '10';
            rakhiClone.style.transition = 'all 1s ease';
            
            wrist.appendChild(rakhiClone);
            
            setTimeout(() => {
                rakhiClone.style.transform = 'translate(-50%, -50%) scale(0.8)';
                showTiedMessage();
            }, 100);
        }, 500);
    }

    function createCelebrationEffect() {
        // Create floating hearts
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
        
        // Create sparkles
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createSparkle();
            }, i * 50);
        }
    }

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = '20px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'all 3s ease-out';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = '-50px';
            heart.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 3000);
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.fontSize = '16px';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.zIndex = '1000';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            document.body.removeChild(sparkle);
        }, 2000);
    }

    function showTiedMessage() {
        const message = document.createElement('div');
        message.innerHTML = 'Rakhi Tied Successfully! 💕';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'linear-gradient(45deg, #ff6b6b, #ffd93d)';
        message.style.color = 'white';
        message.style.padding = '1rem 2rem';
        message.style.borderRadius = '50px';
        message.style.fontSize = '1.2rem';
        message.style.fontWeight = 'bold';
        message.style.zIndex = '1001';
        message.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        message.style.animation = 'messagePop 3s ease-out forwards';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            document.body.removeChild(message);
        }, 3000);
    }

    // Parallax Effect for Background Elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-hearts, .floating-rakhis, .particles');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Smooth Scrolling for Navigation
    const smoothScroll = function(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add click event to wish cards for extra interaction
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle bounce effect
            this.style.transform = 'translateY(-15px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1)';
            }, 200);
            
            // Create a small heart effect
            createSmallHeart(this);
        });
    });

    function createSmallHeart(element) {
        const rect = element.getBoundingClientRect();
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.fontSize = '16px';
        heart.style.left = (rect.left + rect.width / 2) + 'px';
        heart.style.top = (rect.top + rect.height / 2) + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        heart.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = (rect.top - 50) + 'px';
            heart.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 1000);
    }

    // Memory timeline animation
    const memoryItems = document.querySelectorAll('.memory-item');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const memoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    memoryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.8s ease';
        memoryObserver.observe(item);
    });

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        @keyframes messagePop {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        .wish-card {
            transition: all 0.3s ease;
        }
        
        .wish-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
    `;
    document.head.appendChild(style);

    // Add floating particles effect
    function createFloatingParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.3) + ')';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = 'particleFloat ' + (Math.random() * 10 + 10) + 's linear infinite';
            particle.style.animationDelay = Math.random() * 10 + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    createFloatingParticles();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                window.scrollBy({
                    top: 100,
                    behavior: 'smooth'
                });
                break;
            case 'ArrowUp':
                e.preventDefault();
                window.scrollBy({
                    top: -100,
                    behavior: 'smooth'
                });
                break;
            case 'Home':
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                break;
            case 'End':
                e.preventDefault();
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
                break;
        }
    });

    // Add touch gestures for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up
                window.scrollBy({
                    top: -200,
                    behavior: 'smooth'
                });
            } else {
                // Swipe down
                window.scrollBy({
                    top: 200,
                    behavior: 'smooth'
                });
            }
        }
    }

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-hearts, .floating-rakhis, .particles');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Add a special effect when the page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            // Create a grand entrance effect
            const title = document.querySelector('.title-text');
            if (title) {
                title.style.animation = 'gradientShift 2s ease-in-out infinite, titleEntrance 1s ease-out';
            }
            
            // Add entrance animation for all sections
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'all 0.8s ease';
                
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 1000);
    });

    // Add CSS for title entrance animation
    const titleEntranceStyle = document.createElement('style');
    titleEntranceStyle.textContent = `
        @keyframes titleEntrance {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(-20px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(titleEntranceStyle);

    console.log('🎀 Raksha Bandhan Website Loaded Successfully! 💕');
    console.log('Made with love by Subhodeep Pal for his beloved sisters');
}); 