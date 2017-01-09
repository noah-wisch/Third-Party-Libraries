
let foodItems = require('./array')

// let showLunchItems = require('./DOM')

window.addEventListener('load', function () {
    let nav_list = document.querySelector('#show-list');
    let nav_add = document.querySelector('#show-add');

    let view_list = document.querySelector('#list-view');
    let view_add = document.querySelector('#add-view');

    let search_box = document.querySelector('#search');

    nav_list.addEventListener('click', function () {
        view_list.classList.remove('hidden')
        view_add.classList.add('hidden')
        console.log('YAS')
    });

    nav_add.addEventListener('click', function () {
        view_list.classList.add('hidden');
        view_add.classList.remove('hidden');
        console.log('YAS AGAIN')
    });

    search_box.addEventListener('keyup', function() {
        let keepers = [];
        console.log(search_box.value);

        for (let i = 0; i < foodItems.length; i++) {
            let food_name = foodItems[i].food.toLowerCase();
            let search_term = search_box.value.toLowerCase();

            if (food_name.includes(search_term)) {
                keepers.push(foodItems[i]);
            }
        }
        showFoods(keepers);
    });
    showFoods(foodItems);
});

function showFoods(foods) {
    let parent = document.querySelector('#menu');
    parent.innerHTML = '';

    for (let i = 0; i < foods.length; i++) {
        let item = document.createElement('li');

        item.innerHTML = Mustache.render(
            document.querySelector('#pizzaMenu').innerHTML,
            foods[i]
        );
        parent.appendChild(item);
    }
}