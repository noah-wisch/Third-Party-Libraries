
let foodItems = require('./array')

window.addEventListener('load', function () {

    let search_box = document.querySelector('#search');

    $('#tabs').tabs();

    search_box.addEventListener('keyup', function () {
        let keepers = [];
        console.log(search_box.value);

        for (let i = 0; i < foodItems.length; i++) {
            let food_name = foodItems[i].food.toLowerCase();
            let search_term = search_box.value.toLowerCase();
            //let food_tag = foodItems[i].tags.toLowerCase();

            if (food_name.includes(search_term) || foodItems[i].tags.includes(search_term)) {
                keepers.push(foodItems[i]);
            }
        }
        showFoods(keepers, '#menu');
    });
    showFoods(foodItems, '#menu');
    showFoods(foodItems.filter(function (food) {
        if (food.tags.includes(' veggie')) {
            return true;
        }
    }), '#vegetarian');
});

function showFoods(foods, selector) {
    let parent = document.querySelector(selector);
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