//const fetchData = require("./fetch");
const API = "http://localhost:3020/books/";
//let nameAutor
// const fv = document.getElementById("first");
const rta = document.getElementById("resp");
// const lifv= document.getElementById("favo")
const ullt= document.getElementById("ulFv")

const getBook = async (nameAutor) => {
  try {
    //const data = await fetchData(url_api);
    const response = await fetch(`${API}?autor=${nameAutor}`);
    const books = await response.json();
   
    if (books.length >= 1) {
      const container = document.createElement("div"); // cree un elemento contenedor
      
      const p = document.createElement("p"); //el parrafo donde van mis datos
      const ckok = document.createElement("input"); // el elemento de checkbox
      ckok.setAttribute("type", "checkbox");
      ckok.setAttribute("id", "ck");
      p.textContent = `Nombre: ${books[0].name_book} 
      Autor: ${books[0].autor}       
      Genero: ${books[0].gender}
      Codigo ISBN: ${books[0].ISBN}`; // en p guard"o la informacion que traigo del .json
      container.appendChild(ckok); // en container agrego el elemento input tipo checkbox
      container.appendChild(p); // en container agrego el elemento p
      rta.appendChild(container); // rta agrega lo de container

      //p contiene la info

      document.getElementById("ck").addEventListener("click", myFunction);
      const nodeList= document.createElement('li')
      function myFunction() {
        if (ckok.checked== true) {
          
          nodeList.appendChild(p)
          ullt.appendChild(nodeList)
          container.removeChild(ckok)
          
        }
        
      }
    }
  } catch (error) {
    console.error(error);
  }
};


const getBookCk = async (value) => {
  try {
    const response = await fetch(`${API}?gender=${value}`);
    const books = await response.json();
    
    if (books.length >= 1) {
      const container = document.createElement("div"); 
      const p = document.createElement("p"); //el parrafo donde van mis datos
      const ckok = document.createElement("input"); // el elemento de checkbox
      ckok.setAttribute("type", "checkbox");
      ckok.setAttribute("id", "ck");
      p.textContent = `Nombre: ${books[0].name_book}
      Autor: ${books[0].autor}       
      Genero: ${books[0].gender}
      Codigo ISBN: ${books[0].ISBN}`; // en p guard"o la informacion que traigo del .json
      container.appendChild(ckok); // en container agrego el elemento input tipo checkbox
      container.appendChild(p); // en container agrego el elemento p
      rta.append(container); // rta agrega lo de container

      document.getElementById("ck").addEventListener("click", myFunction);
      const nodeList= document.createElement('li')
      function myFunction() {
        if (ckok.checked== true) {
          console.log(ckok);
          nodeList.appendChild(p)
          ullt.appendChild(nodeList)
          container.removeChild(ckok)
          ckok.checked==false
        }
        
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
     
       /* const fvCont=document.createElement('li')
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
