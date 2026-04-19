// started from the SEA starter code which used a simple titles array and 3 TV shows
// IvyAeroParts Inventory Catalog  built by Noel A Bobadilla Castillo
// i upgraded it into a full aviation parts catalog with real data, search, and category filter

//  DATA 
// the starter code used a basic array of strings like ["Fresh Prince", "Curb Your Enthusiasm"]
// i changed it to an array of objects so each part could carry all its info in one place
// each object has 6 fields: name, category, price, partNumber, spec, imageURL
// dot notation lets me grab any field i need — like part.name or part.price

let IvyAeroParts = [
  { name: "Honeywell Main Wheel", category: "Hardware", price: 4000.00, partNumber: 1015, spec: "Lightweight aluminum alloy, 10,000 cycle life", imageURL: "https://honeywell.scene7.com/is/image/Honeywell65/hon-aero-32520ajm-main-and-nose-wheels" },
  { name: "Hawker SBS J16 Battery", category: "Avionics", price: 263.00, partNumber: 1032, spec: "Sealed dry-cell, 12V, 520 cranking amps", imageURL: "https://www.batterymart.com/merchant2/graphics/00000001/12/SBS-J16_hawker_main_400x400.jpg" },
  { name: "SD-505 Sanden Air Conditioning Compressor", category: "Fluids", price: 175.00, partNumber: 1062, spec: "R-12 refrigerant, Suniso-5GS oil compatible", imageURL: "https://cdn11.bigcommerce.com/s-lh7wonygtd/images/stencil/1280x1280/products/138052/1544409/N92884-678__83772.1752688229.jpg?c=1" },
  { name: "Cessna R182 Window Assembly", category: "Hardware", price: 125.00, partNumber: 1110, spec: "Clear cabin door window, LH side, durable acrylic", imageURL: "https://i.ebayimg.com/images/g/WOgAAeSwVZJplh7c/s-l1600.webp" },
  { name: "RealSimGear G1000 PFD/MFD Module", category: "Avionics", price: 699.00, partNumber: 1910, spec: "Primary flight display, X-Plane & MSFS compatible", imageURL: "https://realsimgear.com/cdn/shop/files/G1000PFDHero.jpg?v=1732132490&width=1000" },
  { name: "Parker Hannifin Hydraulic Pump", category: "Fluids", price: 573.00, partNumber: 1203, spec: "Controls landing gear, flaps, brakes, high-pressure rated", imageURL: "https://cdn.radwell.com/productgoogleimages/4682e27aae5b495883f4091ca9dfbd11.jpg" },
  { name: "Garmin TCAS Receiver Transmitter", category: "Avionics", price: 2400.00, partNumber: 1304, spec: "Traffic collision avoidance system, real-time detection", imageURL: "https://i0.wp.com/www.aeroproavionics.com/wp-content/uploads/2014/02/gts8000.jpg" },
  { name: "Goodyear Flight Custom III Tire", category: "Hardware", price: 568.00, partNumber: 1405, spec: "Deeper tread depth, Kevlar belt package", imageURL: "https://cdn.aircraftspruce.com/cache/400-400-/catalog/graphics/flightcustom3.jpg" },
  { name: "Garmin VHF 215 AIS Marine Radio", category: "Avionics", price: 749.99, partNumber: 1506, spec: "Communication system, 10 NOAA weather channels", imageURL: "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2018/30/150/g150VHF215A-M.jpg" },
  { name: "PPG Aerospace Windshield", category: "Hardware", price: 1377.99, partNumber: 1607, spec: "New item for Alenia ATR-42/72 w/ CERTS", imageURL: "https://th.bing.com/th?id=OPHS.hlG2Po5f%2bSr6HQ474C474&w=144&h=130&c=17&o=6&pid=21.1&dpr=2" }
];


// --- showCards ---
// based on the starter code version but i made two changes:
// 1. added a parameter so i can pass in a filtered array from search or category filter
//    if nothing is passed in it defaults to showing all parts (IvyAeroParts)
// 2. the loop now grabs full objects instead of just strings
//
// i ran into a bug where cards were doubling up every time i searched
// turns out i wasnt clearing the container before adding new cards
// cardContainer.innerHTML = "" fixes that — wipes it clean before each render

function showCards(arrayToDisplay = IvyAeroParts) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear old cards so they dont stack up
  const templateCard = document.querySelector(".card"); // grabsa the hidden template

  // i goes from 0 to the length of the array, one part at a time,  like a conveyor belt
  for (let i = 0; i < arrayToDisplay.length; i++) {
    let part = arrayToDisplay[i];
    const nextCard = templateCard.cloneNode(true); // copies the full template including inner html
    editCardContent(nextCard, part);
    cardContainer.appendChild(nextCard); // attached the finished card to the page
  }
}


//  editCardContent 
// the starter version only filled in a title and image
// i expanded it to fill all 6 fields using querySelector to find each spot in the card
// struggled here because i kept getting null errors — the class names in the spans
// had to match exactly what querySelector was looking for, one typo breaks it

function editCardContent(card, part) {
  card.style.display = "block"; // template starts hidden, this makes the clone visible
  card.querySelector("h2").textContent = part.name;
  card.querySelector("img").src = part.imageURL;
  card.querySelector(".category").textContent = part.category;
  card.querySelector(".price").textContent = part.price;
  card.querySelector(".partNumber").textContent = part.partNumber;
  card.querySelector(".spec").textContent = part.spec;
  console.log("new card:", part.name); // helps me verify each card is loading correctly
}


// quoteAlert  updated the message to fit the aviation theme
function quoteAlert() {
  console.log("Button Clicked!");
  alert("Contact our aviation parts team for custom quotes!");
}


// removeLastCard  same idea as the starter
// pop() removes the last item from the array, showCards rerenders the rest
function removeLastCard() {
  IvyAeroParts.pop();
  showCards();
}


//  DOMContentLoaded 
// this was one of the biggest bugs i ran into during this project
// i had addEventListener for search and category sitting outside DOMContentLoaded
// the script was trying to grab searchInput and categoryFilter before the HTML even loaded
// that caused, no cards showing up
// the fix: wrap everything inside DOMContentLoaded so nothing runs until the page is ready

document.addEventListener("DOMContentLoaded", function() {
  showCards(); // show all 10 parts the moment the page finishes loading

  //  Search Feature 
  // addEventListener with "input" fires every single time the user types a character
  // toLowerCase makes both sides lowercase so the search isnt case sensitive
  // "garmin" will still match "Garmin" because both get converted before comparing
  // includes checks if the string contains the search text anywhere inside it
  // i loop through all parts, push the ones that match into results, then call showCards

  document.getElementById("searchInput").addEventListener("input", function() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();

    let results = [];
    for (let i = 0; i < IvyAeroParts.length; i++) {
      let part = IvyAeroParts[i];
      if (part.name.toLowerCase().includes(searchText) || part.partNumber.toString().includes(searchText)) {
        results.push(part); // this part matched so add it to results
      }
    }
    showCards(results); // show only the parts that matched
  });


  //  Category Filter 
  // addEventListener with "change" fires when the user picks a new option from the dropdown
  // i loop through all parts and keep only the ones where part.category matches the selection
  // "all" is a special value, if thats selected i push every part through

  document.getElementById("categoryFilter").addEventListener("change", function() {
    let selected = document.getElementById("categoryFilter").value;

    let results = [];
    for (let i = 0; i < IvyAeroParts.length; i++) {
      let part = IvyAeroParts[i];
      if (selected === "all" || part.category === selected) {
        results.push(part);
      }
    }
    showCards(results);
  });

});