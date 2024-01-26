function displayItinerary(response) {
console.log("itinerary generated");

 new Typewriter('#itinerary', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


function generateItinerary(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#instructions");

let apiKey = "35te54ac48ff3dd030f2e92oaf3b5d78";
let prompt = `Please generate a detailed travel itinerary for ${instructionsInput.value}. Display the itinerary in basic HTML for a better UX. Only reply with the itinerary, no need to add any other comment`;
let context = "You are a seasoned traveller who has been all over the world and have a lot of travel advices to provide.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let itineraryElement = document.querySelector("#itinerary");
itineraryElement.classList.remove("hidden");
itineraryElement.innerHTML = `<span class="blink">⏳</span>Generating the itinerary for you, please wait (can take up to 30 seconds).`

axios.get(apiUrl).then(displayItinerary);

}

let travelItineraryElement = document.querySelector("#travel-itinerary-form");
travelItineraryElement.addEventListener("submit", generateItinerary);