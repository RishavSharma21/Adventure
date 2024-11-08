

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}
//booking


//Explore 

function toggleIcon() {
    const inputField = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const icon = searchButton.querySelector('i');

    if (inputField.value.length > 0) {
        icon.classList.remove('fa-search');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-search');
    }
}

function clearInput() {
    const inputField = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const icon = searchButton.querySelector('i');

    if (icon.classList.contains('fa-times')) {
        inputField.value = '';
        toggleIcon();  // Reset icon to search when input is cleared
    }
}


window.addEventListener("scroll", updateNav);
const placesData = {
       andhra_pradesh: [
        { name: "Tirumala Venkateswara Temple", address: "Tirumala, Andhra Pradesh", image: "./img/balaji-temple-1.WEBP", url: "https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala" },
        { name: "Belum Caves", address: "Kurnool, Andhra Pradesh", image: "./img/Belum Caves.jpg", url: "https://en.wikipedia.org/wiki/Belum_Caves" },
        { name: "Sri Venkateswara National Park", address: "Chittoor, Andhra Pradesh", image: "./img/Sri-Venkateswara-National-Park.GIF", url: "https://en.wikipedia.org/wiki/Sri_Venkateswara_National_Park" }
    ],
    arunachal_pradesh: [
        { name: "Tawang Monastery", address: "Tawang, Arunachal Pradesh", url: "https://en.wikipedia.org/wiki/Tawang_Monastery" },
        { name: "Ziro Valley", address: "Lower Subansiri, Arunachal Pradesh", url: "https://en.wikipedia.org/wiki/Ziro" },
        { name: "Sela Pass", address: "Tawang, Arunachal Pradesh", url: "https://en.wikipedia.org/wiki/Sela_Pass" }
    ],
    assam: [
        { name: "Kaziranga National Park", address: "Kanchanjuri, Assam", image: "./img/Kaziranga National Park.jpg", url: "https://en.wikipedia.org/wiki/Kaziranga_National_Park" },
        { name: "Kamakhya Temple", address: "Guwahati, Assam", image: "./img/Kamakhya Temple.jpg", url: "https://en.wikipedia.org/wiki/Kamakhya_Temple" },
        { name: "Majuli Island", address: "Majuli, Assam",  image: "./img/Majuli Island.jpg",url: "https://en.wikipedia.org/wiki/Majuli" }
    ],
    bihar: [
        { name: "Mahabodhi Temple", address: "Bodh Gaya, Bihar", image: "./img/Mahabodhi Temple.AVIF",url: "https://en.wikipedia.org/wiki/Mahabodhi_Temple" },
        { name: "Nalanda University", address: "Nalanda, Bihar", image: "./img/Nalanda University.jpg", url: "https://en.wikipedia.org/wiki/Nalanda" },
        { name: "Patna Sahib Gurudwara", address: "Patna, Bihar", image: "./img/patna Sahib Gurudwara.jpeg", url: "https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib" }
    ],
    chhattisgarh: [
        { name: "Chitrakote Falls", address: "Jagdalpur, Chhattisgarh", image: "./img/statue.jpg", url: "https://en.wikipedia.org/wiki/Chitrakote_Falls" },
        { name: "Kanger Valley National Park", address: "Bastar, Chhattisgarh", image: "./img/statue.jpg", url: "https://en.wikipedia.org/wiki/Kanger_Ghati_National_Park" },
        { name: "Bhoramdeo Temple", address: "Kawardha, Chhattisgarh", image: "./img/statue.jpg", url: "https://en.wikipedia.org/wiki/Bhoramdeo_Temple" }
    ],
    goa: [
        { name: "Baga Beach", address: "North Goa", url: "https://en.wikipedia.org/wiki/Baga_Beach" },
        { name: "Basilica of Bom Jesus", address: "Old Goa, North Goa", url: "https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus" },
        { name: "Fort Aguada", address: "Candolim, North Goa", url: "https://en.wikipedia.org/wiki/Fort_Aguada" }
    ],
    gujarat: [
        { name: "Statue of Unity", address: "Kevadia, Gujarat", image: "./img/statue.jpg", url: "https://en.wikipedia.org/wiki/Statue_of_Unity" },
        { name: "Somnath Temple", address: "Somnath, Gujarat", image: "./img/somnathtemple.WEBP", url: "https://en.wikipedia.org/wiki/Somnath_temple" },
        { name: "Gir National Park", address: "Junagadh, Gujarat", image: "./img/girforest.jpg", url: "https://en.wikipedia.org/wiki/Gir_National_Park" }
    ],
    haryana: [
        { name: "Sultanpur Bird Sanctuary", address: "Gurgaon, Haryana", image: "./img/Sultanpur Bird Sanctuary.jpg", url: "https://en.wikipedia.org/wiki/Sultanpur_National_Park" },
        { name: "Surajkund", address: "Faridabad, Haryana", image: "./img/Surajkund.jpg",url: "https://en.wikipedia.org/wiki/Surajkund" },
        { name: "Kurukshetra", address: "Kurukshetra, Haryana", image: "./img/Kurukshetra.webp", url: "https://en.wikipedia.org/wiki/Kurukshetra" }
    ],
    himachal_pradesh: [
        { name: "Jakhoo Temple", address: "Shimla, Himachal Pradesh", image: "./img/download.jpg", url: "https://en.wikipedia.org/wiki/Jakhoo" },
        { name: "Cricket Stadium", address: "Dharamshala, Himachal Pradesh", image: "./img/stadium.jpg", url: "https://en.wikipedia.org/wiki/HPCA_Stadium" },
        { name: "Solang Valley", address: "Manali, Himachal Pradesh", image: "./img/solang.jpg", url: "https://en.wikipedia.org/wiki/Solang_Valley" }
    ],
    jammu_and_kashmir: [
        { name: "Gulmarg", address: "Gulmarg, Jammu and Kashmir", url: "https://en.wikipedia.org/wiki/Gulmarg" },
        { name: "Srinagar", address: "Srinagar, Jammu and Kashmir", url: "https://en.wikipedia.org/wiki/Srinagar" },
        { name: "Pahalgam", address: "Pahalgam, Jammu and Kashmir", url: "https://en.wikipedia.org/wiki/Pahalgam" }
    ],
    jharkhand: [
        { name: "Baidhyanath Temple", address: "Deoghar, Jharkhand", url: "https://en.wikipedia.org/wiki/Baidyanath_Temple" },
        { name: "Hundru Falls", address: "Ranchi, Jharkhand", url: "https://en.wikipedia.org/wiki/Hundru_Falls" },
        { name: "Dassa Falls", address: "Ranchi, Jharkhand", url: "https://en.wikipedia.org/wiki/Dassam_Falls" }
    ],
    karnataka: [
        { name: "Mysore Palace", address: "Mysore, Karnataka", url: "https://en.wikipedia.org/wiki/Mysore_Palace" },
        { name: "Hampi", address: "Hampi, Karnataka", url: "https://en.wikipedia.org/wiki/Hampi" },
        { name: "Coorg", address: "Coorg, Karnataka", url: "https://en.wikipedia.org/wiki/Coorg" }
    ],
    kerala: [
        { name: "Munnar", address: "Munnar, Kerala", url: "https://en.wikipedia.org/wiki/Munnar" },
        { name: "Alleppey", address: "Alleppey, Kerala", url: "https://en.wikipedia.org/wiki/Alappuzha" },
        { name: "Wayanad", address: "Wayanad, Kerala", url: "https://en.wikipedia.org/wiki/Wayanad" }
    ],
    madhya_pradesh: [
        { name: "Khajuraho Temples", address: "Khajuraho, Madhya Pradesh", url: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments" },
        { name: "Sanchi Stupa", address: "Sanchi, Madhya Pradesh", url: "https://en.wikipedia.org/wiki/Sanchi" },
        { name: "Kanha National Park", address: "Mandla, Madhya Pradesh", url: "https://en.wikipedia.org/wiki/Kanha_National_Park" }
    ],
    maharashtra: [
        { name: "Ajanta and Ellora Caves", address: "Aurangabad, Maharashtra", url: "https://en.wikipedia.org/wiki/Ajanta_Caves" },
        { name: "Shirdi", address: "Shirdi, Maharashtra", url: "https://en.wikipedia.org/wiki/Shirdi" },
        { name: "Mahabaleshwar", address: "Satara, Maharashtra", url: "https://en.wikipedia.org/wiki/Mahabaleshwar" }
    ],
    manipur: [
        { name: "Loktak Lake", address: "Moirang, Manipur", url: "https://en.wikipedia.org/wiki/Loktak_Lake" },
        { name: "Imphal War Cemetery", address: "Imphal, Manipur", url: "https://en.wikipedia.org/wiki/Imphal_War_Cemetery" },
        { name: "Kangla Fort", address: "Imphal, Manipur", url: "https://en.wikipedia.org/wiki/Kangla" }
    ],
    meghalaya: [
        { name: "Cherrapunji", address: "Cherrapunji, Meghalaya", url: "https://en.wikipedia.org/wiki/Cherrapunji" },
        { name: "Shillong", address: "Shillong, Meghalaya", url: "https://en.wikipedia.org/wiki/Shillong" },
        { name: "Living Root Bridges", address: "Nongriat, Meghalaya", url: "https://en.wikipedia.org/wiki/Living_root_bridges" }
    ],
    mizoram: [
        { name: "Vantawng Falls", address: "Serchhip, Mizoram", url: "https://en.wikipedia.org/wiki/Vantawng_Falls" },
        { name: "Phawngpui", address: "Lawngtlai, Mizoram", url: "https://en.wikipedia.org/wiki/Phawngpui" },
        { name: "Aizawl", address: "Aizawl, Mizoram", url: "https://en.wikipedia.org/wiki/Aizawl" }
    ],
    nagaland: [
        { name: "Kohima War Cemetery", address: "Kohima, Nagaland", url: "https://en.wikipedia.org/wiki/Kohima_War_Cemetery" },
        { name: "Dzukou Valley", address: "Kohima, Nagaland", url: "https://en.wikipedia.org/wiki/Dz%C3%BCkou_Valley" },
        { name: "Khonoma Village", address: "Khonoma, Nagaland", url: "https://en.wikipedia.org/wiki/Khonoma" }
    ],
    odisha: [
        { name: "Konark Sun Temple", address: "Konark, Odisha", url: "https://en.wikipedia.org/wiki/Konark_Sun_Temple" },
        { name: "Jagannath Temple", address: "Puri, Odisha", url: "https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri" },
        { name: "Chilika Lake", address: "Puri, Odisha", url: "https://en.wikipedia.org/wiki/Chilika_Lake" }
    ],
    punjab: [
        { name: "Golden Temple", address: "Amritsar, Punjab",  image: "./img/goldentemple.jpg",url: "https://en.wikipedia.org/wiki/Golden_Temple" },
        { name: "Jallianwala Bagh", address: "Amritsar, Punjab",  image: "./img/bagh.avif",url: "https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre" },
        { name: "Wagah Border", address: "Amritsar, Punjab",  image: "./img/wagah.jpg",url: "https://en.wikipedia.org/wiki/Wagah_border_ceremony" }
    ],
    rajasthan: [
        { name: "Amber Fort", address: "Jaipur, Rajasthan" , image: "./img/Amber Fort.WEBP", url: "https://en.wikipedia.org/wiki/Amer_Fort" },
        { name: "Udaipur City Palace", address: "Udaipur, Rajasthan",   image: "./img/Udaipur City Palace.jpg",url: "https://en.wikipedia.org/wiki/City_Palace,_Udaipur" },
        { name: "Jaisalmer Fort", address: "Jaisalmer, Rajasthan",  image: "./img/Jaisalmer Fort.jpg", url: "https://en.wikipedia.org/wiki/Jaisalmer_Fort" }
    ],
    sikkim: [
        { name: "Tsomgo Lake", address: "Gangtok, Sikkim", image: "./img/Tsomgo Lake.WEBP", url: "https://en.wikipedia.org/wiki/Tsomgo_Lake" },
        { name: "Nathula Pass", address: "Gangtok, Sikkim", image: "./img/Nathula.AVIF", url: "https://en.wikipedia.org/wiki/Nathu_La" },
        { name: "Rumtek Monastery", address: "Gangtok, Sikkim", image: "./img/Rumtek Monastery.jpg", url: "https://en.wikipedia.org/wiki/Rumtek_Monastery" }
    ],
    tamilnadu: [
        { name: "Meenakshi Temple", address: "Madurai, Tamil Nadu",  image: "./img/Meenakshi Temple.jpg", url: "https://en.wikipedia.org/wiki/Meenakshi_Temple" },
        { name: "Marina Beach", address: "Chennai, Tamil Nadu",  image: "./img/Marina Beach.jpg", url: "https://en.wikipedia.org/wiki/Marina_Beach" },
        { name: "Ooty", address: "Ooty, Tamil Nadu",  image: "./img/Ooty.jpg",url: "https://en.wikipedia.org/wiki/Ooty" }
    ],
    telangana: [
        { name: "Charminar", address: "Hyderabad, Telangana", url: "https://en.wikipedia.org/wiki/Charminar" },
        { name: "Golconda Fort", address: "Hyderabad, Telangana", url: "https://en.wikipedia.org/wiki/Golkonda" },
        { name: "Ramoji Film City", address: "Hyderabad, Telangana", url: "https://en.wikipedia.org/wiki/Ramoji_Film_City" }
    ],
    tripura: [
        { name: "Ujjayanta Palace", address: "Agartala, Tripura", url: "https://en.wikipedia.org/wiki/Ujjayanta_Palace" },
        { name: "Neermahal", address: "Melaghar, Tripura", url: "https://en.wikipedia.org/wiki/Neermahal" },
        { name: "Unakoti", address: "Kailashahar, Tripura", url: "https://en.wikipedia.org/wiki/Unakoti" }
    ],
    uttarpradesh: [
        { name: "Taj Mahal", address: "Agra, Uttar Pradesh", image: "./img/Taj Mahal.WEBP", url: "https://en.wikipedia.org/wiki/Taj_Mahal" },
        { name: "Varanasi Ghats", address: "Varanasi, Uttar Pradesh",image: "./img/Varanasi Ghats.jpg", url: "https://en.wikipedia.org/wiki/Varanasi" },
        { name: "Fatehpur Sikri", address: "Fatehpur Sikri, Uttar Pradesh",image: "./img/Fatehpur Sikri.jpg", url: "https://en.wikipedia.org/wiki/Fatehpur_Sikri" }
    ],
    uttarakhand: [
        { name: "Nainital", address: "Nainital, Uttarakhand",image: "./img/Nainital.jpeg", url: "https://en.wikipedia.org/wiki/Nainital" },
        { name: "Mussoorie", address: "Mussoorie, Uttarakhand",image: "./img/Mussoorie.jpg", url: "https://en.wikipedia.org/wiki/Mussoorie" },
        { name: "Jim Corbett National Park", address: "Nainital, Uttarakhand",image: "./img/Jim Corbett National Park.jpg", url: "https://en.wikipedia.org/wiki/Jim_Corbett_National_Park" }
    ],
    west_bengal: [
        { name: "Sundarbans", address: "Sundarbans, West Bengal",image: "./img/sundarban.jpg", url: "https://en.wikipedia.org/wiki/Sundarbans" },
        { name: "Darjeeling", address: "Darjeeling, West Bengal",image: "./img/Darjeeling.jpg", url: "https://en.wikipedia.org/wiki/Darjeeling" },
        { name: "Victoria Memorial", address: "Kolkata, West Bengal",image: "./img/Victoria Memorial.jpg", url: "https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata" }
    ],
    andaman_and_nicobar_islands: [
        { name: "Cellular Jail", address: "Port Blair, Andaman and Nicobar Islands",image: "./img/Cellular Jail.jpg", },
        { name: "Radhanagar Beach", address: "Havelock Island, Andaman and Nicobar Islands",image: "./img/Radhanagar Beach.jpg", },
        { name: "Ross Island", address: "Ross Island, Andaman and Nicobar Islands",image: "./img/Ross Island.jpg",  },

    ],
    chandigarh: [
        { name: "Rock Garden", address: "Chandigarh",  image: "./img/rock.jpg",url: "https://en.wikipedia.org/wiki/Golden_Temple" },
        { name: "Sukhna Lake", address: "Chandigarh",  image: "./img/sukhna.jpg",url: "https://en.wikipedia.org/wiki/Golden_Temple" },
        { name: "Rose Garden", address: "Chandigarh",  image: "./img/rose.jpg",url: "https://en.wikipedia.org/wiki/Golden_Temple" },

    ],
    dadra_and_nagar_haveli_and_daman_and_diu: [
        { name: "Jampore Beach", address: "Daman, Dadra and Nagar Haveli and Daman and Diu" },
        { name: "Diu Fort", address: "Diu, Dadra and Nagar Haveli and Daman and Diu" },
        { name: "Lion Safari Wildlife Park", address: "Silvassa, Dadra and Nagar Haveli and Daman and Diu" },

    ],
    lakshadweep: [
        { name: "Agatti Island", address: "Agatti, Lakshadweep", image: "./img/dummy-place.webp" },
        { name: "Bangaram Island", address: "Bangaram, Lakshadweep", image: "./img/dummy-place.webp" },
        { name: "Kavaratti Island", address: "Kavaratti, Lakshadweep", image: "./img/dummy-place.webp" },

    ],
    delhi: [
        { name: "Red Fort", address: "Old Delhi, Delhi" ,image:"./img/redfort.jpg",url:"https://en.wikipedia.org/wiki/Red_Fort"},
        { name: "Qutub Minar", address: "Mehrauli, Delhi"  ,image:"./img/qutubminar.jpg",url:"https://en.wikipedia.org/wiki/Qutb_Minar"},
        { name: "India Gate", address: "New Delhi, Delhi" ,image:"./img/indiagate.jpg",url:"https://en.wikipedia.org/wiki/India_Gate" },

    ],
    pondicherry: [
        { name: "Auroville", address: "Auroville, Pondicherry" },
        { name: "Promenade Beach", address: "Pondicherry" },
        { name: "Paradise Beach", address: "Chunnambar, Pondicherry" },

    ],

    ladakh: [
        { name: "Pangong Lake", address: "Pangong, Ladakh",image:"./img/pangong.jpg" ,url:"https://en.wikipedia.org/wiki/Pangong_Tso"},
        { name: "Magnetic Hill", address: "Leh, Ladakh",image:"./img/magnetic.AVIF",url:"https://en.wikipedia.org/wiki/Magnetic_Hill_(India)" },
        { name: "Nubra Valley", address: "Nubra, Ladakh",image:"./img/nubra.jpg",url:"https://simple.wikipedia.org/wiki/Nubra_Valley" },

    ],
};




document.getElementById('search-button').addEventListener('click', function (event) {
    event.preventDefault();
    performSearch();
});

document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results

    if (!query) {
        return; // If the input is empty, do nothing
    }

    const defaultImage = "./img/dummy-place.webp";
    let resultsFound = false;

    // Iterate over the placesData object
    for (const [location, places] of Object.entries(placesData)) {
        if (location.includes(query)) {
            places.forEach(place => {
                displayResult(place, results, defaultImage);
                resultsFound = true;
            });
        } else {
            places.forEach(place => {
                if (place.name.toLowerCase().includes(query) || place.address.toLowerCase().includes(query)) {
                    displayResult(place, results, defaultImage);
                    resultsFound = true;
                }
            });
        }
    }

    if (!resultsFound) {
        results.innerHTML = '<p>No results found.</p>';
    }
}

function displayResult(place, results, defaultImage) {
    const image = place.image || defaultImage; // Use default image if none is provided
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.innerHTML = `
        <img src="${image}" alt="${place.name}" class="result-image">
        <div class="result-info">
            <strong>${place.name}</strong><br>${place.address}
        </div>`;
    resultItem.addEventListener('click', function () {
        window.open(place.url, '_blank'); // Open the URL in a new tab
    });
    results.appendChild(resultItem);
}

// Contact
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // You can use Fetch API or XMLHttpRequest here to submit the form data if needed
    // Example using Fetch API:
    const formData = new FormData(event.target);
    fetch(event.target.action, {
        method: event.target.method,
        body: formData,
    })
    .then(response => response.json())
    .then(result => {
        console.log(result); // Handle the response from the server here

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('country').selectedIndex = 0; // Reset to the first option
        document.getElementById('remarks').value = '';

        // Optionally, display a success message
        alert('Your message has been sent successfully!');
    })
    .catch(error => console.error('Error:', error));
}

