// ==========================
// HERO PARALLAX
// ==========================

const showcase = document.querySelector(".hero-showcase");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

showcase.style.transform=`translate(${x}px,${y}px)`;

});
//==========================
// HERO PARALLAX
//==========================

const hero=document.querySelector(".hero");

const rings=document.querySelectorAll(".hero-ring");

const floatingCards=document.querySelectorAll(".glass-card");

hero.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*25;

const y=(e.clientY/window.innerHeight-.5)*25;

rings.forEach((ring,index)=>{

ring.style.transform=
`translate(${x*(index+1)*0.25}px,
${y*(index+1)*0.25}px)`;

});

floatingCards.forEach((card,index)=>{

card.style.transform=
`translate(${x*(index+1)*0.4}px,
${y*(index+1)*0.4}px)`;

});

});

hero.addEventListener("mouseleave",()=>{

rings.forEach(ring=>{

ring.style.transform="translate(0,0)";

});

floatingCards.forEach(card=>{

card.style.transform="translate(0,0)";

});

});

//==========================
// PORTFOLIO ANIMATION
//==========================

const portfolioCards = document.querySelectorAll(".portfolio-card");

const portfolioObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

portfolioCards.forEach(card=>{

portfolioObserver.observe(card);

});
//==========================
// COUNTER
//==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = +counter.dataset.target;

let current = 0;

const increment = target / 100;

const updateCounter = ()=>{

current += increment;

if(current < target){

counter.innerText = Math.ceil(current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

counterObserver.unobserve(counter);

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

//==========================
// FAQ
//==========================

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});


//==========================
// TESTIMONIAL SLIDER
//==========================

const slides=document.querySelectorAll(".testimonial-card");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

let current=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

}

next.addEventListener("click",()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

});

prev.addEventListener("click",()=>{

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

});

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

},5000);


//==========================
// SCROLL REVEAL
//==========================

const reveals=document.querySelectorAll(
".reveal,.reveal-left,.reveal-right,.reveal-scale"
);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

reveals.forEach(item=>{

revealObserver.observe(item);

});

//==========================
// SCROLL PROGRESS
//==========================

const progressBar=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const height=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/height)*100;

progressBar.style.width=progress+"%";

});


//==========================
// SCROLL TOP
//==========================

const scrollTopBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


//==========================
// PRELOADER
//==========================

window.addEventListener("load",()=>{

const preloader=document.querySelector(".preloader");

setTimeout(()=>{

preloader.classList.add("hide");

},600);

});

//==========================
// 3D TILT
//==========================

const tiltCards=document.querySelectorAll(".tilt");

tiltCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateY=(x-centerX)/18;

const rotateX=(centerY-y)/18;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

//==========================
// CUSTOM CURSOR
//==========================

if(window.matchMedia("(pointer:fine)").matches){

const dot=document.querySelector(".cursor-dot");
const outline=document.querySelector(".cursor-outline");

let mouseX=0;
let mouseY=0;

let outlineX=0;
let outlineY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

dot.style.left=mouseX+"px";
dot.style.top=mouseY+"px";

});

function animateCursor(){

outlineX+=(mouseX-outlineX)*0.18;
outlineY+=(mouseY-outlineY)*0.18;

outline.style.left=outlineX+"px";
outline.style.top=outlineY+"px";

requestAnimationFrame(animateCursor);

}

animateCursor();

document.querySelectorAll(
"a,button,.btn,.btn-outline,.glass-card,.service-card,.portfolio-card,.team-card,.price-card,.faq-question"
).forEach(el=>{

el.addEventListener("mouseenter",()=>{

outline.classList.add("cursor-hover");

});

el.addEventListener("mouseleave",()=>{

outline.classList.remove("cursor-hover");

});

});

}

//==========================
// EMAILJS CONTACT FORM
//==========================

// Initialize EmailJS
emailjs.init({
    publicKey: "pyVj3_RkhShFL1G2c",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = this.querySelector("button");

        const originalText = button.innerHTML;

        button.innerHTML = "Sending...";
        button.disabled = true;

        emailjs.sendForm(
            "service_40kljy8",
            "template_8d28bwt",
            this
        )
        .then(() => {

            button.innerHTML = "✓ Message Sent";

            this.reset();

            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2500);

        })
        .catch((error) => {

            console.error("EmailJS Error:", error);

            button.innerHTML = "❌ Failed";

            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2500);

        });

    });

}