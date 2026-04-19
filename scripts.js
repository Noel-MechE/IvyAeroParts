const HoneyWell_Wheel_URL =
  "https://honeywell.scene7.com/is/image/Honeywell65/hon-aero-32520ajm-main-and-nose-wheels";
const Hawker_Battery_URL =
  "https://www.batterymart.com/merchant2/graphics/00000001/12/SBS-J16_hawker_main_400x400.jpg;
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This was an array of strings (TV show titles), but I will be replaced with array of parts each containing unique atributes
let IvyAeroParts = [
  {
    name: "Honeywell Main Wheel",
    category: "Hardware",
    price: 4000.00,
    partNumber: 1015,
    spec: "Lightweight aluminum alloy, 10,000 cycle life",
    imageURL: "https://honeywell.scene7.com/is/image/Honeywell65/hon-aero-32520ajm-main-and-nose-wheels"
  },
  {
    name: "Hawker SBS J16 Battery",
    category: "Avionics",
    price: 263.00,
    partNumber: 1032,
    spec: "Sealed dry-cell, 12V, 520 cranking amps",
    imageURL: "https://www.batterymart.com/merchant2/graphics/00000001/12/SBS-J16_hawker_main_400x400.jpg"
  },
  {
    name: "SD-505 Sanden Air Conditioning Compressor",
    category: "Fluids",
    price: 175.00,
    partNumber: 1062,
    spec: "R-12 refrigerant, Suniso-5GS oil compatible",
    imageURL: "https://via.placeholder.com/300x200?text=AC+Compressor"
  },
  {
    name: "Cessna R182 Window Assembly",
    category: "Hardware",
    price: 125.00,
    partNumber: 1110,
    spec: "Clear cabin door window, LH side, durable acrylic",
    imageURL: "https://via.placeholder.com/300x200?text=Window"
  },
  {
    name: "RealSimGear G1000 PFD/MFD Module",
    category: "Avionics",
    price: 699.00,
    partNumber: 1910,
    spec: "Primary flight display, X-Plane & MSFS compatible",
    imageURL: "https://via.placeholder.com/300x200?text=PFD+Module"
  },
  {
    name: "Parker Hannifin Hydraulic Pump",
    category: "Fluids",
    price: 850.00,
    partNumber: 1203,
    spec: "Controls landing gear, flaps, brakes, high-pressure rated",
    imageURL: "https://via.placeholder.com/300x200?text=Hydraulic+Pump"
  },
  {
    name: "Garmin TCAS Receiver Transmitter",
    category: "Avionics",
    price: 2400.00,
    partNumber: 1304,
    spec: "Traffic collision avoidance system, real-time detection",
    imageURL: "https://via.placeholder.com/300x200?text=TCAS"
  },
  {
    name: "Goodyear Aviation Tire",
    category: "Hardware",
    price: 520.00,
    partNumber: 1405,
    spec: "Radial tire, bias compatible, heat-resistant sidewalls",
    imageURL: "https://via.placeholder.com/300x200?text=Aviation+Tire"
  },
  {
    name: "Rockwell Collins VHF Radio",
    category: "Avionics",
    price: 1200.00,
    partNumber: 1506,
    spec: "Communication system, 118-136 MHz range, crystal clear",
    imageURL: "https://via.placeholder.com/300x200?text=VHF+Radio"
  },
  {
    name: "PPG Aerospace Windshield Assembly",
    category: "Hardware",
    price: 950.00,
    partNumber: 1607,
    spec: "Laminated glass, heating frame, anti-glare coating",
    imageURL: "https://via.placeholder.com/300x200?text=Windshield"
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < IvyAeroParts.length; i++) {  // Loop through IvyAeroParts
  
    let part = IvyAeroParts[i];  // Get ONE part object

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = part.imageURL; //replaced with previouse non scalable code block

    const nextCard = templateCard.cloneNode(true); // Copy the template card
   editCardContent(nextCard, part); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, part) {  // Takes the part object
  card.style.display = "block";
  
  // Fill in the name
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = part.name;
  
  // Fill in the image
  const cardImage = card.querySelector("img");
  cardImage.src = part.imageURL;
  cardImage.alt = part.name;
  
  // Fill in category
  card.querySelector(".category").textContent = part.category;

  // Fill in price
  card.querySelector(".price").textContent = part.price;

  // Fill in partNumber
  card.querySelector(".partNumber").textContent = part.partNumber;

  // Fill in spec
  card.querySelector(".spec").textContent = part.spec;
  
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  IvyAeroParts.pop();  // 
  showCards();
}
