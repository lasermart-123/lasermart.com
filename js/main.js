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

// active-nav //
    /*document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        let linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});*/
document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    // Sabhi links select karo
    let links = document.querySelectorAll(".nav-link, .dropdown-item");

    links.forEach(link => {

        let linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            // Current link active
            link.classList.add("active");

            // Agar dropdown item hai to parent dropdown bhi active karo
            let dropdown = link.closest(".dropdown");

            if (dropdown) {
                dropdown.querySelector(".nav-link").classList.add("active");
            }
        }

    });

});
        // Footer //

          const footerData = {

            brand: {
                logo: "./img/logoimg1.png",
                alt: "Lasermart",
                desc: "Advanced energy-based surgical technologies across every speciality. Solutions designed to empower better outcomes since 2016.",

                social: [
                    { icon: "fa-facebook-f", link: "https://facebook.com" },
                    { icon: "fa-twitter", link: "https://twitter.com" },
                    { icon: "fa-instagram", link: "https://instagram.com" },
                    { icon: "fa-linkedin-in", link: "https://linkedin.com" },
                    { icon: "fa-youtube", link: "https://linkedin.com" }
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
                    { name: "Proctology", url: "/general" },
                    { name: "Vascular Surgery", url: "/surgical" },
                    { name: "Gynaecology", url: "/dental" },
                    { name: "Plastic Surgery", url: "/orthopedic" },
                    { name: "Urology", url: "/lab" }
                ]
            },

            contact: {
                title: "Contact Info",

                items: [                 
                    
                    { icon: "fa-location-dot", text: "Office Address: D-1, Pocket D, Sanjay Park, Mayur Vihar, New Delhi, Delhi, 110091 <br> Office No. 719B, 7th Floor, Tower B, Ithum Tower, Galaxy Business Park, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh - 201309" },
                    { icon: "fa-phone", text: "+91 89700 72991" },
                    { icon: "fa-envelope", text: "info@lasermart.in" },
                    { icon: "fa-clock", text: "Mon - Sat: 10:00 AM - 6:00 PM" }
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
