document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Scroll Reveal Observer
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, we can unobserve if we don't need re-animation
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Navigation Activity Toggle
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 4. Gallery Slider Micro-interactions
    const slider = document.querySelector('.gallery-slider');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const prevBtn = document.querySelector('.slider-arrow.prev');

    if (slider && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 300, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    // 5. Button Click Effects (Simple Audio Feedback Mockup or Visual Pulse)
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // 6. Search Bar Focus Effect
    const searchInput = document.querySelector('.search-bar input');
    const searchBar = document.querySelector('.search-bar');
    if (searchInput && searchBar) {
        searchInput.addEventListener('focus', () => {
            searchBar.style.boxShadow = 'inset 0 0 15px var(--cyan-glow)';
            searchBar.style.borderColor = 'var(--teal-primary)';
        });
        searchInput.addEventListener('blur', () => {
            searchBar.style.boxShadow = '';
            searchBar.style.borderColor = '';
        });
    }

    // 7. Dynamic Data Mockup: Update system time in profile (Optional Sci-fi touch)
    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
        const timeDisplay = document.createElement('span');
        timeDisplay.style.fontSize = '0.6rem';
        timeDisplay.style.color = '#557777';
        timeDisplay.style.marginLeft = '10px';
        profileSection.appendChild(timeDisplay);

        const updateTime = () => {
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                           now.getMinutes().toString().padStart(2, '0') + ':' + 
                           now.getSeconds().toString().padStart(2, '0');
            timeDisplay.textContent = `[SYS_TIME: ${timeStr}]`;
        };
        setInterval(updateTime, 1000);
        updateTime();
    }
});
