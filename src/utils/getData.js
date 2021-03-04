//const fetchData = require("./fetch");
const API = "http://localhost:3020/books/";
//let nameAutor
const rta = document.getElementById("resp");
const fv = document.getElementById("first");
const lifv= document.getElementById("favo")
const list= document.getElementById("listFv")

const getBook = async (nameAutor) => {
  try {
    //const data = await fetchData(url_api);
    const response = await fetch(`${API}?autor=${nameAutor}`);
    const books = await response.json();
    //console.log(books.length);
    //console.log(books.length>=1);
    if (books.length >= 1) {
      const container = document.createElement("span"); // cree un elemento contenedor
      const p = document.createElement("p"); //el parrafo donde van mis datos
      const ckok = document.createElement("input"); // el elemento de checkbox
      ckok.setAttribute("type", "checkbox");
      // ckok.setAttribute("onclick", "ckl()");
      // ckok.onclick( function () {

      // }

      // )// Esta bien sentenciada?????
      ckok.setAttribute("id", "ck");
      p.textContent = `${books[0].id} ${books[0].autor} ${books[0].gender} `; // en p guard"o la informacion que traigo del .json
      container.appendChild(p); // en container agrego el elemento p
      container.appendChild(ckok); // en container agrego el elemento input tipo checkbox
      rta.appendChild(container); // rta agrega lo de container

      console.log(ckok);
      
      document.getElementById("ck").addEventListener("click", myFunction);

      function myFunction() {
        fv.appendChild(p)
      }
    }
  } catch (error) {
    console.error(error);
  }
};

//export default getBook

/*      console.log(`ID            ${books[0].id}`);
     console.log(`ISBN          ${books[0].isbn}`);
     console.log(`Genero:       ${books[0].genero}`);
     console.log(`Autor:        ${books[0].Autor}`);
     console.log(`El titulo es: ${books[0].titulo}`);  
     
     if (ckok.checked == true){
        one.s
      } else {
         console.log('no visto');
      }
     
       /* const fvCont=document.createElement('span')
      const fvDesc = document.createElement('p');
      fvDesc.textContent=`${books[0].id} ${books[0].autor} ${books[0].gender} `
      fvCont.appendChild(fvDesc); 
      fv.appendChild(fvCont) 

      function checkClick() {
        if (ckok.checked==true){ 
          console.log("okokokokokokokokokokokoo");
        }else{
          console.log("lkvkxcbvlxkvlxnbvlszkjvnkfdcn");
        }
      }






      /* console.log(`ID: ${books[0].id}`);
      console.log(`Autor: ${books[0].Autor}`);
      console.log(`Titulo: ${books[0].titulo}`);
      console.log(`Genero: ${books[0].genero}`); */
