
(function () {
    // --- 1. BASE DE DATOS DE TRIVIA ---
    const triviaData = {
        "Estados Unidos": {
            questions: [
                { text: "¿En qué año fue sede por primera vez del Mundial?", options: ["1986", "1994", "2002"], correct: 1 },
                { text: "¿Cuál es su mejor resultado en un Mundial moderno (desde 1990)?", options: ["Semifinal", "Cuartos de final", "Final"], correct: 1 },
                { text: "¿Cómo se le conoce comúnmente a la selección de EE.UU.?", options: ["The Stars", "The Yanks", "USMNT"], correct: 2 },
                { text: "¿Qué jugador es uno de los máximos goleadores históricos de EE.UU.?", options: ["Clint Dempsey", "Landon Donovan", "Christian Pulisic"], correct: 0 },
                { text: "¿En qué confederación compite Estados Unidos?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }
            ]
        },
        "México": {
            questions: [
                { text: "¿Cuántas veces ha sido sede del Mundial?", options: ["1", "2", "3"], correct: 2 },
                { text: "¿Cuál es el apodo de la selección mexicana?", options: ["Los Aztecas", "El Tri", "Los Verdes"], correct: 1 },
                { text: "¿Cuál fue su mejor resultado histórico en un Mundial?", options: ["Campeón", "Cuartos de final", "Finalista"], correct: 1 },
                { text: "¿Quién es el máximo goleador histórico de México en Mundiales?", options: ["Hugo Sánchez", "Rafael Márquez", "Javier 'Chicharito' Hernández"], correct: 2 },
                { text: "¿En qué año fue campeón olímpico México en fútbol?", options: ["2008", "2012", "2016"], correct: 1 }
            ]
        },
        "Canadá": {
            questions: [
                { text: "¿En qué año participó por primera vez en un Mundial?", options: ["1986", "1994", "2002"], correct: 0 },
                { text: "¿Cuál es su apodo tradicional?", options: ["The Reds", "Les Rouges", "The Maple Squad"], correct: 1 },
                { text: "¿Quién es una de sus máximas figuras actuales?", options: ["Alphonso Davies", "Jonathan David", "Cyle Larin"], correct: 0 },
                { text: "¿Cuántos goles anotó Canadá en su primera participación mundialista (1986)?", options: ["1", "2", "0"], correct: 2 },
                { text: "¿Qué país comparte sede con Canadá en 2026?", options: ["Brasil", "México y Estados Unidos", "Argentina"], correct: 1 }
            ]
        },
        "Curazao": {
            questions: [
                { text: "¿A qué confederación pertenece Curazao?", options: ["UEFA", "CONCACAF", "AFC"], correct: 1 },
                { text: "¿En qué región se ubica Curazao?", options: ["Caribe", "Europa", "Asia"], correct: 0 },
                { text: "¿Qué selección reemplazó oficialmente Curazao tras la disolución de las Antillas Neerlandesas?", options: ["Aruba", "Surinam", "Antillas Neerlandesas"], correct: 2 },
                { text: "¿De qué país europeo depende políticamente Curazao?", options: ["Francia", "Países Bajos", "España"], correct: 1 },
                { text: "¿Cuál sería un logro histórico para Curazao en 2026?", options: ["Ser campeón", "Clasificar por primera vez al Mundial", "Ganar la Copa América"], correct: 1 }
            ]
        },
        "Haití": {
            questions: [
                { text: "¿En qué año jugó Haití su único Mundial antes de 2026?", options: ["1974", "1982", "1990"], correct: 0 },
                { text: "¿En qué continente se ubica Haití?", options: ["África", "Asia", "América (Caribe)"], correct: 2 },
                { text: "¿A qué confederación pertenece?", options: ["CONCACAF", "CONMEBOL", "CAF"], correct: 0 },
                { text: "¿Cuál es el color predominante en su uniforme?", options: ["Verde", "Azul y rojo", "Amarillo"], correct: 1 },
                { text: "¿Contra qué selección anotó Haití su histórico gol en 1974?", options: ["Italia", "Alemania", "Brasil"], correct: 0 }
            ]
        },
        "Panamá": {
            questions: [
                { text: "¿En qué año debutó Panamá en un Mundial?", options: ["2014", "2018", "2022"], correct: 1 },
                { text: "¿Cuál es su apodo futbolístico?", options: ["Los Canaleros", "Los Rojos", "La Roja"], correct: 0 },
                { text: "¿Quién anotó el primer gol de Panamá en un Mundial?", options: ["Blas Pérez", "Román Torres", "Felipe Baloy"], correct: 2 },
                { text: "¿En qué confederación juega Panamá?", options: ["CONMEBOL", "CONCACAF", "UEFA"], correct: 1 },
                { text: "¿Contra qué selección jugó su primer partido mundialista?", options: ["Bélgica", "Inglaterra", "Japón"], correct: 0 }
            ]
        },
        "Argentina": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado Argentina?", options: ["2", "3", "4"], correct: 1 },
                { text: "¿Quién fue el capitán en el Mundial 2022?", options: ["Lionel Messi", "Di María", "Julián Álvarez"], correct: 0 },
                { text: "¿Cuál es el apodo de la selección argentina?", options: ["La Albiceleste", "La Celeste", "Los Gauchos"], correct: 0 },
                { text: "¿En qué año ganó su primer Mundial?", options: ["1978", "1986", "1994"], correct: 0 },
                { text: "¿Qué jugador es leyenda por el Mundial 1986?", options: ["Maradona", "Batistuta", "Riquelme"], correct: 0 }
            ]
        },
        "Brasil": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado Brasil?", options: ["3", "4", "5"], correct: 2 },
                { text: "¿Cuál es el apodo de Brasil?", options: ["La Canarinha", "La Verde", "Los Pentas"], correct: 0 },
                { text: "¿Qué jugador es considerado uno de los mejores de su historia?", options: ["Pelé", "Kaká", "Ronaldinho"], correct: 0 },
                { text: "¿De qué continente es Brasil?", options: ["Europa", "Sudamérica", "Asia"], correct: 1 },
                { text: "¿En qué año ganó su último Mundial?", options: ["1994", "2002", "2010"], correct: 1 }
            ]
        },
        "Colombia": {
            questions: [
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Azul", "Amarillo", "Verde"], correct: 1 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Cuartos de final", "Semifinal", "Final"], correct: 0 },
                { text: "¿Qué jugador brilló en el Mundial 2014?", options: ["Radamel Falcao", "James Rodríguez", "Cuadrado"], correct: 1 },
                { text: "¿En qué continente juega Colombia?", options: ["Sudamérica", "Centroamérica", "Europa"], correct: 0 },
                { text: "¿Cómo se le conoce a la selección colombiana?", options: ["Los Cafeteros", "La Roja", "Los Tricolores"], correct: 0 }
            ]
        },
        "Ecuador": {
            questions: [
                { text: "¿En qué continente se encuentra Ecuador?", options: ["Asia", "Sudamérica", "Europa"], correct: 1 },
                { text: "¿Cuál es el color principal de su camiseta?", options: ["Amarillo", "Azul", "Rojo"], correct: 0 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Octavos de final", "Semifinal", "Final"], correct: 0 },
                { text: "¿Qué jugador fue figura en 2022?", options: ["Enner Valencia", "Antonio Valencia", "Moisés Caicedo"], correct: 0 },
                { text: "¿A qué confederación pertenece Ecuador?", options: ["CONCACAF", "UEFA", "CONMEBOL"], correct: 2 }
            ]
        },
        "Paraguay": {
            questions: [
                { text: "¿En qué continente juega Paraguay?", options: ["Sudamérica", "Europa", "África"], correct: 0 },
                { text: "¿Cuál es su apodo tradicional?", options: ["La Roja", "La Albirroja", "Los Guaraníes"], correct: 1 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Cuartos de final", "Final", "Campeón"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo y blanco", "Azul", "Verde"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CONMEBOL", "CONCACAF", "UEFA"], correct: 0 }
            ]
        },
        "Uruguay": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado Uruguay?", options: ["1", "2", "3"], correct: 1 },
                { text: "¿En qué año ganó su primer Mundial?", options: ["1930", "1950", "1962"], correct: 0 },
                { text: "¿Cómo se le conoce a la selección uruguaya?", options: ["La Celeste", "La Albiceleste", "Los Charrúas"], correct: 0 },
                { text: "¿En qué continente juega Uruguay?", options: ["Sudamérica", "Europa", "Asia"], correct: 0 },
                { text: "¿Qué jugador fue figura reciente de Uruguay?", options: ["Luis Suárez", "Diego Forlán", "Edinson Cavani"], correct: 0 }
            ]
        },
        "Austria": {
            questions: [
                { text: "¿En qué continente se encuentra Austria?", options: ["Asia", "Europa", "América"], correct: 1 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CONMEBOL", "CONCACAF"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Azul", "Verde"], correct: 0 },
                { text: "¿Cuál ha sido su mejor resultado histórico en un Mundial?", options: ["Campeón", "Tercer lugar", "Finalista"], correct: 1 },
                { text: "¿Qué país es vecino de Austria?", options: ["Brasil", "Alemania", "Japón"], correct: 1 }
            ]
        },
        "Bélgica": {
            questions: [
                { text: "¿Cuál es su apodo?", options: ["Los Diablos Rojos", "La Roja", "Los Leones"], correct: 0 },
                { text: "¿En qué continente juega?", options: ["Europa", "África", "América"], correct: 0 },
                { text: "¿Cuál fue su mejor resultado en un Mundial?", options: ["Tercer lugar", "Campeón", "Final"], correct: 0 },
                { text: "¿Qué jugador fue figura en 2018?", options: ["Eden Hazard", "Lukaku", "De Bruyne"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "AFC", "CONMEBOL"], correct: 0 }
            ]
        },
        "Croacia": {
            questions: [
                { text: "¿En qué año fue subcampeón del Mundo?", options: ["2014", "2018", "2022"], correct: 1 },
                { text: "¿Qué jugador fue su gran figura en 2018?", options: ["Luka Modrić", "Ivan Rakitić", "Mario Mandžukić"], correct: 0 },
                { text: "¿En qué continente se ubica?", options: ["Europa", "Asia", "África"], correct: 0 },
                { text: "¿Cuál es el diseño característico de su camiseta?", options: ["Rayas azules", "Cuadros rojos y blancos", "Verde sólido"], correct: 1 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CONCACAF", "CAF"], correct: 0 }
            ]
        },
        "Inglaterra": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado Inglaterra?", options: ["1", "2", "3"], correct: 0 },
                { text: "¿En qué año ganó su único Mundial?", options: ["1966", "1970", "1982"], correct: 0 },
                { text: "¿Cuál es el símbolo tradicional del equipo?", options: ["Un toro", "Tres leones", "Un águila"], correct: 1 },
                { text: "¿En qué continente juega?", options: ["Europa", "América", "Asia"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "AFC", "CONMEBOL"], correct: 0 }
            ]
        },
        "Francia": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado Francia?", options: ["1", "2", "3"], correct: 1 },
                { text: "¿En qué año ganó su primer Mundial?", options: ["1998", "2006", "2010"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Azul", "Rojo", "Verde"], correct: 0 },
                { text: "¿Qué jugador fue figura en 2018?", options: ["Kylian Mbappé", "Karim Benzema", "Antoine Griezmann"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CAF", "CONCACAF"], correct: 0 }
            ]
        },
        "Alemania": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado Alemania?", options: ["3", "4", "5"], correct: 1 },
                { text: "¿En qué año ganó su último Mundial?", options: ["2006", "2010", "2014"], correct: 2 },
                { text: "¿En qué continente juega?", options: ["Europa", "Asia", "América"], correct: 0 },
                { text: "¿Cuál es su apodo tradicional?", options: ["Die Mannschaft", "La Roja", "Los Teutones"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CONMEBOL", "CAF"], correct: 0 }
            ]
        },
        "Países Bajos (Holanda)": {
            questions: [
                { text: "¿En qué continente juega?", options: ["Europa", "Asia", "América"], correct: 0 },
                { text: "¿Cuál es el color tradicional de su uniforme?", options: ["Azul", "Naranja", "Rojo"], correct: 1 },
                { text: "¿Cuántas finales de Mundial ha disputado?", options: ["1", "2", "3"], correct: 2 },
                { text: "¿Cuál es su apodo?", options: ["La Naranja Mecánica", "Los Leones", "La Roja"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "AFC", "CONCACAF"], correct: 0 }
            ]
        },
        "Noruega": {
            questions: [
                { text: "¿En qué continente se encuentra?", options: ["Europa", "Asia", "América"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Verde", "Amarillo"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CAF", "CONMEBOL"], correct: 0 },
                { text: "¿Cuál es una de sus estrellas actuales?", options: ["Erling Haaland", "Martin Ødegaard", "Alexander Sørloth"], correct: 0 },
                { text: "¿Noruega ha sido campeona del mundo?", options: ["Sí", "No", "Dos veces"], correct: 1 }
            ]
        },
        "Portugal": {
            questions: [
                { text: "¿Quién es su máximo referente histórico reciente?", options: ["Cristiano Ronaldo", "Luís Figo", "Deco"], correct: 0 },
                { text: "¿En qué continente juega?", options: ["Europa", "Asia", "América"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Verde", "Rojo", "Azul"], correct: 1 },
                { text: "¿Cuál fue su mejor resultado en un Mundial?", options: ["Campeón", "Tercer lugar", "Finalista"], correct: 1 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CONMEBOL", "CAF"], correct: 0 }
            ]
        },
        "España": {
            questions: [
                { text: "¿Cuántos Mundiales ha ganado España?", options: ["1", "2", "3"], correct: 0 },
                { text: "¿En qué año fue campeón?", options: ["2006", "2010", "2014"], correct: 1 },
                { text: "¿Cuál es su apodo?", options: ["La Roja", "La Furia Azul", "Los Toros"], correct: 0 },
                { text: "¿En qué continente juega?", options: ["Europa", "América", "Asia"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "AFC", "CONCACAF"], correct: 0 }
            ]
        },
        "Suiza": {
            questions: [
                { text: "¿En qué continente se encuentra?", options: ["Europa", "Asia", "América"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Azul", "Verde"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CAF", "CONMEBOL"], correct: 0 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Campeón", "Cuartos de final", "Final"], correct: 1 },
                { text: "¿Cuál es el símbolo en su bandera?", options: ["Una estrella", "Una cruz blanca", "Un león"], correct: 1 }
            ]
        },
        "Escocia": {
            questions: [
                { text: "¿En qué continente juega?", options: ["Europa", "Asia", "América"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["UEFA", "CONCACAF", "CAF"], correct: 0 },
                { text: "¿Cuál es el color tradicional de su uniforme?", options: ["Azul oscuro", "Rojo", "Verde"], correct: 0 },
                { text: "¿Escocia ha ganado un Mundial?", options: ["Sí", "No", "Dos veces"], correct: 1 },
                { text: "¿Forma parte del Reino Unido?", options: ["Sí", "No", "Es independiente totalmente"], correct: 0 }
            ]
        },
        "Australia": {
            questions: [
                { text: "¿En qué confederación compite actualmente Australia?", options: ["CONMEBOL", "AFC", "UEFA"], correct: 1 },
                { text: "¿En qué continente se encuentra Australia?", options: ["Europa", "Asia", "Oceanía"], correct: 2 },
                { text: "¿Cuál es el apodo de la selección australiana?", options: ["Socceroos", "Kangaroos", "Wallabies"], correct: 0 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Octavos de final", "Semifinal", "Final"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Verde y amarillo", "Azul", "Rojo"], correct: 0 }
            ]
        },
        "Irán": {
            questions: [
                { text: "¿En qué continente se encuentra Irán?", options: ["Asia", "Europa", "África"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "UEFA", "CAF"], correct: 0 },
                { text: "¿Cuál es el apodo de la selección iraní?", options: ["Los Tigres", "Team Melli", "Los Guerreros"], correct: 1 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Blanco", "Azul"], correct: 1 },
                { text: "¿Irán ha llegado a cuartos de final en un Mundial?", options: ["Sí", "No", "Dos veces"], correct: 1 }
            ]
        },
        "Japón": {
            questions: [
                { text: "¿En qué continente juega Japón?", options: ["Asia", "Europa", "América"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "UEFA", "CONMEBOL"], correct: 0 },
                { text: "¿Cuál es el color tradicional de su uniforme?", options: ["Azul", "Rojo", "Verde"], correct: 0 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Cuartos de final", "Octavos de final", "Semifinal"], correct: 1 },
                { text: "¿Japón organizó el Mundial en qué año?", options: ["1998", "2002", "2010"], correct: 1 }
            ]
        },
        "Jordania": {
            questions: [
                { text: "¿En qué continente se encuentra Jordania?", options: ["Asia", "Europa", "África"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "CAF", "UEFA"], correct: 0 },
                { text: "¿Cuál sería un logro histórico para Jordania en 2026?", options: ["Ser campeón", "Clasificar por primera vez al Mundial", "Ganar la Eurocopa"], correct: 1 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Blanco y rojo", "Verde", "Azul"], correct: 0 },
                { text: "¿Jordania pertenece a qué región del mundo?", options: ["Medio Oriente", "Sudamérica", "Europa Occidental"], correct: 0 }
            ]
        },
        "Corea del Sur": {
            questions: [
                { text: "¿En qué continente juega Corea del Sur?", options: ["Asia", "Europa", "África"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "UEFA", "CONCACAF"], correct: 0 },
                { text: "¿Cuál fue su mejor resultado en un Mundial?", options: ["Semifinal (4° lugar)", "Campeón", "Final"], correct: 0 },
                { text: "¿En qué año fue sede del Mundial junto a Japón?", options: ["1998", "2002", "2010"], correct: 1 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Azul", "Amarillo"], correct: 0 }
            ]
        },
        "Qatar": {
            questions: [
                { text: "¿En qué año fue sede del Mundial?", options: ["2018", "2022", "2026"], correct: 1 },
                { text: "¿En qué continente se encuentra?", options: ["Asia", "África", "Europa"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "CAF", "UEFA"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Granate", "Verde", "Azul"], correct: 0 },
                { text: "¿Qatar ha ganado la Copa Asiática?", options: ["Sí", "No", "Nunca ha participado"], correct: 0 }
            ]
        },
        "Arabia Saudita": {
            questions: [
                { text: "¿En qué continente juega Arabia Saudita?", options: ["Asia", "Europa", "África"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "UEFA", "CAF"], correct: 0 },
                { text: "¿A qué selección venció en el Mundial 2022?", options: ["Brasil", "Argentina", "Francia"], correct: 1 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Verde", "Rojo", "Azul"], correct: 0 },
                { text: "¿Arabia Saudita ha llegado a cuartos de final?", options: ["Sí", "No", "Dos veces"], correct: 1 }
            ]
        },
        "Uzbekistán": {
            questions: [
                { text: "¿En qué continente se encuentra Uzbekistán?", options: ["Asia", "Europa", "África"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["AFC", "UEFA", "CAF"], correct: 0 },
                { text: "¿Cuál sería un logro histórico en 2026?", options: ["Ser campeón", "Clasificar por primera vez al Mundial", "Ganar la Eurocopa"], correct: 1 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Azul", "Rojo", "Verde"], correct: 0 },
                { text: "¿En qué región de Asia se ubica?", options: ["Asia Central", "Medio Oriente", "Sudeste Asiático"], correct: 0 }
            ]
        },
        "Argelia": {
            questions: [
                { text: "¿En qué continente se encuentra Argelia?", options: ["África", "Asia", "Europa"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Verde", "Azul", "Rojo"], correct: 0 },
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Cuartos de final", "Octavos de final", "Semifinal"], correct: 1 },
                { text: "¿En qué año llegó por primera vez a octavos de final?", options: ["2014", "2006", "1998"], correct: 0 }
            ]
        },
        "Cabo Verde": {
            questions: [
                { text: "¿En qué continente se encuentra Cabo Verde?", options: ["África", "Asia", "América"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Clasificar al Mundial 2026 sería qué logro?", options: ["Su tercera participación", "Su primera participación histórica", "Ser campeón"], correct: 1 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Azul", "Verde", "Rojo"], correct: 0 },
                { text: "¿Cabo Verde es un país?", options: ["Europeo", "Isla en el Atlántico", "Sudamericano"], correct: 1 }
            ]
        },
        "Egipto": {
            questions: [
                { text: "¿En qué continente juega Egipto?", options: ["África", "Asia", "Europa"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Qué jugador es su máxima estrella reciente?", options: ["Mohamed Salah", "Sadio Mané", "Achraf Hakimi"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Azul", "Verde"], correct: 0 },
                { text: "¿Egipto ha ganado la Copa Africana de Naciones?", options: ["Sí", "No", "Nunca ha participado"], correct: 0 }
            ]
        },
        "Ghana": {
            questions: [
                { text: "¿En qué continente se encuentra Ghana?", options: ["África", "Europa", "Asia"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál fue su mejor resultado en un Mundial?", options: ["Cuartos de final", "Semifinal", "Final"], correct: 0 },
                { text: "¿En qué año llegó a cuartos de final?", options: ["2010", "2002", "2018"], correct: 0 },
                { text: "¿Cuál es el apodo de la selección de Ghana?", options: ["Las Águilas", "Las Estrellas Negras", "Los Leones"], correct: 1 }
            ]
        },
        "Costa de Marfil": {
            questions: [
                { text: "¿En qué continente juega Costa de Marfil?", options: ["África", "Asia", "América"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Naranja", "Verde", "Azul"], correct: 0 },
                { text: "¿Qué jugador fue una de sus grandes figuras históricas?", options: ["Didier Drogba", "Samuel Eto'o", "Mohamed Salah"], correct: 0 },
                { text: "¿Costa de Marfil ha ganado la Copa Africana?", options: ["Sí", "No", "Nunca ha participado"], correct: 0 }
            ]
        },
        "Marruecos": {
            questions: [
                { text: "¿En qué continente se encuentra Marruecos?", options: ["África", "Asia", "Europa"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál fue su histórico logro en el Mundial 2022?", options: ["Semifinal", "Campeón", "Finalista"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Azul", "Verde"], correct: 0 },
                { text: "¿Marruecos fue el primer país africano en llegar a semifinales?", options: ["Sí", "No", "Fue el segundo"], correct: 0 }
            ]
        },
        "Senegal": {
            questions: [
                { text: "¿En qué continente juega Senegal?", options: ["África", "Asia", "Europa"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál fue su mejor resultado en un Mundial?", options: ["Cuartos de final", "Semifinal", "Final"], correct: 0 },
                { text: "¿En qué año logró ese resultado?", options: ["2002", "2010", "2018"], correct: 0 },
                { text: "¿Qué jugador ha sido su figura reciente?", options: ["Sadio Mané", "Mohamed Salah", "Achraf Hakimi"], correct: 0 }
            ]
        },
        "Sudáfrica": {
            questions: [
                { text: "¿En qué continente se encuentra Sudáfrica?", options: ["África", "Asia", "Europa"], correct: 0 },
                { text: "¿En qué año fue sede del Mundial?", options: ["2006", "2010", "2014"], correct: 1 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Amarillo", "Rojo", "Azul"], correct: 0 },
                { text: "¿Sudáfrica ha pasado de fase de grupos en un Mundial?", options: ["Sí", "No", "Dos veces"], correct: 1 }
            ]
        },
        "Túnez": {
            questions: [
                { text: "¿En qué continente juega Túnez?", options: ["África", "Asia", "Europa"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["CAF", "AFC", "UEFA"], correct: 0 },
                { text: "¿Cuál es el color principal de su uniforme?", options: ["Rojo", "Verde", "Azul"], correct: 0 },
                { text: "¿Túnez ha ganado un Mundial?", options: ["Sí", "No", "Dos veces"], correct: 1 },
                { text: "¿Túnez ha participado varias veces en Mundiales?", options: ["Sí", "No", "Solo una vez"], correct: 0 }
            ]
        },
        "Nueva Zelanda": {
            questions: [
                { text: "¿En qué continente se encuentra Nueva Zelanda?", options: ["Oceanía", "Europa", "Asia"], correct: 0 },
                { text: "¿A qué confederación pertenece?", options: ["OFC", "AFC", "CONCACAF"], correct: 0 },
                { text: "¿Cuál es el apodo de su selección?", options: ["All Whites", "All Blacks", "Kiwis"], correct: 0 },
                { text: "¿En qué año fue su última participación en un Mundial antes de 2026?", options: ["2006", "2010", "2014"], correct: 1 },
                { text: "¿Nueva Zelanda perdió algún partido en el Mundial 2010?", options: ["Sí", "No", "Perdió todos"], correct: 1 }
            ]
        },
        "Italia": { 
            questions: [
                { text: "¿Cuántas Copas del Mundo ha ganado Italia?", options: ["2", "3", "4"], correct: 2 }, // [cite: 11, 12, 13, 14]
                { text: "¿Cuál es el apodo de la selección italiana?", options: ["Gli Azzurri", "La Roja", "La Canarinha"], correct: 0 }, // [cite: 15, 16, 17, 18]
                { text: "¿En qué año ganó su último Mundial?", options: ["2006", "2010", "2014"], correct: 0 }, // [cite: 19, 20, 21, 22]
                { text: "¿Quién es uno de sus jugadores históricos más famosos?", options: ["Pelé", "Diego Maradona", "Francesco Totti"], correct: 2 }, // [cite: 23, 24, 25, 26]
                { text: "¿De qué color es tradicionalmente su uniforme?", options: ["Verde", "Azul", "Rojo"], correct: 1 } // [cite: 27, 28, 29, 30]
            ]
        },
        "Suecia": { 
            questions: [
                { text: "¿Cuál ha sido el mejor resultado de Suecia en un Mundial?", options: ["Campeón", "Subcampeón", "Tercer lugar"], correct: 1 }, // [cite: 32, 33, 34, 35]
                { text: "¿En qué año logró ese resultado?", options: ["1958", "1970", "1994"], correct: 0 }, // [cite: 36, 37, 38, 39]
                { text: "¿Qué jugador famoso es de Suecia?", options: ["Zlatan Ibrahimović", "Neymar", "Mbappé"], correct: 0 }, // [cite: 40, 41, 42, 43]
                { text: "¿De qué color es su uniforme principal?", options: ["Azul y amarillo", "Rojo y blanco", "Verde"], correct: 0 }, // [cite: 44, 45, 46, 47]
                { text: "¿En qué continente se encuentra Suecia?", options: ["Asia", "Europa", "América"], correct: 1 } // [cite: 48, 49, 50, 51]
            ]
        },
        "Polonia": { 
            questions: [
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Campeón", "Tercer lugar", "Subcampeón"], correct: 1 }, // [cite: 53, 54, 55, 56]
                { text: "¿En qué años logró ese resultado?", options: ["1982 y 1974", "1990 y 1994", "2002 y 2006"], correct: 0 }, // [cite: 57, 58, 59, 60]
                { text: "¿Quién es su jugador actual más famoso?", options: ["Robert Lewandowski", "Luka Modrić", "Benzema"], correct: 0 }, // [cite: 61, 62, 63, 64]
                { text: "¿Qué colores tiene su bandera?", options: ["Azul y rojo", "Blanco y rojo", "Verde y blanco"], correct: 1 }, // [cite: 65, 66, 67, 68]
                { text: "¿En qué continente juega Polonia?", options: ["Europa", "África", "Asia"], correct: 0 } // [cite: 69, 70, 71, 72]
            ]
        },
        "Ucrania": { 
            questions: [
                { text: "¿En qué año debutó Ucrania en un Mundial?", options: ["2006", "1998", "2010"], correct: 0 }, // [cite: 74, 75, 76, 77]
                { text: "¿Cuál fue su mejor resultado?", options: ["Campeón", "Cuartos de final", "Finalista"], correct: 1 }, // [cite: 78, 79, 80, 81]
                { text: "¿Quién es su jugador más histórico?", options: ["Andriy Shevchenko", "Cristiano Ronaldo", "Messi"], correct: 0 }, // [cite: 82, 83, 84, 85]
                { text: "¿Qué colores tiene su bandera?", options: ["Azul y amarillo", "Rojo y blanco", "Verde y negro"], correct: 0 }, // [cite: 86, 87, 88, 89]
                { text: "¿En qué continente se ubica Ucrania?", options: ["Europa", "Asia", "África"], correct: 0 } // [cite: 90, 91, 92, 93]
            ]
        },
        "Chile": {
            questions: [
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Campeón", "Tercer lugar", "Subcampeón"], correct: 1 }, // [cite: 95, 96, 97, 98]
                { text: "¿En qué año logró ese resultado?", options: ["1962", "1998", "2014"], correct: 0 }, // [cite: 99, 100, 101, 102]
                { text: "¿Qué apodo tiene la selección chilena?", options: ["La Roja", "Los Andes", "Los Cóndores"], correct: 0 }, // [cite: 103, 104, 105, 106]
                { text: "¿Quién es uno de sus jugadores más conocidos?", options: ["Alexis Sánchez", "Neymar", "Suárez"], correct: 0 }, // [cite: 107, 108, 109, 110]
                { text: "¿En qué continente está Chile?", options: ["Europa", "América del Sur", "África"], correct: 1 } // [cite: 111, 112, 113, 114]
            ]
        },
        "Costa Rica": {
            questions: [
                { text: "¿Cuál ha sido su mejor resultado en un Mundial?", options: ["Semifinal", "Cuartos de final", "Campeón"], correct: 1 }, // [cite: 116, 117, 118, 119]
                { text: "¿En qué año logró ese resultado?", options: ["2014", "2006", "2018"], correct: 0 }, // [cite: 120, 121, 122, 123]
                { text: "¿Cuál es su apodo?", options: ["Los Ticos", "Los Verdes", "Los Pumas"], correct: 0 }, // [cite: 124, 125, 126, 127]
                { text: "¿Quién es uno de sus jugadores más famosos?", options: ["Keylor Navas", "Ochoa", "Cavani"], correct: 0 }, // [cite: 128, 129, 130, 131]
                { text: "¿En qué confederación juega Costa Rica?", options: ["UEFA", "CONMEBOL", "CONCACAF"], correct: 2 } // [cite: 132, 133, 134, 135]
            ]
        }
    };

    // --- 2. Obtener referencias a elementos del DOM ---
    const teamSelect = document.getElementById('teamSelect');
    const triviaContent = document.getElementById('triviaContent');

    // Le pasamos los datos a la ventana global para que estadisticas.js pueda leerlos
    if (typeof triviaData !== 'undefined') {
        window.triviaData = triviaData;
    }

    // --- 7. SISTEMA DE ESTADÍSTICAS DE TRIVIA ---
    window.triviaProgreso = {};

    function inicializarProgreso() {
        if (typeof triviaData === 'undefined') return;
        Object.keys(triviaData).forEach(team => {
            if (!window.triviaProgreso[team]) {
                window.triviaProgreso[team] = {
                    respondidas: 0,
                    correctas: 0,
                    incorrectas: 0,
                    puntajeTotal: 0,
                    preguntas: triviaData[team].questions.map((q, index) => ({
                        index: index,
                        respondida: false,
                        correcta: null,
                        respuestaSeleccionada: null
                    }))
                };
            }
        });
    }

    // --- 3. Poblar el select con los nombres de los equipos ---
    function populateTeamSelect() {
        if (typeof triviaData === 'undefined') return;
        const teamNames = Object.keys(triviaData).sort(); // Orden alfabético
        teamSelect.innerHTML = '<option value="">-- Selecciona un país --</option>'; // Reset

        teamNames.forEach(team => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            teamSelect.appendChild(option);
        });
    }

    // --- 4. Función para renderizar las preguntas de un equipo ---
    function renderTrivia(teamName) {
        const team = triviaData[teamName];
        if (!team) {
            triviaContent.innerHTML = '<p style="text-align: center; color: #aaa; padding: 20px;">Equipo no encontrado.</p>';
            return;
        }

        let html = `
                <div class="team-header">
                    <h3>⚽ ${teamName}</h3>
                </div>
                <div id="questionsContainer">
            `;

        team.questions.forEach((q, index) => {
            html += `
                    <div class="question-card" id="q-${index}">
                        <div class="question-text">${index + 1}. ${q.text}</div>
                        <div class="options" data-qindex="${index}">
                `;
            q.options.forEach((opt, optIndex) => {
                html += `
                        <div class="option-item">
                            <input type="radio" name="q${index}" id="q${index}opt${optIndex}" value="${optIndex}">
                            <label class="option-label" for="q${index}opt${optIndex}">${String.fromCharCode(65 + optIndex)}. ${opt}</label>
                        </div>
                    `;
            });
            html += `
                        </div>
                        <div class="feedback" id="fb-${index}"></div>
                    </div>
                `;
        });

        html += `
                </div>
                <button class="reset-button" onclick="resetTeamQuestions('${teamName}')">🔄 Reiniciar Preguntas</button>
            `;

        triviaContent.innerHTML = html;

        // --- 5. Añadir event listeners a los radio buttons ---
        team.questions.forEach((q, index) => {
            const radioButtons = document.querySelectorAll(`input[name="q${index}"]`);
            radioButtons.forEach(radio => {
                radio.addEventListener('change', function () {
                    window.checkAnswer(teamName, index, parseInt(this.value));
                });
            });
        });
    }

    // --- 6. Función ÚNICA para verificar la respuesta ---
    window.checkAnswer = function (teamName, questionIndex, selectedIndex) {
        const team = triviaData[teamName];
        if (!team) return;

        const question = team.questions[questionIndex];
        const isCorrect = (selectedIndex === question.correct);
        const feedbackDiv = document.getElementById(`fb-${questionIndex}`);

        // Inicializar progreso si no existe
        if (!window.triviaProgreso[teamName]) {
            window.triviaProgreso[teamName] = {
                respondidas: 0,
                correctas: 0,
                incorrectas: 0,
                puntajeTotal: 0,
                preguntas: []
            };
        }

        const preguntaYaRespondida = window.triviaProgreso[teamName].preguntas[questionIndex]?.respondida || false;
        const progreso = window.triviaProgreso[teamName];

        if (!preguntaYaRespondida) {
            progreso.respondidas++;
            if (isCorrect) {
                progreso.correctas++;
                progreso.puntajeTotal += 10; // 10 puntos por respuesta correcta
                
                // Efecto opcional: Si tienes el archivo de efectos, podemos lanzar chispitas al acertar
                if (typeof lanzarChispas === 'function') {
                    // lanzarChispas(event); 
                }
            } else {
                progreso.incorrectas++;
            }
        }

        // Guardar detalle de la pregunta
        progreso.preguntas[questionIndex] = {
            index: questionIndex,
            respondida: true,
            correcta: isCorrect,
            respuestaSeleccionada: selectedIndex,
            respuestaCorrecta: question.correct,
            texto: question.text,
            opciones: question.options
        };

        // Deshabilitar todos los radios
        const radios = document.querySelectorAll(`input[name="q${questionIndex}"]`);
        radios.forEach(radio => radio.disabled = true);

        // Mostrar feedback
        if (isCorrect) {
            feedbackDiv.innerHTML = '✅ ¡Correcto! +10 puntos';
            feedbackDiv.className = 'feedback correct';
        } else {
            const correctAnswer = question.options[question.correct];
            feedbackDiv.innerHTML = `❌ Incorrecto. La respuesta correcta es: ${correctAnswer}`;
            feedbackDiv.className = 'feedback incorrect';
        }

        // Marcar visualmente
        radios.forEach((radio, idx) => {
            if (idx === question.correct) {
                radio.parentElement.style.background = '#2e7d32'; // Verde
            } else if (idx === selectedIndex && !isCorrect) {
                radio.parentElement.style.background = '#b71c1c'; // Rojo
            }
        });

        // Actualizar las estadísticas 
        if (typeof window.actualizarEstadisticasTrivia === 'function') {
            window.actualizarEstadisticasTrivia();
        }
    };

    // Función ÚNICA para reiniciar
    window.resetTeamQuestions = function (teamName) {
        if (window.triviaProgreso[teamName]) {
            window.triviaProgreso[teamName] = {
                respondidas: 0,
                correctas: 0,
                incorrectas: 0,
                puntajeTotal: 0,
                preguntas: triviaData[teamName].questions.map((q, index) => ({
                    index: index,
                    respondida: false,
                    correcta: null,
                    respuestaSeleccionada: null
                }))
            };
        }

        renderTrivia(teamName); 

        if (typeof window.actualizarEstadisticasTrivia === 'function') {
            window.actualizarEstadisticasTrivia();
        }
    };

    teamSelect.addEventListener('change', function () {
        const selectedTeam = this.value;
        if (selectedTeam) {
            renderTrivia(selectedTeam);
        } else {
            triviaContent.innerHTML = '<p style="text-align: center; color: #aaa; padding: 20px;">👆 Selecciona un equipo de la lista para comenzar.</p>';
        }
    });

    // Arrancamos el sistema
    inicializarProgreso();
    populateTeamSelect();


})();

