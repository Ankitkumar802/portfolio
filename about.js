document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
                history.pushState(null, null, hash);
            }
        });
    });

    // Scrollspy functionality
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelector('nav a.nav-link.active')?.classList.remove('active');
                document.querySelector(`nav a.nav-link[href="#${id}"]`).classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
