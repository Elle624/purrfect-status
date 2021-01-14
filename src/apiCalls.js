export const getStatusPicture = (code) => {
  return fetch(`https://http.cat/${code}.jpg`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Sorry we are having difficulty loading this page, please try again later!"
        );
      }
    });
};