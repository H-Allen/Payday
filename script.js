document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (if any were added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-triggered animations using Intersection Observer
    const animateElements = document.querySelectorAll('.fade-in-up, .float-in-left, .float-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve once animated
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Adjusts the viewport for intersection calculation
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Animate individual problem cards sequentially
    const problemCards = document.querySelectorAll('.problem-card');
    const problemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.fade-in-up').forEach((card, index) => {
                    card.style.transitionDelay = `${index * 0.1}s`;
                    card.classList.add('active');
                });
                problemObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    // Assuming problem-cards div itself will be observed
    const problemSection = document.querySelector('.problem-cards');
    if (problemSection) {
        problemObserver.observe(problemSection);
    }


    // Animate feature cards with staggered float effect
    const featureCards = document.querySelectorAll('.feature-card');
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                featureCards.forEach((card, index) => {
                    // Stagger based on index and direction
                    if (card.classList.contains('float-in-left')) {
                        card.style.transitionDelay = `${index * 0.15}s`;
                    } else if (card.classList.contains('float-in-right')) {
                        card.style.transitionDelay = `${index * 0.15}s`;
                    }
                    card.classList.add('active');
                });
                featureObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const howItWorksSection = document.querySelector('.feature-cards');
    if (howItWorksSection) {
        featureObserver.observe(howItWorksSection);
    }
});
