(function() {
    // Función para calcular estadísticas globales
    function calcularEstadisticasGlobales() {
        if (!window.triviaProgreso) return null;
        
        const equipos = Object.keys(window.triviaProgreso);
        let totalRespondidas = 0;
        let totalCorrectas = 0;
        let totalPuntos = 0;
        let equiposCompletados = 0;
        
        // Estadísticas por equipo
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
        
        // Ordenar por puntaje (mayor a menor)
        statsEquipos.sort((a, b) => b.puntajeTotal - a.puntajeTotal);
        
        return {
            statsEquipos,
            totalEquipos: equipos.length,
            equiposCompletados,
            totalRespondidas,
            totalCorrectas,
            totalPuntos
        };
    }
    
    // Función para renderizar estadísticas (AQUÍ ESTÁ LA MAGIA DEL PODIO)
    function renderEstadisticas() {
        const container = document.getElementById('matchesContainer');
        if (!container) return;
        
        const stats = calcularEstadisticasGlobales();
        
        // Si no hay datos, mostramos el mensaje de jugar primero
        if (!stats || stats.statsEquipos.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #aaa; padding: 40px; font-size: 1.2rem;">Aún no hay estadísticas. ¡Juega la trivia primero!</p>';
            return;
        }
        
        // 1. DIBUJAR EL RESUMEN GLOBAL (Arriba)
        let html = `
            <div class="stats-resumen" style="background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 15px; padding: 20px; margin-bottom: 25px; border-left: 5px solid #FFD700; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                <h3 style="color: #FFD700; margin-bottom: 20px; font-size: 1.6rem; text-align: center;">📊 RESUMEN GLOBAL</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 2.2rem; color: #FFD700; font-weight: bold;">${stats.totalPuntos}</div>
                        <div style="color: #aaa; font-size: 0.9rem;">PUNTOS TOTALES</div>
                    </div>
                    <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 2.2rem; color: #4CAF50; font-weight: bold;">${stats.totalCorrectas}</div>
                        <div style="color: #aaa; font-size: 0.9rem;">RESPUESTAS CORRECTAS</div>
                    </div>
                    <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 2.2rem; color: #e63946; font-weight: bold;">${stats.totalRespondidas - stats.totalCorrectas}</div>
                        <div style="color: #aaa; font-size: 0.9rem;">INCORRECTAS</div>
                    </div>
                    <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                        <div style="font-size: 2.2rem; color: #4a6fa5; font-weight: bold;">${stats.equiposCompletados}/${stats.totalEquipos}</div>
                        <div style="color: #aaa; font-size: 0.9rem;">EQUIPOS COMPLETADOS</div>
                    </div>
                </div>
            </div>
        `;
        
        // Título del podio
        html += `<h3 style="color: #FFD700; margin: 30px 0 20px; font-size: 1.8rem; text-align: center; text-shadow: 2px 2px 4px black;">🏆 PODIO DE CAMPEONES 🏆</h3>`;

        // SEPARAR EL TOP 3 DEL RESTO
        const top3 = stats.statsEquipos.slice(0, 3);
        const resto = stats.statsEquipos.slice(3);

        // 2. DIBUJAR EL PODIO VISUAL (Top 3)
        if (top3.length > 0) {
            html += `<div class="podium-container">`;

            // SEGUNDO LUGAR (Izquierda)
            if (top3[1]) {
                html += `
                <div class="podium-item">
                    <div class="podium-avatar" style="border-color: #C0C0C0;">🥈</div>
                    <div class="podium-name">${top3[1].nombre}</div>
                    <div class="podium-score">${top3[1].puntajeTotal} pts</div>
                    <div class="podium-step step-second">2</div>
                </div>`;
            }

            // PRIMER LUGAR (Centro, más grande)
            html += `
            <div class="podium-item first-place">
                <div class="podium-avatar" style="border-color: #FFD700; transform: scale(1.2);">🥇</div>
                <div class="podium-name" style="color: #FFD700; font-size: 1.1rem;">${top3[0].nombre}</div>
                <div class="podium-score">${top3[0].puntajeTotal} pts</div>
                <div class="podium-step step-first">1</div>
            </div>`;

            // TERCER LUGAR (Derecha)
            if (top3[2]) {
                html += `
                <div class="podium-item">
                    <div class="podium-avatar" style="border-color: #CD7F32;">🥉</div>
                    <div class="podium-name">${top3[2].nombre}</div>
                    <div class="podium-score">${top3[2].puntajeTotal} pts</div>
                    <div class="podium-step step-third">3</div>
                </div>`;
            }
            html += `</div>`;
        }

        // 3. DIBUJAR LA LISTA DEL RESTO (Del 4to en adelante)
        if (resto.length > 0) {
            html += `<h3 style="color: #aaa; margin: 40px 0 15px; font-size: 1.3rem; text-align: center; border-top: 1px solid #333; padding-top: 20px;">RESTO DE LA TABLA</h3>`;
            html += `<div class="matches-grid">`;
            
            resto.forEach((equipo, index) => {
                let realRank = index + 4; // Ajustamos el número de rank
                
                html += `
                <div class="match-card" style="margin-bottom: 10px; padding: 15px; background: linear-gradient(135deg, #16213e, #1a1a2e); display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 1.5rem; color: #666; font-weight: bold; min-width: 40px; text-align: center;">#${realRank}</div>
                    
                    <div style="flex: 1;">
                        <div style="font-size: 1.2rem; color: white; font-weight: bold;">${equipo.nombre}</div>
                        <div class="stat-bar-bg" style="background: #0f3460; height: 6px; border-radius: 3px; display: flex; overflow: hidden; margin-top: 5px;">
                            <div style="width: ${equipo.porcentaje}%; background: #4CAF50; height: 100%;"></div>
                        </div>
                    </div>
                    
                    <div style="text-align: right;">
                        <div style="font-size: 1.4rem; color: #FFD700; font-weight: bold;">${equipo.puntajeTotal} pts</div>
                        <div style="font-size: 0.8rem; color: #aaa;">${equipo.porcentaje}% aciertos</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }
        
        container.innerHTML = html;
    }
    
    // Exponer función para actualizar desde trivia.js y desde funcionalidad.js
    window.actualizarEstadisticasTrivia = renderEstadisticas;
    
    // Escuchar cambios en la pantalla activa
    document.addEventListener('showStats', function() {
        renderEstadisticas();
    });
    
    // Renderizar al cargar
    setTimeout(renderEstadisticas, 500);
})();