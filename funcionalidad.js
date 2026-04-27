
// Función para el menú
function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}

// Función para cambiar de pantalla
function showScreen(id) {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.getElementById("sideMenu").classList.remove("active");

    let titles = {
        home: "Inicio",
        camera: "Realidad Aumentada",
        gallery: "Galería",
        videos: "Videos",
        stats: "Estadísticas",
        trivia: "Trivias"
    };
    document.getElementById("headerTitle").innerText = titles[id];

    // Lógica de pantallas
    if (id === 'camera') {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 200);
    } else if (id === 'gallery') {
        actualizarVistaGaleria(); // Dibuja las cartas al entrar
        stopAR();
    } else {
        stopAR();
    }
}

// VARIABLE GLOBAL para controlar si AR está iniciado
let arStarted = false;

// FUNCIÓN PRINCIPAL: Iniciar AR
function startAR() {
    console.log("🎬 Iniciando AR...");
    const scene = document.querySelector('a-scene');
    const startBtnContainer = document.getElementById('startButtonContainer');
    const loading = document.getElementById('arLoading');
    const message = document.getElementById('arMessage');

    if (!scene) {
        console.error("❌ No se encontró la escena AR");
        return;
    }

    if (loading) loading.style.display = 'block';
    if (startBtnContainer) startBtnContainer.style.display = 'none';

    try {
        const arSystem = scene.systems["mindar-image-system"];
        if (arSystem) {
            arSystem.start();
            arStarted = true;

            setTimeout(() => {
                if (loading) loading.style.display = 'none';
                if (message) {
                    message.style.display = 'block';
                    message.innerHTML = '✅ Cámara activada - Busca la imagen de Pixel Football';
                }
                console.log("✅ AR iniciado correctamente");
                document.getElementById('efectosAR').style.display = 'flex';
            }, 1500);

        } else {
            throw new Error("El motor de AR no está listo o no se cargó.");
        }
    } catch (error) {
        console.error("❌ Error al iniciar AR:", error);
        if (loading) loading.style.display = 'none';
        if (startBtnContainer) startBtnContainer.style.display = 'block';
        if (message) {
            message.style.display = 'block';
            message.innerHTML = '❌ Error: ' + error.message;
        }
    }
}

// Función para detener AR
function stopAR() {
    if (!arStarted) return;
    const scene = document.querySelector('a-scene');
    if (scene) {
        try {
            const arSystem = scene.systems["mindar-image-system"];
            if (arSystem) {
                arSystem.stop();
            }

            const videoElement = document.querySelector('video');
            if (videoElement && videoElement.srcObject) {
                videoElement.srcObject.getTracks().forEach(track => track.stop());
            }

            arStarted = false;
            document.getElementById('efectosAR').style.display = 'none';
            console.log("⏸️ AR y cámara detenidos por completo");

            const startBtnContainer = document.getElementById('startButtonContainer');
            if (startBtnContainer) startBtnContainer.style.display = 'block';

        } catch (e) {
            console.log("Error al detener AR:", e);
        }
    }
}



// Función para dibujar el Álbum de Estampas
function actualizarVistaGaleria() {
    const contenedor = document.getElementById('albumContenedor');
    const contadorTexto = document.getElementById('contadorAlbum');

    if (!contenedor) return;
    contenedor.innerHTML = '';

    let escudosGuardados = JSON.parse(localStorage.getItem('albumMundial')) || [];
    if (contadorTexto) contadorTexto.innerText = escudosGuardados.length;

    for (let i = 0; i < 48; i++) {
        let div = document.createElement('div');
        // Usamos typeof para prevenir errores si la variable selecciones aún no se carga
        let infoPais = (typeof selecciones !== 'undefined') ? selecciones[i] : null;
        let nombrePais = infoPais ? infoPais.pais : "Equipo " + (i + 1);

        if (escudosGuardados.includes(i)) {
            div.className = 'estampa desbloqueada';
            div.innerHTML = `
                <div class="estampa-icono">⚽</div>
                <div class="estampa-nombre">${nombrePais}</div>
            `;
            div.onclick = () => abrirTarjeta(i);
        } else {
            div.className = 'estampa bloqueada';
            div.innerHTML = `
                <div class="estampa-icono">🔒</div>
                <div class="estampa-nombre">${nombrePais}</div>
            `;
        }
        contenedor.appendChild(div);
    }
}

