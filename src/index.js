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



