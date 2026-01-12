// Sample images - replace with your actual image paths
const galleryImages = [
    {
        src: 'images/1.jpeg',
        alt: 'Memory 1'
    },
    {
        src: 'images/2.jpeg',
        alt: 'Memory 2'
    },
    {
        src: 'images/3.jpeg',
        alt: 'Memory 3'
    },
    {
        src: 'images/4.jpeg',
        alt: 'Memory 4'
    },
    {
        src: 'images/5.jpeg',
        alt: 'Memory 5'
    },
    {
        src: 'images/6.jpeg',
        alt: 'Memory 6'
    },
    {
        src: 'images/7.jpeg',
        alt: 'Memory 7'
    }
];

// Initialize gallery
function initGallery() {
    const gallery = document.getElementById('gallery');
    
    galleryImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        
        item.appendChild(img);
        gallery.appendChild(item);
        
        // Add click event
        item.addEventListener('click', () => openLightbox(index));
    });
}

// Open lightbox
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = galleryImages[index].src;
    lightboxImage.alt = galleryImages[index].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    currentImageIndex = index;
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Navigate lightbox
let currentImageIndex = 0;

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('lightboxImage').src = galleryImages[currentImageIndex].src;
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightboxImage').src = galleryImages[currentImageIndex].src;
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
function observeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        // Stagger animation delay
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// Smooth scroll for hero section
function initSmoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.gallery-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Keyboard navigation for lightbox
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    observeElements();
    initSmoothScroll();
    initKeyboardNavigation();
    
    // Lightbox event listeners
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxNext').addEventListener('click', showNextImage);
    document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);
    
    // Close lightbox when clicking outside image
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });
    
    // Prevent lightbox from closing when clicking on image
    document.getElementById('lightboxImage').addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Parallax effect for hero decoration
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroDecoration = document.querySelector('.hero-decoration');
    if (heroDecoration) {
        heroDecoration.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
    }
});