(function() {
    // 1. BASE DE DATOS DE VIDEOS, total = 17
    const listaVideos = [
        {
            titulo: "Momentos Históricos",
            url: "videos/Video_1.mp4", 
            poster: "MomentosH.jpg"
        },
        {
            titulo: "Mejores Goles",
            url: "videos/Video_2.mp4", 
            poster: "MejoresGoles.jpg"
        },

        //------------------------------------- de aqui hay 15 videos

         {
            titulo: "Alemania",
            url: "videos/Alemania.mp4", 
            poster: "logos/0.png"
        },

         {
            titulo: "Arabia Saudita",
            url: "videos/Arabia Saudita.mp4", 
            poster: "logos/1.png"
        },

         {
            titulo: "Argelia",
            url: "videos/Argelia.mp4", 
            poster: "logos/2.png"
        },

        
         {
            titulo: "Argentina",
            url: "videos/Argentina.mp4", 
            poster: "logos/3.png"
        },

         {
            titulo: "Australia",
            url: "videos/Australia.mp4", 
            poster: "logos/4.png"
        },

         {
            titulo: "Austria",
            url: "videos/Austria.mp4", 
            poster: "logos/5.png"
        },

         {
            titulo: "Belgica",
            url: "videos/Belgica.mp4", 
            poster: "logos/6.png"
        },

         {
            titulo: "Brasil",
            url: "videos/Brasil.mp4", 
            poster: "logos/7.png"
        },

         {
            titulo: "Cabo Verde",
            url: "videos/Cabo Verde.mp4", 
            poster: "logos/8.png"
        },

         {
            titulo: "Canada",
            url: "videos/Canada.mp4", 
            poster: "logos/9.png"
        },

         {
            titulo: "Colombia",
            url: "videos/Colombia.mp4", 
            poster: "logos/10.png"
        },

         {
            titulo: "Corea del Sur",
            url: "videos/Corea Del Sur.mp4", 
            poster: "logos/11.png"
        },

         {
            titulo: "Costa de Marfil",
            url: "videos/Costa De Marfil.mp4", 
            poster: "logos/12.png"
        },

         {
            titulo: "Curazao",
            url: "videos/Curazao.mp4", 
            poster: "logos/13.png"
        },

         {
            titulo: "Ecuador",
            url: "videos/Ecuador.mp4", 
            poster: "logos/15.png"
        },


        //------------------------------------- hasta aqui hay 15 videos


           {
            titulo: "Egipto",
            url: "../videos/Videos_P2/Egipto.mp4", 
            poster: "logos/16.png"
        },

        {
            titulo: "Escocia",
            url: "../videos/Videos_P2/Escocia.mp4", 
            poster: "logos/17.png"
        },

        
           {
            titulo: "España",
            url: "../videos/Videos_P2/España.mp4", 
            poster: "logos/18.png"
        },

        {
            titulo: "Estados Unidos",
            url: "../videos/Videos_P2/Estados Unidos.mp4", 
            poster: "logos/19.png"
        },

          {
            titulo: "Francia",
            url: "../videos/Videos_P2/Francia.mp4", 
            poster: "logos/20.png"
        },

        {
            titulo: "Ghana",
            url: "../videos/Videos_P2/Ghana.mp4", 
            poster: "logos/21.png"
        },

        
           {
            titulo: "Haiti",
            url: "../videos/Videos_P2/Haiti.mp4", 
            poster: "logos/22.png"
        },

        {
            titulo: "Inglaterra",
            url: "../videos/Videos_P2/Inglaterra.mp4", 
            poster: "logos/23.png"
        },

          {
            titulo: "Iran",
            url: "../videos/Videos_P2/Iran.mp4", 
            poster: "logos/24.png"
        },

        {
            titulo: "Japón",
            url: "../videos/Videos_P2/Japón.mp4", 
            poster: "logos/25.png"
        },

        
           {
            titulo: "Jordania",
            url: "../videos/Videos_P2/Jordania.mp4", 
            poster: "logos/26.png"
        },

        {
            titulo: "México",
            url: "../videos/Videos_P2/México.mp4", 
            poster: "logos/28.png"
        },

         {
            titulo: "Noruega",
            url: "../videos/Videos_P2/Noruega.mp4", 
            poster: "logos/30.png"
        },

          {
            titulo: "Nueva Zelanda",
            url: "../videos/Videos_P2/Nueva Zelanda.mp4", 
            poster: "logos/31.png"
        },

        {
            titulo: "Paises Bajos",
            url: "../videos/Videos_P2/Países Bajos.mp4", 
            poster: "logos/32.png"
        },

        
           {
            titulo: "Panamá",
            url: "../videos/Videos_P2/Panamá.mp4", 
            poster: "logos/33.png"
        },

        {
            titulo: "Paraguay",
            url: "../videos/Videos_P2/Paraguay.mp4", 
            poster: "logos/34.png"
        },

          {
            titulo: "Portugal",
            url: "../videos/Videos_P3/Portugal.mp4", 
            poster: "logos/35.png"
        },

        {
            titulo: "Qatar",
            url: "../videos/Videos_P3/Qatar.mp4", 
            poster: "logos/36.png"
        },

        
           {
            titulo: "Senegal",
            url: "../videos/Videos_P3/Senegal.mp4", 
            poster: "logos/37.png"
        },

        {
            titulo: "Sudáfrica",
            url: "../videos/Videos_P3/Sudáfrica.mp4", 
            poster: "logos/38.png"
        },

           {
            titulo: "Suiza",
            url: "../videos/Videos_P3/Suiza.mp4", 
            poster: "logos/39.png"
        },

        {
            titulo: "Túnez",
            url: "../videos/Videos_P3/Túnez.mp4", 
            poster: "logos/40.png"
        },

           {
            titulo: "Uruguay",
            url: "../videos/Videos_P3/Uruguay.mp4", 
            poster: "logos/41.png"
        },

        {
            titulo: "Uzbekistan",
            url: "../videos/Videos_P3/Uzbekistan.mp4", 
            poster: "logos/42.png"
        },

    ];

    // Variables globales para el reproductor
    let filtroActual = 'ninguno';
    let animationId = null;
    const videoSecreto = document.getElementById('videoSecreto');
    const canvas = document.getElementById('canvasProcesado');
    const ctx = canvas ? canvas.getContext('2d', { willReadFrequently: true }) : null;

    // 2. DIBUJAR LA GALERÍA DE VIDEOS
    function renderGaleria() {
        const contenedor = document.getElementById('videosContenedor');
        if (!contenedor) return;
        
        let html = '';
        listaVideos.forEach((video) => {
            html += `
            <div class="video-card" ondblclick="abrirReproductor('${video.url}', '${video.titulo}')">
                <img class="video-portada" src="${video.poster}" alt="Portada">
                <div class="video-info">
                    <h3 class="video-title">${video.titulo}</h3>
                    <p style="color:#aaa; font-size: 12px; margin-top: 10px;">🖱️ Doble clic para reproducir</p>
                </div>
            </div>`;
        });
        contenedor.innerHTML = html;
    }

    // 3. CONTROL DEL REPRODUCTOR
    window.abrirReproductor = function(url, titulo) {
        document.getElementById('tituloReproductor').innerText = titulo;
        videoSecreto.src = url;
        videoSecreto.play();
        
        document.getElementById('modalReproductor').className = 'modal-activo';
        procesarFrame(); // Iniciamos el ciclo de procesamiento
    };

    window.cerrarReproductor = function() {
        document.getElementById('modalReproductor').className = 'modal-oculto';
        videoSecreto.pause();
        videoSecreto.src = "";
        cancelAnimationFrame(animationId); // Detenemos el procesamiento
    };

    window.cambiarFiltro = function(filtro, boton) {
        filtroActual = filtro;
        // Estilos de botones
        document.querySelectorAll('.controles-filtros .btn-filtro').forEach(btn => btn.classList.remove('activo'));
        boton.classList.add('activo');
    };

    
    // Variables para el Freno de Mano (Limitar FPS)
    let lastTime = 0;
    const FPS_LIMIT = 24; // 24 cuadros por segundo es suficiente para video y salva el procesador
    const delay = 1000 / FPS_LIMIT;

    function procesarFrame(currentTime) {
        // Pedimos el siguiente cuadro de inmediato para mantener el ciclo vivo
        animationId = requestAnimationFrame(procesarFrame);

        if (videoSecreto.paused || videoSecreto.ended) return;

        // 🌟 OPTIMIZACIÓN 1: Frenamos a 24 FPS. Si no ha pasado el tiempo, abortamos el cálculo.
        if (currentTime - lastTime < delay) return;
        lastTime = currentTime;

        // 🌟 OPTIMIZACIÓN 2: DOWNSAMPLING. 
        // Bajamos la resolución matemática del canvas a la mitad (320x180).
        // El navegador lo estirará visualmente, pero procesará 75% menos píxeles.
        canvas.width = 320;
        canvas.height = 180;

        // Dibujamos el video en el lienzo
        ctx.drawImage(videoSecreto, 0, 0, canvas.width, canvas.height);

        // 🌟 OPTIMIZACIÓN 3: Solo calculamos matemáticas si hay un filtro puesto.
        if (filtroActual !== 'ninguno') {
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            if (filtroActual === 'brillo') {
                aplicarBrillo(imageData);
            } else if (filtroActual === 'mosaico') {
                aplicarMosaico(imageData);
            } else if (filtroActual === 'aberracion') {
                aplicarAberracion(imageData);
            }

            ctx.putImageData(imageData, 0, 0);
        }
    }

    function aplicarBrillo(imageData) {
        let pixeles = imageData.data;
        let brillo = 64; // Tu valor original

        for (let i = 0; i < pixeles.length; i += 4) {
            pixeles[i]     = Math.min(255, pixeles[i] + brillo);     // R
            pixeles[i + 1] = Math.min(255, pixeles[i + 1] + brillo); // G
            pixeles[i + 2] = Math.min(255, pixeles[i + 2] + brillo); // B
        }
    }

    function aplicarMosaico(imageData) {
        let pixeles = imageData.data;
        let ancho = imageData.width;
        let alto = imageData.height;
        let mosaico = 10;

        for (let y = 0; y < alto; y += mosaico) {
            for (let x = 0; x < ancho; x += mosaico) {
                let rs = 0, gs = 0, bs = 0, contador = 0;

                // Promedio del bloque
                for (let ym = 0; ym < mosaico && (y + ym) < alto; ym++) {
                    for (let xm = 0; xm < mosaico && (x + xm) < ancho; xm++) {
                        let i = ((y + ym) * ancho + (x + xm)) * 4;
                        rs += pixeles[i]; gs += pixeles[i + 1]; bs += pixeles[i + 2];
                        contador++;
                    }
                }

                let r = rs / contador; let g = gs / contador; let b = bs / contador;

                // Pintar bloque
                for (let ym = 0; ym < mosaico && (y + ym) < alto; ym++) {
                    for (let xm = 0; xm < mosaico && (x + xm) < ancho; xm++) {
                        let i = ((y + ym) * ancho + (x + xm)) * 4;
                        pixeles[i] = r; pixeles[i + 1] = g; pixeles[i + 2] = b;
                    }
                }
            }
        }
    }

    function aplicarAberracion(imageData) {
        let pixeles = imageData.data;
        let ancho = imageData.width;
        let alto = imageData.height;
        let a = 8;

      
        let original = new Uint8ClampedArray(pixeles);

        for (let y = 0; y < alto; y++) {
            for (let x = 0; x < ancho; x++) {
                let iActual = (y * ancho + x) * 4;
                let iRojo = (y * ancho + Math.min(ancho - 1, x + a)) * 4;
                let iAzul = (y * ancho + Math.max(0, x - a)) * 4;

                pixeles[iActual]     = original[iRojo];       // R movido a la derecha
                pixeles[iActual + 1] = original[iActual + 1]; // G se queda igual
                pixeles[iActual + 2] = original[iAzul + 2];   // B movido a la izquierda
            }
        }
    }

    // Ejecutar al iniciar
    renderGaleria();
})();