const HoneyWell_Wheel_URL =
  "https://honeywell.scene7.com/is/image/Honeywell65/hon-aero-32520ajm-main-and-nose-wheels";
const Hawker_Battery_URL =
  "https://www.batterymart.com/merchant2/graphics/00000001/12/SBS-J16_hawker_main_400x400.jpg;
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This was an array of strings (TV show titles), but I will be replaced with information 
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

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
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
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
