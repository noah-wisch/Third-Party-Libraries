
module.exports = {
    get: function (url, callBack) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('load', function () {
            let response = JSON.parse(request.responseText);
            callBack(response);
        });
        request.send();
    },
    post: function () {
        // use when needed
    },
};

/* ajax.get('URL', thingToDo); */
// Add this line to your init(); to run the get request

