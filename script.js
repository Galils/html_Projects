window.onload = function() {
    // Crée l'animation GSAP
    gsap.to(".truck", {
        x: 600, // distance à parcourir
        duration: 5, // durée de l'animation
        ease: "power1.inOut", // effet de transition
        repeat: -1, // l'animation se répète en boucle
        yoyo: true // revenir en arrière
    });
};