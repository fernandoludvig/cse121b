/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Fernando Ludvig",
    photo: "images/eu.png", // Example path, replace with actual
    favoriteFoods: [
      'Rice',
      'Pizza',
      'Pasta',
      'Shrimp',
    ],
    hobbies: [
      // Add your hobbies here as strings
      'Web developer',
      'Soccer',
      'Movies'
    ],
    placesLived: []
  };
  


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Florianópolis, Brazil',
      length: '19 years'
    },
     // Add more places as needed
  );
  



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Photo with attributes */


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  
