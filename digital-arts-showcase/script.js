// JavaScript for the navigation
document.addEventListener("DOMContentLoaded", () => {
    console.info(`${document.title}: DOM Loaded`);

    const navMainMenuToggle = document.querySelector(".nav-main-menu-toggle");

    navMainMenuToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const ariaControls = navMainMenuToggle.getAttribute("aria-controls");
        if (navMainMenuToggle.getAttribute("aria-expanded") === "false") {
            navMainMenuToggle.setAttribute("aria-expanded", "true");
            navMainMenuToggle.setAttribute("aria-label", "Close menu");
            navMainMenuToggle.parentElement.querySelector(`#${ariaControls}`).toggleAttribute("hidden");
        } else {
            navMainMenuToggle.setAttribute("aria-expanded", "false");
            navMainMenuToggle.setAttribute("aria-label", "Open menu");
            navMainMenuToggle.parentElement.querySelector(`#${ariaControls}`).toggleAttribute("hidden");
        }
    });
});


//JavaScript for the Map on Contact page.
/**
 * Google Maps Integration
 * googleMapKey: Your Google Maps API key
 * lat: Latitude
 * lon: Longitude
 * mapBaseColor: Base color for the map
 * mapZoom: Zoom level for the map
 * heading: The heading for the map marker
 * subheading: The subheading for the map marker
 * date: The date of the event
 * time: The time of the event
 */
const googleMapKey = "AIzaSyDrq6itjJPber61m46hdD6xu_fwZ5zvnrQ";
const lat = 44.526376;
const lon = -88.107691;

const mapBaseColor = "#8bdbf5";
const mapZoom = 14;

const heading = "2024 Digital Arts Showcase";
const subheading = "NWTC - Digital Arts Atrium";
const date = "Thursday, December 12th, 2024";
const time = "4:30pm - 6:30pm";

/**
 * Loads the Google Maps script if the map element exists.
 * ID map must be present on the page.
 */
if (document.getElementById("map")) {
    loadScript();
}

/**
 * Loads the Google Maps script dynamically.
 */

function loadScript() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapKey}&loading=async&callback=init`;
    document.querySelector("head").appendChild(script);
}

/**
 * Initializes the Google Maps integration.
 */
function init() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: lat,
            lng: lon,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: mapZoom,
        styles: [
            {
                stylers: [{ hue: `${mapBaseColor}` }, { saturation: +50 }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ lightness: 100 }, { visibility: "simplified" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ hue: `${mapBaseColor}` }, { saturation: +80 }],
            },
            {
                featureType: "transit",
                elementType: "labels",
                stylers: [{ hue: `${mapBaseColor}` }, { saturation: +80 }],
            },
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [{ visibility: "on" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ hue: `${mapBaseColor}` }, { saturation: +60 }],
            },
        ],
    });

    var marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lon,
        },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "images/nwtc_map.webp",
    });

    var infowindow = new google.maps.InfoWindow({
        content: `<h4>${heading}</h4><span>${subheading}s</span><ul><li>${date}</li><li>${time}</li></ul>`,
    });
    infowindow.open(map, marker);
}

//Headroom Navigation 
/**
 * Headroom.js
 * Hide the navigation bar when scrolling down and show it when scrolling up
 * - https://wicky.nillia.ms/headroom.js/
 * elNavMain
 * - the navigation element to hide/show
 * - has the class .nav-main
 * headroom
 * - the instance of Headroom
 */
const elNavMain = document.querySelector(".nav-main");
const headroomNav = new Headroom(elNavMain);
headroomNav.init();

// JavaScript for FancyBox
/**
 * Fancybox Integration
 * Fancyapps Fancybox is a lightbox library that can be used to display images
 * Look for elements with the data-fancybox attribute
 * and bind Fancybox to them.
 * User can click on an anchor element with the data-fancybox attribute
 * to open the image in a lightbox.
 * @argument {string} [data-fancybox] - The data attribute to bind Fancybox to
 * @argument {object} [options] - Custom options for Fancybox
 */
if (typeof Fancybox === "function") {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
}

