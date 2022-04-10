/* Simon says
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* Passaggi:
- div nell'html
- document.querySelector() o getElementbyId()
- array con numeri random - var numbers
- Math.random() | copio funzione da w3school o la faccio a mano
- while
- if
- array.includes()
- innerHTML
- setTimeout(funzione, millisecondi(3000))
- for
- prompt
- parseInt | Number
- operatore logico
...effettuare refactoring aggiungendo funzioni per snellire il codice
*/

// Visualizzare in pagina 5 numeri casuali

 //1. Selezionare elemento della dom dove inserire numeri casuali
 const numberElement = document.querySelector('.numbers');
 //2. Creare variabile dove salvare i numeri (array)
 const randomNumbers = [];
 //3. generare 5 numeri casuali (univoci)
 while (randomNumbers.length !== 5) {
    const number = Math.floor(Math.random() * 100) 
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number)
     } 
 }
 console.log(randomNumbers);

 //4. Stampare a schermo i numeri che l'utente dovrà memorizzare
 numberElement.innerHTML = `Memorizza questi numeri: ${randomNumbers.toString()}`

 // Faccio partire un timer di 30 secondi

 //1. Imposto il setTimeout a 30s
 setTimeout(() => {
 // rimuovere dalla dom i numeri mostrati
 numberElement.innerHTML = '';

 // utente deve inserire uno alla volta in numero che ha visto, tramite il prompt()
 // faccio un ciclo e chiedo all'utente di inseiree un numeri di quelli visti
 const user_attempts = []
 for (let i = 0; i < 5; i++) {
     const user_number = parseInt(prompt('Inserisci uno dei numeri che hai visto'));
     console.log(user_number);
     if(randomNumbers.includes(user_number) && !user_attempts.includes(user_number)) {
         user_attempts.push(user_number)
     }
     
    }
    console.log(user_attempts);


    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
    /* cosa mi serve
       - array che contiene i numeri inseriti dall'utente(solo se combaciano con i numeri mostrati)
       - operatore logico
       */

    alert(`Hai indovinato ${user_attempts.length}/ ${randomNumbers.length}. I numeri indovinati sono ${user_attempts} `)
 }, 30000)



 

 



