/* ═══════════════════════════════════════════════════════════
   THE INSIDESTORY — Minimal JS
   ═══════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    // Force page to start at the top, overriding browser scroll-restoration
    if (window.history && window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    // Hamburger toggle
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
    }

    // Fixed nav on scroll (for inner pages with navbar--fixed class)
    const navbar = document.querySelector('.navbar');
    if (navbar && navbar.classList.contains('navbar--transparent')) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar--fixed');
                navbar.classList.remove('navbar--transparent');
            } else {
                navbar.classList.remove('navbar--fixed');
                navbar.classList.add('navbar--transparent');
            }
        });
    }

    // Envelope Accordion Script
    const folders = document.querySelectorAll('.envelope-folder');
    if (folders.length > 0) {
        folders.forEach(folder => {
            folder.addEventListener('click', () => {
                if (folder.classList.contains('active')) return;
                folders.forEach(f => f.classList.remove('active'));
                folder.classList.add('active');
            });
        });
    }    // Timeline panel — IntersectionObserver for mobile CSS animation
    // Adds .in-view to the timeline-panel when it scrolls into view,
    // which triggers CSS @keyframes tlSlideIn with staggered delays per item
    const timelinePanel = document.querySelector('.timeline-panel');
    if (timelinePanel && 'IntersectionObserver' in window) {
        const tlObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    tlObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        tlObserver.observe(timelinePanel);
    }
})();
