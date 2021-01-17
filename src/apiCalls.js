export const getCatPicture = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Sorry we are having difficulty loading this picture, please try again later!"
        );
      }
    });
};