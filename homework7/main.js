//function sum(a, b){
//    return new Promise(function(resolve, reject){
//        setTimeout(function(){
//            resolve(a + b);
//        }, 1000);
//    });
//}
//
//var t = sum(3, 9);
//
//t.then(function(result){
//    console.log(result);
//    return new Promise(function(resolve, reject){
//        console.log("jjjj");
//    })
//})
//    .then(function(result){
//        console.log(result);
//    });

window.onload = function(){
    var prevButton = document.getElementById('prevButton'),
        nextButton = document.getElementById('nextButton'),
        link = 'http://swapi.co/api/people/',
        numberId = 1,
        inf = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'],
        infAboutActor = [];

nextButton.addEventListener('click', clickOnNextButton, false);
prevButton.addEventListener('click', clickOnPrevButton, false);



    fetch(link + numberId)
        .then(function(response){
            if(response.status <= 200){
                response.json().then(function(actor){
                    infAboutActor = document.getElementById('aboutActor').children;

                    for(var i = 0; i <= infAboutActor.length; i++){
                        infAboutActor[i].innerHTML = actor[inf[i]];
                    }

                });
            }

        })
        .catch(function(error){

        });
function clickOnNextButton(){
    numberId++;

}
function clickOnPrevButton(){
    numberId--;
}

};
