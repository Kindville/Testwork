// const axios = require('axios').default;
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', onSearchForm)

function onSearchForm() {
 fetchPictures(query, page, perPage)
  
}
function fetchPictures(query, page, perPage) {
  return fetch(`https://pixabay.com/api/?key=25204764-ad3097bdd52dd29ccb650192a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
    .then(response => response.json())
      .then(data => data)
    // .catch(error => console.log(error))
}