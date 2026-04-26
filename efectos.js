// 1. Preparamos los sonidos para los menús
const sonidoClic = new Audio('./sonidos/wow.mp3');

// 2. Preparamos los sonidos para los efectos AR
const sonidoConfeti = new Audio('./sonidos/confeti.mp3');
const sonidoFuegos = new Audio('./sonidos/firework.mp3');
const sonidoBurbujas = new Audio('./sonidos/bubble.mp3');

// Función general para el clic de los menús (Pantalla principal)
function reproducirClic() {
    sonidoClic.currentTime = 0; 
    sonidoClic.play().catch(e => console.log("Audio bloqueado temporalmente"));
}

// Función auxiliar para los botones de efectos AR
function reproducirEfecto(audio) {
    audio.currentTime = 0;
    audio.play().catch(e => console.log("Audio bloqueado temporalmente"));
}

// --- CHISPAS DEL MENÚ PRINCIPAL ---
function lanzarChispas(event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    confetti({
        particleCount: 40,
        spread: 50,
        origin: { x: x, y: y },
        colors: ['#FFD700', '#FFFFFF', '#4a6fa5'], 
        disableForReducedMotion: true
    });
}

// --- EFECTOS PARA LA CÁMARA AR ---

// 1. Confeti Clásico
function efectoConfeti() {
    reproducirEfecto(sonidoConfeti); // Llama al sonido específico
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#ffffff', '#0055A4', '#E63946'], 
        zIndex: 3000
    });
}

// 2. Fuegos Artificiales (¡Más largos, gruesos y visibles!)
function efectoFuegos() {
    reproducirEfecto(sonidoFuegos);
    
    // Tira mucho más gruesa y larga (ancho 8, largo 80)
    const tiraLarga = confetti.shapeFromPath({ path: 'M0,0 h8 v80 h-8 Z' });
    
    let duration = 6 * 1000; 
    let animationEnd = Date.now() + duration;
    
    let defaults = { 
        startVelocity: 45,
        spread: 360, 
        ticks: 90,
        zIndex: 3000,
        scalar: 1.9, 
        shapes: [tiraLarga, 'circle'], 
        colors: ['#fb00ff', '#5500ff', '#e580e7', '#6f00ff', '#a22894'] // Colores más vibrantes
    };

    let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        
        let particleCount = 60 * (timeLeft / duration); // Aumentamos la cantidad de chispas
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: Math.random(), y: Math.random() - 0.2 } 
        }));
    }, 250);
}

// 3. Burbujas Flotantes
function efectoBurbujas() {
    reproducirEfecto(sonidoBurbujas); // Llama al sonido específico
    confetti({
        particleCount: 60,
        spread: 100,
        origin: { y: 1 }, 
        colors: ['#adf2f8', '#6fc9e6', '#3b89a8'], 
        shapes: ['circle'], 
        gravity: -0.12, 
        scalar: 3, 
        ticks: 300, 
        zIndex: 3000
    });
}

let animacionEnPlay = true;

function toggleAnimacion() {
    // Buscamos todos los modelos 3D que tengan animaciones
    const chibis = document.querySelectorAll('a-gltf-model');
    const boton = document.getElementById('btn-animacion');
    
    animacionEnPlay = !animacionEnPlay;

    chibis.forEach(chibi => {
        if (animacionEnPlay) {
            // Reanudar: Velocidad normal
            chibi.setAttribute('animation-mixer', 'timeScale: 1');
            boton.innerHTML = '⏸️'; // Cambia el icono a pausa
        } else {
            // Pausar: Velocidad cero (se congela)
            chibi.setAttribute('animation-mixer', 'timeScale: 0');
            boton.innerHTML = '▶️'; // Cambia el icono a play
        }
    });
    
    // Opcional: Sonido de clic si ya tienes la función configurada
    if (typeof reproducirClic === "function") reproducirClic();
}