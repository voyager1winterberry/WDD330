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

// populates an ordered list with the links array
function createList() {
    for (let i = 0; i < links.length; i++) {
        // for each link, create <li> tag to put in <ol>
        // wrap <a> tag inside <li> to use href attribute for link
        const newA = document.createElement("a");
        const newLi = document.createElement("li");
        const newLabel = document.createTextNode(links[i].label);
        const newUrl = links[i].url;
        const newOl = document.getElementById("portfolioItems");

        newA.appendChild(newLabel);
        newA.setAttribute("href", newUrl);        
        newLi.appendChild(newA);
        newOl.appendChild(newLi);
    }
}