// Función para abrir la tarjeta con los datos del diccionario
function abrirTarjeta(index) {
    // 1. Buscamos los datos en el diccionario.js
    let info = selecciones[index];
    if (!info) return;

    // 2. Llenamos el nombre y aplicamos los colores del equipo
    const titulo = document.getElementById('tarjetaNombre');
    titulo.innerText = info.pais;
    titulo.style.backgroundColor = info.colorPrincipal;
    titulo.style.color = info.colorSecundario;

    // 3. Llenamos la historia
    document.getElementById('tarjetaHistoria').innerText = info.historia;

    // 4. Cambiamos el fondo de la tarjeta para que combine
    document.getElementById('tarjetaFondo').style.background = `linear-gradient(135deg, ${info.colorPrincipal}44, #ffffff)`;

    // 5. Configuramos la imagen del logo

    document.getElementById('tarjetaLogo').src = `logos/${index}.png`;



    // 7. Mostramos la ventana emergente
    document.getElementById('modalTarjeta').className = 'modal-activo';
}

// Función para cerrar la tarjeta
function cerrarTarjeta() {
    document.getElementById('modalTarjeta').className = 'modal-oculto';
}

//--------------------------------------------------------------------------------

const pasosTutorial = [
    {
        imagen: "./fotosGuia/Paso1.png",
    },
    {
        imagen: "./fotosGuia/Paso2.png",
    },
    {
        imagen: "./fotosGuia/Paso3.png",
    },
    {
        imagen: "./fotosGuia/Paso4.png",
    },
    {
        imagen: "./fotosGuia/Paso5.png",
    },
    {
        imagen: "./fotosGuia/Paso6.png",
    },
    {
        imagen: "./fotosGuia/Paso8.png",
    },
    {
        imagen: "./fotosGuia/Paso9.png",
    },
    {
        imagen: "./fotosGuia/Paso7.png",
    },

    {
        imagen: "./fotosGuia/Paso12.png",
    },
    {
        imagen: "./fotosGuia/Paso10.png",
    }
];

let pasoActual = 0;

function activarAsistente() {
    // Verificar que los elementos existen
    const modal = document.getElementById('modalAsistente');
    const imagen = document.getElementById('imagenTutorial');
    const boton = document.getElementById('btnSiguienteTutorial');

    if (!modal || !imagen || !boton) {
        console.error('No se encontraron los elementos del tutorial');
        return;
    }

    pasoActual = 0;

    // Actualizar solo la imagen (ya no hay texto)
    imagen.src = pasosTutorial[pasoActual].imagen;
    boton.innerHTML = "Siguiente";

    // Mostrar modal
    modal.classList.remove('modal-oculto');
    modal.classList.add('modal-activo');
}

function avanzarTutorial() {
    const modal = document.getElementById('modalAsistente');
    const imagen = document.getElementById('imagenTutorial');
    const boton = document.getElementById('btnSiguienteTutorial');

    if (!modal || !imagen || !boton) return;

    pasoActual++;

    if (pasoActual < pasosTutorial.length) {
        // Actualizar solo la imagen al siguiente paso
        imagen.src = pasosTutorial[pasoActual].imagen;

        // Cambiar texto del botón si es el último paso
        if (pasoActual === pasosTutorial.length - 1) {
            boton.innerHTML = "Aceptar";
        }
    } else {
        // Cerrar modal cuando se pasa del último paso
        modal.classList.add('modal-oculto');
        modal.classList.remove('modal-activo');
    }
}

// Función para cerrar manualmente
function cerrarAsistente() {
    const modal = document.getElementById('modalAsistente');
    if (modal) {
        modal.classList.add('modal-oculto');
        modal.classList.remove('modal-activo');
    }
}

// Agrega esta función después de tus funciones existentes (por ejemplo, después de cerrarAsistente)

