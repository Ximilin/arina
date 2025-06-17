document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.gallery__slider');
        const slides = document.querySelectorAll('.gallery__slide');
        const prevBtn = document.querySelector('.gallery__slider-prev');
        const nextBtn = document.querySelector('.gallery__slider-next');
        
        let currentIndex = 0;
        const slideWidth = slides[0].offsetWidth;
        
        function updateSlider() {
            slider.scrollTo({
                left: currentIndex * slideWidth,
                behavior: 'smooth'
            });
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < slides.length - 3) {
                currentIndex++;
                updateSlider();
            }
        });
        
        // Для адаптивности
        window.addEventListener('resize', function() {
            slideWidth = slides[0].offsetWidth;
            updateSlider();
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    burger.classList.remove('active');
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Hero slider
    const heroSlider = document.querySelector('.hero__slider');
    const heroSlides = document.querySelectorAll('.hero__slide');
    const heroPrevBtn = document.querySelector('.hero__slider-prev');
    const heroNextBtn = document.querySelector('.hero__slider-next');
    let heroCurrentSlide = 0;
    
    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        const heroContent = heroSlides[index].querySelector('.hero__content');
        setTimeout(() => {
            heroContent.classList.add('active');
        }, 300);
    }
    
    function nextHeroSlide() {
        heroSlides[heroCurrentSlide].querySelector('.hero__content').classList.remove('active');
        heroCurrentSlide = (heroCurrentSlide + 1) % heroSlides.length;
        showHeroSlide(heroCurrentSlide);
    }
    
    function prevHeroSlide() {
        heroSlides[heroCurrentSlide].querySelector('.hero__content').classList.remove('active');
        heroCurrentSlide = (heroCurrentSlide - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(heroCurrentSlide);
    }
    
    heroNextBtn.addEventListener('click', nextHeroSlide);
    heroPrevBtn.addEventListener('click', prevHeroSlide);
    
    // Auto slide change
    let heroSlideInterval = setInterval(nextHeroSlide, 5000);
    
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(heroSlideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        heroSlideInterval = setInterval(nextHeroSlide, 5000);
    });
    
    // Initialize first slide
    showHeroSlide(heroCurrentSlide);
    
    // Gallery slider
    const gallerySlider = document.querySelector('.gallery__slider');
    const gallerySlides = document.querySelectorAll('.gallery__slide');
    const galleryPrevBtn = document.querySelector('.gallery__slider-prev');
    const galleryNextBtn = document.querySelector('.gallery__slider-next');
    let galleryCurrentSlide = 0;
    const gallerySlideWidth = gallerySlides[0].offsetWidth;
    const galleryVisibleSlides = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    function updateGallerySlider() {
        const offset = -galleryCurrentSlide * (gallerySlideWidth + 30);
        gallerySlider.style.transform = "translateX(${offset}px)";
    }
    
    function nextGallerySlide() {
        if (galleryCurrentSlide < gallerySlides.length - galleryVisibleSlides) {
            galleryCurrentSlide++;
            updateGallerySlider();
        }
    }
    
    function prevGallerySlide() {
        if (galleryCurrentSlide > 0) {
            galleryCurrentSlide--;
            updateGallerySlider();
        }
    }
    
    galleryNextBtn.addEventListener('click', nextGallerySlide);
    galleryPrevBtn.addEventListener('click', prevGallerySlide);
    
    // Testimonials slider


const testimonialsSlider = document.querySelector('.testimonials__slider');
    const testimonialSlides = document.querySelectorAll('.testimonial');
    const testimonialsPrevBtn = document.querySelector('.testimonials__slider-prev');
    const testimonialsNextBtn = document.querySelector('.testimonials__slider-next');
    let testimonialsCurrentSlide = 0;
    
    function showTestimonialSlide(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonialSlide() {
        testimonialsCurrentSlide = (testimonialsCurrentSlide + 1) % testimonialSlides.length;
        showTestimonialSlide(testimonialsCurrentSlide);
    }
    
    function prevTestimonialSlide() {
        testimonialsCurrentSlide = (testimonialsCurrentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonialSlide(testimonialsCurrentSlide);
    }
    
    testimonialsNextBtn.addEventListener('click', nextTestimonialSlide);
    testimonialsPrevBtn.addEventListener('click', prevTestimonialSlide);
    
    // Initialize first testimonial
    showTestimonialSlide(testimonialsCurrentSlide);
    
    // Appointment form
    const appointmentForm = document.getElementById('appointment-form');
    const modal = document.getElementById('modal');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            this.reset();
            modal.classList.add('active');
            
            setTimeout(() => {
                modal.classList.remove('active');
            }, 3000);
        });
    }
    
    // Modal close
    const modalClose = document.querySelector('.modal__close');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    // Animate numbers counting
    const counters = document.querySelectorAll('.count');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target + '+';
            }
        });
    }
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true
    });
    
    // Start counter animation when about section is in view
    const aboutSection = document.querySelector('.about');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(aboutSection);
        }
    });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // Responsive adjustments
    window.addEventListener('resize', function() {
        updateGallerySlider();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlider = new Swiper('.testimonials__slider', {
        loop: true,
        effect: 'slide',
        speed: 800,
        grabCursor: true,
        navigation: {
            nextEl: '.testimonials__slider-next',
            prevEl: '.testimonials__slider-prev',
        },
        pagination: {
            el: '.testimonials__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return `<span class="${className}"></span>`;
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});
