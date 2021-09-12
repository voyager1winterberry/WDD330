// links to different weeks of assignments
const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    }
]

// populates an unordered list with the links in the links array
function createList() {
    for (let i = 0; i < links.length; i++) {
        // for each link, create <li> tag to put in <ol>
        // wrap <a> tag inside <li> to access href attribute, which allows a link
        const newA = document.createElement("a");
        const newLi = document.createElement("li");
        const newLabel = document.createTextNode(links[i].label);
        const newUrl = document.createTextNode(links[i].url);
        const newOl = document.getElementById("portfolioItems");

        // .innerHTML = '<a href="' + newURL + '"></a>'
        newA.appendChild(newLabel);
        newA.setAttribute("href", newUrl);        
        newLi.appendChild(newA);
        newOl.appendChild(newLi);
    }
}

