function showPersons(numberId) {
    var link = 'http://swapi.co/api/people/';

    fetch(link + numberId)
        .then(function (response) {
            if (response.status <= 200) {
                response.json().then(function (actor) {
                    var name = document.querySelector('#aboutActor .name > span');
                    name.innerHTML = actor['name'];
                    var height = document.querySelector('#aboutActor .height > span');
                    height.innerHTML = actor['height'];
                    var mass = document.querySelector('#aboutActor .mass > span');
                    mass.innerHTML = actor['mass'];
                    var hair_color = document.querySelector('#aboutActor .hair_color > span');
                    hair_color.innerHTML = actor['hair_color'];
                    var skin_color = document.querySelector('#aboutActor .skin_color > span');
                    skin_color.innerHTML = actor['skin_color'];
                    var eye_color = document.querySelector('#aboutActor .eye_color > span');
                    eye_color.innerHTML = actor['eye_color'];
                    var birth_year = document.querySelector('#aboutActor .birth_year > span');
                    birth_year.innerHTML = actor['birth_year'];
                    var gender = document.querySelector('#aboutActor .gender > span');
                    gender.innerHTML = actor['gender'];

                    var films = document.querySelectorAll('#films .episode > span');
                    films.forEach(function (span, i) {
                        fetch(actor.films[i]).then(function (response) {
                            response.json().then(function (json) {
                                span.innerHTML = json.title;
                            });
                        });
                    });
                });
            }
        })
        .catch(function (error) {

        });
}

window.onload = function () {
    var prevButton = document.getElementById('prevButton'),
        nextButton = document.getElementById('nextButton'),
        numberId = 1;

    nextButton.addEventListener('click', clickOnNextButton, false);
    prevButton.addEventListener('click', clickOnPrevButton, false);

    showPersons(numberId);

    function clickOnNextButton() {
        if (numberId <= 87) {
            numberId++;
            showPersons(numberId);
        }
    }

    function clickOnPrevButton() {
        if (numberId >= 1) {
            numberId--;
            showPersons(numberId);
        }
    }
};