// Función para actualizar estadísticas de trivia cuando se muestra la pantalla
function actualizarEstadisticasTrivia() {
    // Verificar si existe el contenedor y los datos de trivia
    const container = document.getElementById('matchesContainer');
    if (!container || !window.triviaProgreso) return;

    // Calcular estadísticas
    const equipos = Object.keys(window.triviaProgreso);
    let totalRespondidas = 0;
    let totalCorrectas = 0;
    let totalPuntos = 0;
    let equiposCompletados = 0;

    const statsEquipos = equipos.map(equipo => {
        const prog = window.triviaProgreso[equipo];
        const totalPreguntas = window.triviaData?.[equipo]?.questions?.length || 0;
        const porcentaje = totalPreguntas > 0 ? Math.round((prog.correctas / totalPreguntas) * 100) : 0;

        totalRespondidas += prog.respondidas;
        totalCorrectas += prog.correctas;
        totalPuntos += prog.puntajeTotal;

        if (prog.respondidas === totalPreguntas && totalPreguntas > 0) {
            equiposCompletados++;
        }

        return {
            nombre: equipo,
            ...prog,
            totalPreguntas,
            porcentaje
        };
    });

    // Ordenar por puntaje
    statsEquipos.sort((a, b) => b.puntajeTotal - a.puntajeTotal);

    // Generar HTML
    let html = `
        <div class="stats-resumen" style="background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 15px; padding: 20px; margin-bottom: 25px; border-left: 5px solid #FFD700; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <h3 style="color: #FFD700; margin-bottom: 20px; font-size: 1.6rem; text-align: center;">📊 RESUMEN GLOBAL</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.2rem; color: #FFD700; font-weight: bold;">${totalPuntos}</div>
                    <div style="color: #aaa; font-size: 0.9rem;">PUNTOS TOTALES</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.2rem; color: #4CAF50; font-weight: bold;">${totalCorrectas}</div>
                    <div style="color: #aaa; font-size: 0.9rem;">RESPUESTAS CORRECTAS</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.2rem; color: #e63946; font-weight: bold;">${totalRespondidas - totalCorrectas}</div>
                    <div style="color: #aaa; font-size: 0.9rem;">INCORRECTAS</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.2rem; color: #4a6fa5; font-weight: bold;">${equiposCompletados}/${equipos.length}</div>
                    <div style="color: #aaa; font-size: 0.9rem;">EQUIPOS COMPLETADOS</div>
                </div>
            </div>
        </div>
    `;

    if (statsEquipos.length > 0) {
        html += `<h3 style="color: #FFD700; margin: 25px 0 15px; font-size: 1.5rem; text-align: center;">🏆 RANKING DE EQUIPOS</h3>`;

        statsEquipos.forEach((equipo, index) => {
            let medalla = '';
            if (index === 0) medalla = '🥇';
            else if (index === 1) medalla = '🥈';
            else if (index === 2) medalla = '🥉';

            html += `
            <div class="match-card" style="margin-bottom: 15px; ${index === 0 ? 'border-top: 5px solid #FFD700;' : ''} background: linear-gradient(135deg, #16213e, #1a1a2e);">
                <div class="match-header" style="display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #333;">
                    ${medalla ? `<div style="font-size: 2.5rem;">${medalla}</div>` : ''}
                    <div style="flex: 1; text-align: ${medalla ? 'left' : 'center'};">
                        <div class="match-teams" style="font-size: 1.3rem; color: white;">${equipo.nombre}</div>
                        <div class="match-result" style="font-size: 1.8rem; color: #FFD700;">${equipo.puntajeTotal} pts</div>
                    </div>
                </div>
                
                <div class="stat-row" style="margin-top: 15px;">
                    <div class="stat-title" style="color: #aaa;">PROGRESO</div>
                    <div class="stat-values" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: #4CAF50;">✅ ${equipo.correctas} correctas</span>
                        <span style="color: #e63946;">❌ ${equipo.incorrectas} incorrectas</span>
                    </div>
                    <div class="stat-bar-bg" style="background: #0f3460; height: 12px; border-radius: 6px; display: flex; overflow: hidden;">
                        <div class="stat-bar-t1" style="width: ${equipo.porcentaje}%; background: #4CAF50; height: 100%;"></div>
                        <div class="stat-bar-t2" style="width: ${100 - equipo.porcentaje}%; background: #e63946; height: 100%;"></div>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; color: #aaa; font-size: 0.9rem; margin-top: 15px; padding-top: 10px; border-top: 1px solid #333;">
                    <span>📊 ${equipo.respondidas}/${equipo.totalPreguntas} preguntas</span>
                    <span>🎯 ${equipo.porcentaje}% aciertos</span>
                </div>
            </div>`;
        });
    } else {
        html += '<p style="text-align: center; color: #aaa; padding: 40px;">Aún no hay estadísticas. ¡Juega la trivia primero!</p>';
    }

    container.innerHTML = html;
}

// Modifica la función showScreen existente (reemplaza la que tienes con esta)
function showScreen(id) {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.getElementById("sideMenu").classList.remove("active");

    let titles = {
        home: "Inicio",
        camera: "Realidad Aumentada",
        gallery: "Galería",
        videos: "Videos",
        stats: "Estadísticas",
        trivia: "Trivias"
    };
    document.getElementById("headerTitle").innerText = titles[id];

    // Lógica de pantallas
    if (id === 'camera') {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 200);
    } else if (id === 'gallery') {
        actualizarVistaGaleria(); // Dibuja las cartas al entrar
        stopAR();
    } else if (id === 'stats') {
        // Actualizar estadísticas al entrar a la pantalla
        setTimeout(() => {
            actualizarEstadisticasTrivia();
        }, 100);
        stopAR();
    } else {
        stopAR();
    }
}

//--------------------------------------------------------------------------------

function restartAR() {
    stopAR();
    setTimeout(() => { startAR(); }, 1000);
}

// VARIABLE GLOBAL para el temporizador
let temporizadorGaleria = null;

