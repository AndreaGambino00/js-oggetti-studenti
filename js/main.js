// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  nome : 'Andrea',
  cognome : 'Gambino',
  eta : 21
};

for (var dati in studente){
  console.log(dati + ' ' + studente[dati]); 
}

// 2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti = [
    {
      nome : 'Mimmo',
      cognome : 'Cozza',
      eta : 30
    },
    {
      nome : 'Genny',
      cognome : 'Carogna',
      eta : 30
    },
    {
      nome : 'Ciro',
      cognome : 'Immortale',
      eta : 30
    },
    {
      nome : 'Gennaro',
      cognome : 'Savastano',
      eta : 30
    }
];
  
for( var dati in studenti){ 
    console.log(studenti[dati].nome + ' ' + studenti[dati].cognome ); 
}
  
// 3 - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoNome = prompt('inserisci il nome');
var nuovoCognome = prompt('inserisci il cognome');
var nuovoEta = parseInt(prompt('inserisci l\' eta'));


var nuovoStudente =
{
  nome : nuovoNome,
  cognome : nuovoCognome,
  eta : nuovoEta
} 

studenti.push(nuovoStudente);