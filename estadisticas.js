(function() {
    // --- BASE DE DATOS DE MUNDIALES PASADOS ---
    // --- BASE DE DATOS DE MUNDIALES PASADOS (¡Ahora con 12 ediciones!) ---
    const mundialesPasados = [
        { año: 2022, sede: "Qatar", campeon: "Argentina", goles: 172, partidos: 64, promedio: "2.69", goleador: "K. Mbappé (8)" },
        { año: 2018, sede: "Rusia", campeon: "Francia", goles: 169, partidos: 64, promedio: "2.64", goleador: "H. Kane (6)" },
        { año: 2014, sede: "Brasil", campeon: "Alemania", goles: 171, partidos: 64, promedio: "2.67", goleador: "J. Rodríguez (6)" },
        { año: 2010, sede: "Sudáfrica", campeon: "España", goles: 145, partidos: 64, promedio: "2.27", goleador: "D. Forlán / T. Müller (5)" },
        { año: 2006, sede: "Alemania", campeon: "Italia", goles: 147, partidos: 64, promedio: "2.30", goleador: "M. Klose (5)" },
        { año: 2002, sede: "Corea / Japón", campeon: "Brasil", goles: 161, partidos: 64, promedio: "2.52", goleador: "Ronaldo (8)" },
        
        // --- LOS 6 NUEVOS AGREGADOS ---
        { año: 1998, sede: "Francia", campeon: "Francia", goles: 171, partidos: 64, promedio: "2.67", goleador: "D. Šuker (6)" },
        { año: 1994, sede: "Estados Unidos", campeon: "Brasil", goles: 141, partidos: 52, promedio: "2.71", goleador: "H. Stoichkov / O. Salenko (6)" },
        { año: 1990, sede: "Italia", campeon: "Alemania", goles: 115, partidos: 52, promedio: "2.21", goleador: "S. Schillaci (6)" },
        { año: 1986, sede: "México", campeon: "Argentina", goles: 132, partidos: 52, promedio: "2.54", goleador: "G. Lineker (6)" },
        { año: 1982, sede: "España", campeon: "Italia", goles: 146, partidos: 52, promedio: "2.81", goleador: "P. Rossi (6)" },
        { año: 1978, sede: "Argentina", campeon: "Argentina", goles: 102, partidos: 38, promedio: "2.68", goleador: "M. Kempes (6)" }
    ];

    let yaSeRenderizo = false;

    // Función para renderizar las tarjetas
    function renderEstadisticas() {
        const container = document.getElementById('matchesContainer');
        if (!container) return;

        if (yaSeRenderizo === true) return;
       
        let html = '';

        // Recorremos cada mundial y creamos una tarjeta
        mundialesPasados.forEach(mundial => {
            html += `
            <div class="match-card" style="margin-bottom: 15px; padding: 20px; background: linear-gradient(135deg, #16213e, #1a1a2e); border-radius: 12px; border-left: 4px solid #0055A4; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
                    <div style="font-size: 1.4rem; color: white; font-weight: bold;">${mundial.año}</div>
                    <div style="font-size: 1.1rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">📍 ${mundial.sede}</div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 5px;">
                    <div>
                        <div style="font-size: 0.8rem; color: #888;">CAMPEÓN</div>
                        <div style="font-size: 1.1rem; color: #FFD700; font-weight: bold;">🏆 ${mundial.campeon}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: #888;">GOLES TOTALES</div>
                        <div style="font-size: 1.1rem; color: #4CAF50; font-weight: bold;">⚽ ${mundial.goles}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: #888;">PROMEDIO POR PARTIDO</div>
                        <div style="font-size: 1.1rem; color: white; font-weight: bold;">📈 ${mundial.promedio}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: #888;">BOTA DE ORO</div>
                        <div style="font-size: 1.1rem; color: white; font-weight: bold;">👟 ${mundial.goleador}</div>
                    </div>
                </div>

            </div>`;
        });
        
        container.innerHTML = html;

        yaSeRenderizo = true;
    }
   
    // Renderizar al cargar la pantalla
    document.addEventListener('showStats', function() {
        renderEstadisticas();
    });
   
    // Renderizar al iniciar por si acaso
    setTimeout(renderEstadisticas, 500);
})();
