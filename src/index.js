



const input = document.getElementById("search");
const books = []


    input.addEventListener ("input", async(event) => {
      const query = event.target.value;
     
      await getBook(query)
      const rta = books
        .map((obj) => {
          return {
            ...obj,
            name: obj.name.toLocaleLowerCase(),
          };
        })
        .filter((obj) => obj.name.includes(query.toLocaleLowerCase()));
    });