// EVENTOS DE LA CÁMARA
window.addEventListener('load', function () {
    console.log("🚀 App iniciada");
    const scene = document.querySelector('a-scene');

    if (scene) {
        // 1. CREAMOS LOS CONTENEDORES VACÍOS (¡Cero Chibis en la memoria!)
        for (let i = 0; i <= 48; i++) {
            let datosPais = (typeof selecciones !== 'undefined' && selecciones[i]) ? selecciones[i] : null;
            let nombrePais = datosPais ? datosPais.pais.toUpperCase() : "EQUIPO " + i;
            let colorTexto = datosPais ? datosPais.colorPrincipal : "#FFFFFF";

            let targetHTML = `
            <a-entity mindar-image-target="targetIndex: ${i}">
               <a-text value="${nombrePais} DETECTADO" color="${colorTexto}" position="0 1 0" align="center" scale="1.5 1.5 1.5"></a-text>
               </a-entity>
            `;
            scene.insertAdjacentHTML('beforeend', targetHTML);
        }

        scene.addEventListener('mindar-image-ready', () => {
            console.log("✅ MindAR: Escáner activo.");
            const message = document.getElementById('arMessage');
            if (message && arStarted) {
                message.innerHTML = '✅ Cámara lista - Apunta a un escudo del Mundial';
                message.style.background = 'rgba(0,0,0,0.7)';
            }
        });

        const targets = document.querySelectorAll('[mindar-image-target]');

        targets.forEach((target) => {
            target.addEventListener('targetFound', () => {
                let indexDetectado = target.getAttribute('mindar-image-target').targetIndex;

                // 2. LIMPIAPARABRISAS: Apagamos los Chibis que ya existan para que no se amontonen
                document.querySelectorAll('a-gltf-model').forEach(mod => mod.setAttribute('visible', 'false'));

                // 3. CARGA PEREZOSA: ¿Ya habíamos creado el Chibi de este país?
                let chibi = target.querySelector('a-gltf-model');
                if (!chibi) {
                    // Si no existe, lo creamos por primera y única vez, ahorrando 98% de memoria
                    let chibiHTML = `
                    <a-gltf-model 
                        src="#modelo3D"
                        position="0 0 0" 
                        scale="5 5 5" 
                        animation-mixer="clip: Hi_Clip;"
                        cambiar-ropa="src: modelo3D/texturas/${indexDetectado}.png;">
                    </a-gltf-model>`;
                    target.insertAdjacentHTML('beforeend', chibiHTML);
                    chibi = target.querySelector('a-gltf-model');
                }
                
                // Lo hacemos visible
                chibi.setAttribute('visible', 'true');

                // --- TEXTOS Y GUARDADO DE DATOS ---
                let datosPais = (typeof selecciones !== 'undefined') ? selecciones[indexDetectado] : null;
                let nombrePais = datosPais ? datosPais.pais : "Equipo Desconocido";
                console.log("🎯 ¡BINGO! Escudo detectado:", nombrePais);

                let escudosGuardados = JSON.parse(localStorage.getItem('albumMundial')) || [];
                if (!escudosGuardados.includes(parseInt(indexDetectado))) {
                    escudosGuardados.push(parseInt(indexDetectado));
                    localStorage.setItem('albumMundial', JSON.stringify(escudosGuardados));
                }

                const message = document.getElementById('arMessage');
                if (message) {
                    message.innerHTML = '⚽ ¡' + nombrePais.toUpperCase() + ' DESBLOQUEADO! Guardando...';
                    message.style.background = '#4CAF50';
                    message.style.fontWeight = 'bold';
                }

                // 4. TEMPORIZADOR SEGURO (Evita que la pantalla se trabe)
                if (temporizadorGaleria) clearTimeout(temporizadorGaleria);
                temporizadorGaleria = setTimeout(() => {
                    showScreen('gallery');
                }, 10000);
            });

            target.addEventListener('targetLost', () => {
                console.log("👀 Se perdió de vista la imagen.");
                
                // Si la cámara pierde el escudo, apagamos su Chibi
                let chibi = target.querySelector('a-gltf-model');
                if (chibi) chibi.setAttribute('visible', 'false');

                // Cancelamos el viaje a la galería si quitas la cámara rápido
                if (temporizadorGaleria) clearTimeout(temporizadorGaleria);

                const message = document.getElementById('arMessage');
                if (message) {
                    message.innerHTML = '🔍 Buscando escudo del Mundial...';
                    message.style.background = 'rgba(0,0,0,0.7)';
                    message.style.fontWeight = 'normal';
                }
            });
        });

        scene.addEventListener('mindar-image-error', (e) => {
            console.error("❌ MindAR reportó un error:", e.detail);
        });
    }
});
