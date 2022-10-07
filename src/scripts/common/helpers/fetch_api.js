export const fetchGoogleApi = fetch(
  "https://www.googleapis.com/books/v1/volumes?q=design"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
