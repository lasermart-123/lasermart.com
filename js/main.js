//preloader//
 document.addEventListener("DOMContentLoaded", function () {
            const preloader = document.getElementById("preloader");

            window.addEventListener("load", function () {
                setTimeout(function () {
                    preloader.style.opacity = "0";
                    preloader.style.visibility = "hidden";
                }, 500); // smooth delay
            });
        });

        // Scroll btn //
        const scrollTopBtn = document.getElementById("scrollTopBtn");


        // Show button when page scrolls
        window.addEventListener("scroll", function () {

            if (window.scrollY > 200) {

                scrollTopBtn.style.display = "flex";

            } else {

                scrollTopBtn.style.display = "none";

            }

        });


        // Scroll to top
        scrollTopBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        // Footer //

          const footerData = {

            brand: {
                logo: "./img/logo.jpeg",
                alt: "Lasermart",
                desc: "We provide high-quality medical instruments and surgical equipment. Trusted by hospitals and clinics across India since 2010.",

                social: [
                    { icon: "fa-facebook-f", link: "https://facebook.com" },
                    { icon: "fa-twitter", link: "https://twitter.com" },
                    { icon: "fa-instagram", link: "https://instagram.com" },
                    { icon: "fa-linkedin-in", link: "https://linkedin.com" }
                ]
            },

            quickLinks: {
                title: "Quick Links",

                links: [
                    { name: "Home", url: "/" },
                    { name: "About Us", url: "/about" },
                    { name: "Products", url: "/products" },
                    { name: "Services", url: "/services" },
                    { name: "Contact", url: "/contact" }
                ]
            },

            categories: {
                title: "Categories",

                links: [
                    { name: "General Instruments", url: "/general" },
                    { name: "Surgical Tools", url: "/surgical" },
                    { name: "Dental Equipment", url: "/dental" },
                    { name: "Orthopedic", url: "/orthopedic" },
                    { name: "Lab Instruments", url: "/lab" }
                ]
            },

            contact: {
                title: "Contact Info",

                items: [
                    { icon: "fa-location-dot", text: "123 Medical Street, Ghaziabad, UP 201009" },
                    { icon: "fa-phone", text: "+91 98765 43210" },
                    { icon: "fa-envelope", text: "info@abc.com" },
                    { icon: "fa-clock", text: "Mon - Sat: 9:00 AM - 6:00 PM" }
                ]
            },

            copyright: {
                year: "2026",
                company: "Lasermart",
                designer: "Vivek Kumar",
                designerLink: "#"
            }

        };


        function loadFooter() {

            document.getElementById('footer-content').innerHTML = `

        <!-- Brand -->
        <div class="col-lg-4 col-md-6 mb-4">

            <a href="index.html" class="footer-logo-link d-inline-block mb-3">

                <img src="${footerData.brand.logo}" 
                     alt="${footerData.brand.alt}" 
                     class="footer-logo-img">

            </a>

            <p class="footer-desc">
                ${footerData.brand.desc}
            </p>

            <div class="social-icons">

                ${footerData.brand.social.map(s => `

                    <a href="${s.link}" target="_blank">

                        <i class="fa-brands ${s.icon}"></i>

                    </a>

                `).join('')}

            </div>

        </div>


        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6 mb-4">

            <h4 class="footer-heading">
                ${footerData.quickLinks.title}
            </h4>

            <ul class="footer-links">

                ${footerData.quickLinks.links.map(l => `

                    <li>
                        <a href="${l.url}">
                            ${l.name}
                        </a>
                    </li>

                `).join('')}

            </ul>

        </div>


        <!-- Categories -->
        <div class="col-lg-2 col-md-6 mb-4">

            <h4 class="footer-heading">
                ${footerData.categories.title}
            </h4>

            <ul class="footer-links">

                ${footerData.categories.links.map(l => `

                    <li>
                        <a href="${l.url}">
                            ${l.name}
                        </a>
                    </li>

                `).join('')}

            </ul>

        </div>


        <!-- Contact -->
        <div class="col-lg-4 col-md-6 mb-4">

            <h4 class="footer-heading">
                ${footerData.contact.title}
            </h4>

            ${footerData.contact.items.map(i => `

                <div class="footer-contact-item">

                    <i class="fa-solid ${i.icon}"></i>

                    <span>${i.text}</span>

                </div>

            `).join('')}

        </div>

    `;



            // COPYRIGHT SECTION
            document.getElementById('footer-copyright').innerHTML = `

    © ${footerData.copyright.year}
    ${footerData.copyright.company}.
    All Rights Reserved.
    Designed by

    <a href="${footerData.copyright.designerLink}">
        ${footerData.copyright.designer}
    </a>

`;

        }


        // LOAD FOOTER
        loadFooter();
