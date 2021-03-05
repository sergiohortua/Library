const input = document.getElementById("search");
const books = [];
const gd = document.getElementById("crimen");
const dr=document.getElementById('drama')
const rm=document.getElementById("romanc")
const ms=document.getElementById("mistery")
const thr=document.getElementById("thriller")
const acc=document.getElementById("action")
const wr=document.getElementById("guerra")
const hrr=document.getElementById("horror")
const doc=document.getElementById("docum")
const mus=document.getElementById("music")
const ave= document.getElementById("adventu")

input.addEventListener("input", async (event) => {
  const query = event.target.value;

  await getBook(query);
  const rt = books
    .map((obj) => {
      return {
        ...obj,
        name: obj.name.toLocaleLowerCase(),
       
      };
    })
    .filter((obj) => obj.name.includes(query.toLocaleLowerCase()));
});


gd.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
dr.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
rm.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
ms.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
thr.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
acc.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
wr.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
hrr.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
doc.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
mus.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
ave.addEventListener("click", async(e)=>{
   const varia=e.target.value
   console.log(varia);
   await getBookCk(varia);
   const rt = books
     .map((obj) => {
       return {
         ...obj
       };
     })
})
