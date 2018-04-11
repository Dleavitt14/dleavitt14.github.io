function disappear(sectionToHide) {
    sectionToHide.style.left="400px"
}

function showInfo(level) {
    var sectionToShow = document.querySelector('#mover');
    sectionToShow.style.left = "0px";
    if (level) {
        infoDisplay(level);
    }
}

function doNothing(theEvent) {
    theEvent.stopPropagation();
}

function infoDisplay(level) {
    switch(level) {
        case "beginnerNovice":
            console.log("hi");
            getBeginnerNovice();
            console.log("hi");
            break;
        case"novice":
            getNovice();
            break;
        case "training":
            getTraining();
            break;
        case"prelim":
            getPrelim();
            break;
        case "intermediate":
            getIntermediate();
            break;
        case"advanced":
            getAdvanced();
            break;
        default:
            break;
    }
}

function getBeginnerNovice() {
    var space = document.getElementById("infoDisplay");
    
    while(space.firstChild) {
        space.removeChild(space.firstChild);
    }
    
    var title = document.createElement("H2");
    var content = document.createTextNode("Beginner Novice");
    title.appendChild(content);
    title.setAttribute("class", "title");
    space.appendChild(title);
    
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/beginnerNovice.jpg");
    photo.setAttribute("alt", "jump");
    photo.setAttribute("class", "photo");
    space.appendChild(photo);
    
    var list = ["Small logs", "Water crossings", "Small cabins and barrels"];
    var infoList = document.createElement("UL");
    infoList.setAttribute("class", "infoList");
    
    for (var i = 0; i < list.length; i++) {
        var listItems = document.createElement("LI");
        var text = document.createTextNode(list[i]);
        listItems.appendChild(text);
        infoList.appendChild(listItems);
    }
    space.appendChild(infoList);
}

function getNovice() {
    var space = document.getElementById("infoDisplay");
    
    while(space.firstChild) {
        space.removeChild(space.firstChild);
    }
    
    var title = document.createElement("H2");
    var content = document.createTextNode("Novice");
    title.appendChild(content);
    title.setAttribute("class", "title");
    space.appendChild(title);
    
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/novice.jpeg");
    photo.setAttribute("alt", "jump");
    photo.setAttribute("class", "photo");
    space.appendChild(photo);
    
    var list = ["Tables", "Ditches", "Larger jumps"];
    var infoList = document.createElement("UL");
    infoList.setAttribute("class", "infoList");
    
    for (var i = 0; i < list.length; i++) {
        var listItems = document.createElement("LI");
        var text = document.createTextNode(list[i]);
        listItems.appendChild(text);
        infoList.appendChild(listItems);
    }
    space.appendChild(infoList);
    
}

function getTraining() {
    var space = document.getElementById("infoDisplay");
    
    while(space.firstChild) {
        space.removeChild(space.firstChild);
    }
    
    var title = document.createElement("H2");
    var content = document.createTextNode("Training");
    title.appendChild(content);
    title.setAttribute("class", "title");
    space.appendChild(title);
    
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/training.jpeg");
    photo.setAttribute("alt", "jump");
    photo.setAttribute("class", "photo");
    space.appendChild(photo);
    
    var list = ["Small corners", "Simple combinations", "Coffins"];
    var infoList = document.createElement("UL");
    infoList.setAttribute("class", "infoList");
    
    for (var i = 0; i < list.length; i++) {
        var listItems = document.createElement("LI");
        var text = document.createTextNode(list[i]);
        listItems.appendChild(text);
        infoList.appendChild(listItems);
    }
    space.appendChild(infoList);
}

function getPrelim() {
    var space = document.getElementById("infoDisplay");
    
    while(space.firstChild) {
        space.removeChild(space.firstChild);
    }
    
    var title = document.createElement("H2");
    var content = document.createTextNode("Prelim");
    title.appendChild(content);
    title.setAttribute("class", "title");
    space.appendChild(title);
    
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/prelim.jpg");
    photo.setAttribute("alt", "jump");
    photo.setAttribute("class", "photo");
    space.appendChild(photo);
    
    var list = ["Small ditch and walls", "Larger tables", "Medium complex combinations"];
    var infoList = document.createElement("UL");
    infoList.setAttribute("class", "infoList");
    
    for (var i = 0; i < list.length; i++) {
        var listItems = document.createElement("LI");
        var text = document.createTextNode(list[i]);
        listItems.appendChild(text);
        infoList.appendChild(listItems);
    }
    space.appendChild(infoList);
}

function getIntermediate() {
    var space = document.getElementById("infoDisplay");
    
    while(space.firstChild) {
        space.removeChild(space.firstChild);
    }
    
    var title = document.createElement("H2");
    var content = document.createTextNode("Intermediate");
    title.appendChild(content);
    title.setAttribute("class", "title");
    space.appendChild(title);
    
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/intermediate.jpg");
    photo.setAttribute("alt", "jump");
    photo.setAttribute("class", "photo");
    space.appendChild(photo);
    
    var list = ["Large wide tables", "Complex combinations", "Banks and jumps into water"];
    var infoList = document.createElement("UL");
    infoList.setAttribute("class", "infoList");
    
    for (var i = 0; i < list.length; i++) {
        var listItems = document.createElement("LI");
        var text = document.createTextNode(list[i]);
        listItems.appendChild(text);
        infoList.appendChild(listItems);
    }
    space.appendChild(infoList);
}

function getAdvanced() {
    var space = document.getElementById("infoDisplay");
    
    while(space.firstChild) {
        space.removeChild(space.firstChild);
    }
    
    var title = document.createElement("H2");
    var content = document.createTextNode("Advanced");
    title.appendChild(content);
    title.setAttribute("class", "title");
    space.appendChild(title);
    
    var photo = document.createElement("IMG");
    photo.setAttribute("src", "images/advanced.jpg");
    photo.setAttribute("alt", "jump");
    photo.setAttribute("class", "photo");
    space.appendChild(photo);
    
    var list = ["Enourmous tables and jumps", "Large jumps with terrain", "Very narrow jumps"];
    var infoList = document.createElement("UL");
    infoList.setAttribute("class", "infoList");
    
    for (var i = 0; i < list.length; i++) {
        var listItems = document.createElement("LI");
        var text = document.createTextNode(list[i]);
        listItems.appendChild(text);
        infoList.appendChild(listItems);
    }
    space.appendChild(infoList);
}