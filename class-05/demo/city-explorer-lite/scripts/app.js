'use strict';

function setEventListeners() {
  $('#search-form').on('submit', fetchCityData);
}

function fetchCityData(event) {
  event.preventDefault();
  let searchQuery = $('#input-search').val().toLowerCase();
  $('#map').hide();
  $('#title').hide();
  $('.columns section').hide();
  const ajaxSettings = {
    method: 'get',
    dataType: 'json',
    data: { city: searchQuery }
  };
  $.ajax(`/fake-data/location.json`, ajaxSettings)
    .then(location => {
      showTitle(location);
      displayMap(location);
      getRestaurants(location);
    })
    .catch(error => {
      console.error(error);
    });
}

function showTitle(location) {
  let template = $('#title-template').html();
  let markup = Mustache.render(template, location);
  $('#title').html(markup);
  $('#title').show();
}

function displayMap(location) {
  let template = $('#image-template').html();
  let markup = Mustache.render(template, location);
  $('#map').html(markup)
  $('#map').show();
}
// Help me setup the restaurant data
function getRestaurants(location) {

}

$('document').ready(function () {
  setEventListeners();
});
