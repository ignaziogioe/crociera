// Calcola la data odierna
const oggi = new Date();

// Imposta la data di destinazione al 9 luglio dell'anno corrente
const destinazione = new Date(oggi.getFullYear(), 6, 9);

// Calcola la differenza in millisecondi tra le due date
const differenza = destinazione.getTime() - oggi.getTime();

// Converti la differenza in giorni
const giorniRimasti = Math.ceil(differenza / (1000 * 3600 * 24));

// Seleziona l'elemento h1 e aggiungi il conteggio dei giorni rimasti
const titolo = document.querySelector('h1');
titolo.textContent = `Mancano ${giorniRimasti} giorni al bordello!`;
