/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/




const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo, priorita ) {
  const li = document.createElement("li");
  li.textContent = testo + "";
  const badge = document.createElement("span");
  badge.classList.add("badge");
  badge.textContent = priorita;
  const button = document.createElement("button");
  button.classList.add("elimina");  
  button.textContent = "Elimina";
  li.appendChild(badge);
  li.appendChild(button);
  li.classList.add("priorita-" + priorita);
  lista.appendChild(li);
  aggiornaContatore();
}



function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li");
  contatore.textContent = tasks.length;
}

aggiungiTask("Pagare le bollette", "alta");
aggiungiTask("Studiare JavaScript", "media");
aggiungiTask("Comprare il pane", "bassa");
aggiungiTask("Chiamare il dentista", "alta");
aggiungiTask("Riposarsi", "bassa");



/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   4. evidenzia(indice) / togliEvidenza(indice)
   5. data automatica nel task
   6. contaPerPriorita()
*/