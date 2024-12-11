const lista = document.getElementById("container");

const url = "https://striveschool-api.herokuapp.com/books";



let myList;

const retrieveData = () => {
    fetch(url)
    .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Qualcosa è andato storto nella chiamata di rete')
        }
    }).then((bookData) => {
    myList = bookData;
    console.log(myList);
    readMybooks();
    }).catch((error) => {
        console.log('Errore nel recupero dei dati: ', error);
    });
};

retrieveData();

function readMybooks(){
    for (let i=0; i<myList.length; i++){
      const myCard = document.createElement("div");
      myCard.classList.add("col-md-4");
      const myHead = document.createElement(`img src=${myList.img[i]}/`);
      myHead.classList.add(`class="card-img-top"`)
      const myBody = document.createElement(`div`)
      myBody.classList.add(`class="card-body"`)
      newBody.innerHTML = `<h5 class="card-title">${title[i]}</h5>`;
      newBody.innerHTML += `<p class="card-text">prezzo: $${price[i]}</p>`
      //newBody.innerHTML
      myHead.appendChild(myBody);
      myCard.appendChild(myHead);
      lista.appendChild(myCard);
    }
  }
 

