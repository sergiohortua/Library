const API = "http://localhost:3020/books/";

const rta = document.getElementById("resp");
const ullt= document.getElementById("ulFv")

const getBook = async (nameAutor) => {
  try {
    const response = await fetch(`${API}?autor=${nameAutor}`);
    const books = await response.json();
   
    if (books.length >= 1) {
      const container = document.createElement("div"); 
      
      const p = document.createElement("p"); 
      const ckok = document.createElement("input"); 
      ckok.setAttribute("type", "checkbox");
      ckok.setAttribute("id", "ck");
      p.textContent = `Nombre: ${books[0].name_book} 
      Autor: ${books[0].autor}       
      Genero: ${books[0].gender}
      Codigo ISBN: ${books[0].ISBN}`; 
      container.appendChild(ckok); 
      container.appendChild(p); 
      rta.appendChild(container); 


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
      const p = document.createElement("p"); 
      const ckok = document.createElement("input"); 
      ckok.setAttribute("type", "checkbox");
      ckok.setAttribute("id", "ck");
      p.textContent = `Nombre: ${books[0].name_book}
      Autor: ${books[0].autor}       
      Genero: ${books[0].gender}
      Codigo ISBN: ${books[0].ISBN}`; 
      container.appendChild(ckok); 
      container.appendChild(p);
      rta.append(container); 

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




