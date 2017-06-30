//helper function to fetch the data from an external source
console.log("test");

function getShipDetails(urlNew) {

    var url = urlNew;
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);

        var details = document.getElementById('ships-info');

        //make sure list is empty
        details.innerHTML = "";

        //make sure list is empty
        var text = ""
        for (var i = 0; i < data.length; i++) {
            text += data[i] + "\n";
        }

        document.getElementById('ships-info').innerHTML = text;
    })
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

//lets get some ships
function fetchShips() {
    var url = "//swapi.co/api/starships/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        var results = data.results;

        //get list element
        var shipListElement = document.getElementById('ships-names');

        //make sure list is empty
        shipListElement.innerHTML = "";

        //loop through ships
        results.forEach(function(ship) {
           //create elements for list
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            //set href attribute to the URL of the ship
            //set the contents of the link element to the name of the ship
            //add the link to the item
            //and the list item to the list
            link.setAttribute('href', ship.url);
            link.innerHTML = ship.name;
            listItem.appendChild(link);
            shipListElement.appendChild(listItem);

            link.addEventListener("click", function(event){
                event.preventDefault();
                getShipDetails(ship.url);
            })
        });
});

}


fetchShips();

//I worked with Korey Macgill on this assignment.
