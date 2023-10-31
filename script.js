// https://dribbble.com/shots/22585539-Bouyant-Digital-Agency-Landing-Page
// https://vdigtech.com/

gsap.from(".nav, .nav .center", {
    opacity : 0,
    duration : 1,
    stagger : 0.4,

})

window.addEventListener("load", function() {
    const navbar = document.querySelector(".nav");
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollPosition / pageHeight) * 100;
        if (scrollProgress < 20) {
            gsap.to(navbar, { backgroundColor: "#F6F6F4", duration: 0.5 });
        } 
        else if(scrollProgress >= 20 && scrollProgress <= 95){
            gsap.to(navbar, { backgroundColor: "#EDEDE8", duration: 0.5 });
        }
        else if(scrollProgress > 95){
            gsap.to(navbar, { backgroundColor: "#F6F6F4", duration : 0.5});
        }
    });
});