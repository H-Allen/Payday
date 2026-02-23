---
layout: default
title: Home
permalink: /
---

<style>
/* Basic styling overrides for Merlot theme to match previous design goals */
body {
    background-color: #1C1C1E; /* Dark background */
    color: #E5E5EA; /* Light text */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

h1, h2, h3, h4, h5, h6 {
    color: #E5E5EA;
}

a {
    color: #0A84FF;
}

a:hover {
    color: #32D74B;
}

/* Ensure navigation links are visible on dark background */
.site-header .wrapper {
    background-color: rgba(28, 28, 30, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 1rem 2rem;
}

.site-title, .site-nav a {
    color: #E5E5EA;
}

/* Hero Section specific styling - assuming it's part of the main content */
#hero {
    background: linear-gradient(135deg, #1A2980 0%, #26D0CE 100%);
    padding: 15vh 5vw; /* Adjust for fixed header */
    color: #E5E5EA;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

#hero h1 {
    font-size: clamp(2.5rem, 8vw + 1rem, 5.5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    letter-spacing: -0.05em;
}

#hero .tagline {
    font-size: clamp(1.2rem, 3vw + 0.5rem, 2.5rem);
    font-weight: 500;
    margin-bottom: 1.5rem;
    max-width: 800px;
}

#hero .subheading {
    font-size: clamp(1rem, 2vw + 0.5rem, 1.4rem);
    max-width: 700px;
    margin-bottom: 3rem;
    color: rgba(255, 255, 255, 0.8);
}

.btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    white-space: nowrap;
    background: linear-gradient(45deg, #0A84FF 0%, #63D471 100%);
    color: #E5E5EA;
    border: none;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

/* General Section Styling */
.section-content {
    background-color: #2C2C2E;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    max-width: 900px;
    margin: 0 auto;
    text-align: left; /* Adjust for markdown content */
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.grid-item {
    background: #1C1C1E;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    text-align: left;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.grid-item:hover {
    transform: translateY(-5px);
}

.grid-item h3 {
    font-size: 1.5rem;
    color: #0A84FF;
    margin-bottom: 0.8rem;
}

ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

ul li {
    background: #2C2C2E;
    padding: 1.5rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    min-width: 250px;
    max-width: 300px;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

ul li strong {
    color: #32D74B;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

/* Footer styling */
.site-footer {
    background-color: #111111;
    color: #929292;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.site-footer a {
    color: #929292;
}

.site-footer a:hover {
    color: #E5E5EA;
}

</style>

<div id="hero">
    <div class="container">
        <h1>Payday</h1>
        <p class="tagline">The personal finance app for people who hate budgeting.</p>
        <p class="subheading">Get one clear "Safe to Spend" number, understand your cash flow, and achieve financial peace of mind without complex spreadsheets or guilt.</p>
        <a href="https://apps.apple.com/app/payday" class="btn" target="_blank" rel="noopener noreferrer">Download on the App Store</a>
    </div>
</div>

<section id="problem">
    <div class="container">
        <h2 class="section-heading">The Problem with Traditional Budgeting</h2>
        <div class="section-content">
            <p>Budgeting often feels like a chore. It demands meticulous tracking, categorizing every expense, and constantly adjusting. For busy professionals, this is not just tedious, it's unsustainable. The traditional approach leads to frustration, guilt, and ultimately, giving up.</p>
            <p>Most finance apps exacerbate the problem. They're overloaded with features, charts, and complex interfaces that make you feel overwhelmed, not empowered. Instead of simplifying your financial life, they add another layer of complexity, turning money management into a second job.</p>
        </div>
    </div>
</section>

<section id="how-it-works">
    <div class="container">
        <h2 class="section-heading">How Payday Changes Everything</h2>
        <p>We believe money management should be intuitive, not intricate. Payday distills your finances into simple, actionable insights, designed to fit seamlessly into your busy life.</p>
        <div class="grid-container">
            <div class="grid-item">
                <h3>Safe to Spend</h3>
                <p>No categories, no guilt. Payday crunches the numbers from your income and fixed expenses to give you one clear, daily "Safe to Spend" amount. Spend it how you like, knowing you're always on track.</p>
            </div>
            <div class="grid-item">
                <h3>Smart Alerts</h3>
                <p>Stay informed without constant checking. Payday sends intelligent, non-judgmental alerts about your spending pace, upcoming bills, or if your Safe to Spend is running low.</p>
            </div>
            <div class="grid-item">
                <h3>Cash Runway</h3>
                <p>Visualize your financial future. See how long your current funds will last at your average spending rate, giving you peace of mind and clarity for big decisions.</p>
            </div>
        </div>
    </div>
</section>

<section id="trust">
    <div class="container">
        <h2 class="section-heading">Your Financial Security, Our Priority</h2>
        <p>In a world of data breaches and intrusive advertising, Payday stands apart. We're built on a foundation of respect for your privacy and unwavering security standards.</p>
        <ul>
            <li>
                <strong>No Ads, Ever.</strong>
                <p>Your financial data is sensitive. We promise to never serve ads or allow third-party trackers within the app. Your focus stays on your money, not distractions.</p>
            </li>
            <li>
                <strong>No Data Selling.</strong>
                <p>Your data belongs to you. We will never sell, share, or misuse your personal financial information. It's strictly for your eyes and your benefit.</p>
            </li>
            <li>
                <strong>Privacy-First Design.</strong>
                <p>From the ground up, Payday is engineered to minimize data collection and maximize your privacy. We only ask for what's essential to deliver our core features.</p>
            </li>
            <li>
                <strong>Secure Infrastructure.</strong>
                <p>Your sensitive information is protected with industry-leading encryption and security protocols, mirroring the standards of top financial institutions.</p>
            </li>
        </ul>
    </div>
</section>

<section id="support">
    <div class="container">
        <h2 class="section-heading">Simple, Transparent Support</h2>
        <div class="section-content">
            <p>Payday is designed to be accessible to everyone. We believe financial clarity shouldn't come with a price tag or hidden features.</p>
            <p>The core Payday app and its revolutionary "Safe to Spend" feature are completely free to use, without limits. We offer optional in-app support and premium features via Apple's secure in-app purchase system, allowing us to sustainably develop and improve Payday without compromising on privacy or introducing ads. You're always in control.</p>
        </div>
    </div>
</section>

<section id="about">
    <div class="container">
        <h2 class="section-heading">Our Mission</h2>
        <div class="section-content">
            <p>We started Payday because we were tired of the financial guilt trip. We're busy professionals who understand the frustration of trying to force a square peg (our lives) into a round hole (traditional budgeting). Our mission is to empower you with effortless financial clarity, giving you the freedom to live your life without constantly worrying about money. We believe everyone deserves a clear path to financial peace, free from spreadsheets, categories, and judgment.</p>
        </div>
    </div>
</section>

<!-- Smooth scrolling navigation with JavaScript -->
<script>
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Subtle animations using Intersection Observer
    const animateElements = document.querySelectorAll('h2, p, .btn, .grid-item, ul li, .section-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Add CSS for animation classes
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .section-heading.is-visible { animation: slideInUp 0.8s forwards; opacity: 0; }
        section p.is-visible { animation: fadeIn 0.8s forwards; opacity: 0; }
        .section-content.is-visible { animation: fadeInScale 0.8s forwards; opacity: 0; }
        .grid-item.is-visible { animation: slideInUp 0.8s forwards; opacity: 0; }
        ul li.is-visible { animation: fadeIn 0.8s forwards; opacity: 0; }
    `;
    document.head.appendChild(styleSheet);
</script>
