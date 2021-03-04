const input = document.getElementById("search");
const books = [];
const gd = document.getElementById("crimen");

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
    //  .filter((obj) => obj.name.includes(query.toLocaleLowerCase()));

})
