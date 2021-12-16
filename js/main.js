const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    },
    {
        label: "Week 4",
        url: "week4/index.html"
    },
    {
        label: "Week 5",
        url: "week5/index.html"
    },
    {
        label: "Week 7",
        url: "week7/index.html"
    },
    {
        label: "Week 8",
        url: "week8/week8index.html"
    },
    {
        label: "Week 9",
        url: "week9/week9index.html"
    },
    {
        label: "Week 10",
        url: "week10/week10index.html"
    },
    {
        label: "Week 11",
        url: "week11/week11index.html"
    },
    {
        label: "Challenge 1",
        url: "challenge1/challenge1.html"
    },
    {
        label: "Block 2 Project",
        url: "project2/project2.html"
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

