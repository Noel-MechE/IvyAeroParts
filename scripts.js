// My IvyAeroParts data — each object has name, category, price, partNumber, spec, and imageURL
// This replaces the old TV show titles array completely
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
    imageURL: "https://cdn11.bigcommerce.com/s-lh7wonygtd/images/stencil/1280x1280/products/138052/1544409/N92884-678__83772.1752688229.jpg?c=1"
  },
  {
    name: "Cessna R182 Window Assembly",
    category: "Hardware",
    price: 125.00,
    partNumber: 1110,
    spec: "Clear cabin door window, LH side, durable acrylic",
    imageURL: "https://i.ebayimg.com/images/g/WOgAAeSwVZJplh7c/s-l1600.webp"
  },
  {
    name: "RealSimGear G1000 PFD/MFD Module",
    category: "Avionics",
    price: 699.00,
    partNumber: 1910,
    spec: "Primary flight display, X-Plane & MSFS compatible",
    imageURL: "https://realsimgear.com/cdn/shop/files/G1000PFDHero.jpg?v=1732132490&width=1000"
  },
  {
    name: "Parker Hannifin Hydraulic Pump",
    category: "Fluids",
    price: 573.00,
    partNumber: 1203,
    spec: "Controls landing gear, flaps, brakes, high-pressure rated",
    imageURL: "https://cdn.radwell.com/productgoogleimages/4682e27aae5b495883f4091ca9dfbd11.jpg"
  },
  {
    name: "Garmin TCAS Receiver Transmitter",
    category: "Avionics",
    price: 2400.00,
    partNumber: 1304,
    spec: "Traffic collision avoidance system, real-time detection",
    imageURL: "https://i0.wp.com/www.aeroproavionics.com/wp-content/uploads/2014/02/gts8000.jpg"
  },
  {
    name: "Goodyear Flight Custom III Tube Type Tire 6.50-10 10 Ply 650C06-3",
    category: "Hardware",
    price: 568.00,
    partNumber: 1405,
    spec: "Deeper tread depth, Extra-wide Aquachannel Grooves, Belt package with Kevlar, Dual polymer tread compound",
    imageURL: "https://cdn.aircraftspruce.com/cache/400-400-/catalog/graphics/flightcustom3.jpg"
  },
  {
    name: "Garmin VHF 215 AIS Marine Radio",
    category: "Avionics",
    price: 749.99,
    partNumber: 1506,
    spec: "Communication system, All U.S., Canadian, and international marine channels plus 10 NOAA weather channels, crystal clear",
    imageURL: "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2018/30/150/g150VHF215A-M.jpg"
  },
  {
    name: "PPG Aerospace Windshield Cabin Window for Alenia ATR-42/72 w/ CERTS",
    category: "Hardware",
    price: 1377.99,
    partNumber: 1607,
    spec: " A brand-new, unused, unopened, undamaged item in its original packaging",
    imageURL: "https://th.bing.com/th?id=OPHS.hlG2Po5f%2bSr6HQ474C474&w=144&h=130&c=17&o=6&pid=21.1&dpr=2 "
  }
];

// showCards() loops through the IvyAeroParts array and creates a card for each part
// It clones the template card from the HTML and fills it with real data
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";  // Clear any old cards first
  const templateCard = document.querySelector(".card");

  // Loop through each part in the array — this is the conveyor belt
  // i starts at 0, goes up by 1 each loop, stops when i reaches the total number of parts
  for (let i = 0; i < IvyAeroParts.length; i++) {
    let part = IvyAeroParts[i];  // Grab THIS part from the array

    // Make a copy of the empty template card so we can fill it with real data
    const nextCard = templateCard.cloneNode(true);
    
    // Fill the card with this part's info (name, category, price, etc)
    editCardContent(nextCard, part);
    
    // Add the filled card to the page so people can see it
    cardContainer.appendChild(nextCard);
  }
}

// editCardContent() takes an empty card and fills it with ONE part's data
// It uses querySelector to find the right spots in the card and puts the data there
function editCardContent(card, part) {
  // Show the card on the page (it starts hidden in the HTML)
  card.style.display = "block";
  
  // Find the h2 tag and put the part name in there
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = part.name;
  
  // Find the img tag and set its source to the part's image URL
  const cardImage = card.querySelector("img");
  cardImage.src = part.imageURL;
  cardImage.alt = part.name;
  
  // Find the span with class="category" and fill it with the category value
  card.querySelector(".category").textContent = part.category;

  // Find the span with class="price" and fill it with the price value
  card.querySelector(".price").textContent = part.price;

  // Find the span with class="partNumber" and fill it with the part number
  card.querySelector(".partNumber").textContent = part.partNumber;

  // Find the span with class="spec" and fill it with the specification
  card.querySelector(".spec").textContent = part.spec;
}

// When the page first loads, run showCards() so all 10 parts appear
document.addEventListener("DOMContentLoaded", showCards);

// This function was from the starter code — keeping it for the "Get A Quote" button
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Contact our aviation parts team for custom quotes and bulk orders!"
  );
}

// removeLastCard() removes the last part from the array and refreshes the display
// This is the "Remove A Card" button functionality
function removeLastCard() {
  IvyAeroParts.pop();  // Remove the last item from the IvyAeroParts array
  showCards();  // Refresh the page to show the updated list
}
