async function fetchDadJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
    //const response = await fetch("//url.to/icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
        Origin: "https://icanhazdadjoke.com/"
      },
    });
  
    const data = await response.json();
    console.log("fetchDadJoke() data is: ", data)
    return data.joke;
}

async function fetchJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit", {
        headers: {
            Accept: "application/json",
      },
    });
  
    const data = await response.json();
    console.log("fetchJoke() joke is: ", data)
    return data;
}

async function displayJoke() {
    console.log("inside displayJoke()")
    const joke = await fetchJoke();
    console.log("joke received")
    console.log("setup is ", joke.setup)
    console.log("delivery is ", joke.delivery)
    console.log("joke is ", joke.joke)
    if (joke.joke !== undefined) {
        document.getElementById("jokeContents").innerHTML = joke.joke
    }
    else {
        document.getElementById("jokeContents").innerHTML = joke.setup + ` ` + joke.delivery
        // document.getElementById("jokeContents2").innerHTML = joke.delivery
    }
}

async function displayDadJoke() {
    const joke = await fetchDadJoke()
    const dadImageSource1 = 'data:image/jpeg;base64,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'
    const dadImageSource2 = 'data:image/jpeg;base64,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'
    console.log("displayDadJoke() joke is ", joke)
    document.getElementById("jokeContents").innerHTML = joke
    document.getElementById("dadImage").src=dadImageSource2
}

document.getElementById("getDadJokeBtn").addEventListener("click", displayDadJoke)
document.getElementById("getJokeBtn").addEventListener("click", displayJoke)

async function fetchNasa() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=lI1ZQacmoSHllSZva3T93BkPxNOtyPc5C80EfWdh", {
      /*headers: {
        Accept: "application/json",
      },*/
    });
  
    const data = await response.json();
    console.log("fetchNasa() data is: ", data)
    // display
    if (data.title !== null) {
        document.getElementById("titleContainer").innerHTML = data.title
    }
    if (data.hdurl != null) {
        document.getElementById("nasaImg").src = data.hdurl
    }
    else {
        document.getElementById("nasaImg").src = data.url
    }
    if (data.date !== null) {
        document.getElementById("dateContainer").innerHTML = data.date
    }
    if (data.explanation !== null) {
        document.getElementById("explanationContainer").innerHTML = data.explanation
    }
    if (data.copyright !== null){
        document.getElementById("copyrightContainer").innerHTML = `Copyright:<br>${data.copyright}`
    }
}


