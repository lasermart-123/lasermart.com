// Counter //

const counters = document.querySelectorAll('.counter');
const section = document.querySelector('#counter-section');

let started = false;

function startCounters(){

    if(started) return;

    started = true;

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText.replace(/,/g,'');

            const increment = target / 200;

            if(current < target){

                counter.innerText =
                `${Math.ceil(current + increment).toLocaleString()}`;

                setTimeout(updateCounter, 10);

            }else{
                counter.innerText = target.toLocaleString();
            }
        };

        updateCounter();
    });
}

/* Start when section appears on screen */
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            startCounters();
        }

    });

}, {
    threshold: 0.5
});

observer.observe(section);






























































