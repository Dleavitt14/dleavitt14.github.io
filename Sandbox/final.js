var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

function fetchData() {
    var url = "final.json";

    getJSON(url).then(function (data) {
        console.log(data)

        var yellowstone = data.Yellowstone;
        var mexico = data.Mexico;
        var telluride = data.Telluride;
        var council = data.Council;
        var lakePowell = data.LakePowell;

        var memoryMexico = document.getElementById('memoriesMexico');
        var memoryTelluride = document.getElementById('memoriesTelluride');
        var memoryLakePowell = document.getElementById('memoriesLake-powell');
        var memoryYellowstone = document.getElementById('memoriesYellowstone');
        var memoryCouncil = document.getElementById('memoriesCouncil');

        console.log(yellowstone.Memories[0]);
        console.log(mexico.Memories[0]);
        console.log(telluride.Memories[0]);
        console.log(council.Memories[0]);
        console.log(lakePowell.Memories[0]);

        if (memoryYellowstone) {
            for(let i = 0; i < 9; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = yellowstone.Memories[i];
                memoryYellowstone.appendChild(listItem);
            }
        }
        else if (memoryMexico) {
            for(let i = 0; i < 9; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = mexico.Memories[i];
                memoryMexico.appendChild(listItem);
            }
        }
        else if (memoryTelluride){
            for(var i = 0; i < 10; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = telluride.Memories[i];
                memoryTelluride.appendChild(listItem);
            }
        }
        else if (memoryLakePowell) {
            for(var i = 0; i < 8; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = lakePowell.Memories[i];
                memoryLakePowell.appendChild(listItem);
            }
        }
        else {
            for(var i = 0; i < 10; i++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = council.Memories[i];
                memoryCouncil.appendChild(listItem);
            }
        }

    })
}

fetchData();
