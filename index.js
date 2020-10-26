//container des données saisi
const  list = document.getElementById('list');
//formulaire
const  form = document.querySelector('form');
//Input dans lequel le user saisi les données 
const  item = document.getElementById('item');

//ajout d'élément
form.addEventListener('submit', (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;

  storage();
  item.value = ""
});

//supprimer un élément
list.addEventListener('click', e => {
  if(e.target.classList.contains('checked')) {
    e.target.remove();
  } else {
    e.target.classList.add('checked')
  }

  storage();
})

//local storage
function storage() {
  window.localStorage.todolist = list.innerHTML;
}

//obtenir les valeur saisi
function getValues() {
  let storageContent = window.localStorage.todolist;
  if(!storageContent) {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
  } else {
    list.innerHTML = storageContent;
  }
}

getValues();