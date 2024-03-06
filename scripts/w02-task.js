document.addEventListener('DOMContentLoaded', function() {
    /* Step 1 - Setup type tasks - no code required */

    /* Step 2 - Variables */
    let fullName = 'Fernando Ludvig';
    let currentYear = '2024';
    let profilePicture = 'images/eu.png';



    /* Step 3 - Element Variables */

    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement =  document.querySelector('#year');
    const imageElement = document.getElementById('imageId');




    /* Step 4 - Adding Content */

    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute('alt', `Profile image of ${fullName}`);





    /* Step 5 - Array */


// Declare um array para armazenar seus alimentos favoritos
let favoriteFoods = ['Pizza', 'Ice Cream', 'Barbecue'];

// Modifique o elemento HTML com o ID de "food" para exibir o array de seus alimentos favoritos
let foodListHTML = favoriteFoods.join('<br>');
foodElement.innerHTML = foodListHTML;

// Declare e instancie uma variável para armazenar outro alimento favorito
let anotherFood = 'Pasta';

// Adicione o valor armazenado nesta nova variável ao seu array de alimentos favoritos
favoriteFoods.push(anotherFood);

// Remova o primeiro elemento do array de alimentos favoritos
favoriteFoods.shift();

// Anexe a saída do array atualizado ao conteúdo HTML do elemento "food" com uma quebra de linha
foodListHTML = favoriteFoods.join('<br>');
foodElement.innerHTML += '<br>' + foodListHTML;

// Remova o último elemento do array de alimentos favoritos
favoriteFoods.pop();

// Anexe a saída do array atualizado novamente ao conteúdo HTML do elemento "food" com uma quebra de linha
foodListHTML = favoriteFoods.join('<br>');
foodElement.innerHTML += '<br>' + foodListHTML;
});
