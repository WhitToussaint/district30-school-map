//list of schools sourced from District 30 spreadsheet from Superintendent, latitude and longitude from Google Maps, city council data, and other pertinent information from CEC 30 Website

const schools = [
    {
        "school-name": "P.S. 002",
        "address": "75-10 21st Avenue, East Elmhurst, NY 11370",
        "longitude": -73.89418159,
        "latitude": 40.77000681,
        "grades": "K - 5",
        "principal": "Amy Goldman",
        "telephone-number": "718-728-1459",
        "cec-liaison": "Fatima Lakrafli",
        "city-council-district": "District 22",
        "image": "ps002.jpg"
    },
    {
        "school-name": "P.S. 011",
        "address": "54-25 Skillman Avenue, Woodside, NY 11377",
        "longitude": -73.90916969,
        "latitude": 40.74571882,
        "grades": "PK - 6",
        "principal": "Elizabeth Jorge-Pena",
        "telephone-number": "718-779-2090",
        "cec-liaison": "Esther Verhalle",
        "city-council-district": "District 26",
        "image": "ps011.jpg"
    },
    {
        "school-name": "P.S. 017",
        "address": "28-37 29th Street, Long Island City, NY 11102",
        "longitude": -73.92318618,
        "latitude": 40.76814529,
        "grades": "PK - 5",
        "principal": "Rebecca Heyward",
        "telephone-number": "718-278-1220",
        "cec-liaison": "Marisela Santos",
        "city-council-district": "District 22",
        "image": "ps017.jpg"
    },
    {
        "school-name": "P.S. 069",
        "address": "77-02 37th Avenue, Jackson Heights, NY 11372",
        "longitude": -73.88850545,
        "latitude": 40.74902329,
        "grades": "PK - 5",
        "principal": "Nicole Ciorciari, I.A.",
        "telephone-number": "718-424-7700",
        "cec-liaison": "Deborah Alexander",
        "city-council-district": "District 25",
        "image": "ps069.jpg"
    },
    {
        "school-name": "P.S. 070",
        "address": "30-44 43rd Street, Astoria, NY 11103",
        "longitude": -73.91366874,
        "latitude": 40.76189689,
        "grades": "PK - 5",
        "principal": "Izett Thomas",
        "telephone-number": "718-728-4646",
        "cec-liaison": "Kristina Berrouet",
        "city-council-district": "District 22",
        "image": "ps070.jpeg"
    },
    {
        "school-name": "P.S. 076",
        "address": "36-36 10th Street, Astoria, NY 11106",
        "longitude": -73.94143276603076,
        "latitude": 40.76148771156182,
        "grades": "3K - 5",
        "principal": "Timothy Miller",
        "telephone-number": "718-361-7464",
        "cec-liaison": "Esther Verhalle",
        "city-council-district": "District 26",
        "image": "ps076.jpeg"
    },
    {
        "school-name": "P.S./I.S. 078",
        "address": "46-08 5th Street, Long Island City, NY 11101-5370",
        "longitude": -73.95531613,
        "latitude": 40.74731595,
        "grades": "PK - 8 ",
        "principal": "Louis Pavone",
        "telephone-number": "718-392-5402",
        "cec-liaison": "Deborah Alexander",
        "city-council-district": "District 26",
        "image": "psis78.jpeg"
    },
    {
        "school-name": "P.S. 084",
        "address": "22-45 41st Street, Astoria, NY 11105",
        "longitude": -73.90615112,
        "latitude": 40.77144238,
        "grades": "PK - 5",
        "principal": "Dominic Armano",
        "telephone-number": "718-278-1915",
        "cec-liaison": "Fatima Lakrafli",
        "city-council-district": "District 22",
        "image": "ps084.jpeg"
    },
    {
        "school-name": "P.S. 085",
        "address": "23-70 31st Street, Astoria, NY 11105",
        "longitude": -73.91485363,
        "latitude": 40.77319575,
        "grades": "PK - 5",
        "principal": "Ann Gordon-Chang",
        "telephone-number": "718-278-3630",
        "cec-liaison": "Deborah Alexander",
        "city-council-district": "District 22",
        "image": "ps085.jpeg"
    },
    {
        "school-name": "P.S. 092",
        "address": "99-01 34th Avenue, Corona, NY 11368",
        "longitude": -73.86897743,
        "latitude": 40.75736848,
        "grades": "PK - 5",
        "principal": "Daisy Morales",
        "telephone-number": "718-533-1013",
        "cec-liaison": "Johnathan Greenberg",
        "city-council-district": "District 21",
        "image": "ps092.jpeg"
    },
    {
        "school-name": "P.S./I.S. 111",
        "address": "37-15 13th Street, Long Island City, NY 11101",
        "longitude": -73.93893921,
        "latitude": 40.75863747,
        "grades": "PK - 8 ",
        "principal": "Dionne Jaggon",
        "telephone-number": "718-786-2073",
        "cec-liaison": "Juliette-Noor Haji",
        "city-council-district": "District 26",
        "image": "psis111.jpeg"
    },
    {
        "school-name": "P.S. 112",
        "address": "25-05 37th Avenue, Long Island City, NY 11101",
        "longitude": -73.93427168,
        "latitude": 40.75714087,
        "grades": "PK - 5",
        "principal": "Dov Witkes",
        "telephone-number": "718-784-5250",
        "cec-liaison": "Kelly Craig",
        "city-council-district": "District 26",
        "image": "ps112.jpeg"
    },
    {
        "school-name": "P.S./I.S. 122",
        "address": "21-21 Ditmars Boulevard, Astoria, NY 11105",
        "longitude": -73.9162258,
        "latitude": 40.78046605,
        "grades": "PK - 8 ",
        "principal": "Anna Aprea",
        "telephone-number": "718-721-6410",
        "cec-liaison": "Victoria Medelius",
        "city-council-district": "District 22",
        "image": "ps122.jpeg"
    },
    {
        "school-name": "P.S./I.S. 127",
        "address": "98-01 25th Avenue, East Elmhurst, NY 11369",
        "longitude": -73.87124744,
        "latitude": 40.76501676,
        "grades": "PK - 8",
        "principal": "Eva Delgado Sanabria",
        "telephone-number": "718-446-4700",
        "cec-liaison": "Fatima Lakrafli",
        "city-council-district": "District 21",
        "image": "psis127.jpeg"
    },
    {
        "school-name": "P.S. 148",
        "address": "89-02 32nd Avenue, East Elmhurst, NY 11369",
        "longitude": -73.8785724,
        "latitude": 40.75844468,
        "grades": "PK - 5 ",
        "principal": "Yolanda Harvey",
        "telephone-number": "718-898-8181",
        "cec-liaison": "Johnathan Greenberg",
        "city-council-district": "District 25",
        "image": "ps148.jpeg"
    },
    {
        "school-name": "P.S. 149",
        "address": "93-11 34th Avenue, Jackson Heights, NY 11372",
        "longitude": -73.87433629,
        "latitude": 40.75524977,
        "grades": "PK - 5 ",
        "principal": "Onalis Hernandez",
        "telephone-number": "718-898-3630",
        "cec-liaison": "Whitney Toussaint",
        "city-council-district": "District 25",
        "image": "ps149.jpeg"
    },
    {
        "school-name": "P.S. 150",
        "address": "40-01 43rd Avenue, Long Island City, NY 11104",
        "longitude": -73.92336291,
        "latitude": 40.74631633,
        "grades": "PK - 5 ",
        "principal": "Carmen Parache",
        "telephone-number": "718-784-2252",
        "cec-liaison": "Kelly Craig",
        "city-council-district": "District 26",
        "image": "ps150.jpeg"
    },
    {
        "school-name": "P.S. 151",
        "address": "50-05 31st Avenue, Woodside, NY 11377",
        "longitude": -73.90830519,
        "latitude": 40.75761776,
        "grades": "PK - 5 ",
        "principal": "Dr. Samantha Maisonet",
        "telephone-number": "718-728-2676",
        "cec-liaison": "Kelly Craig",
        "city-council-district": "District 22",
        "image": "ps151.jpeg"
    },
    {
        "school-name": "P.S. 152",
        "address": "33-52 62nd Street, Woodside, NY 11377",
        "longitude": -73.90003727,
        "latitude": 40.75923004,
        "grades": "PK - 5",
        "principal": "Lisa Russo, I.A.",
        "telephone-number": "718-429-3141",
        "cec-liaison": "Kelly Craig",
        "city-council-district": "District 26",
        "image": "ps152.jpeg"
    },
    {
        "school-name": "P.S. 166",
        "address": "33-09 35th Avenue, Astoria, NY 11106",
        "longitude": -73.92608257,
        "latitude": 40.7576219,
        "grades": "PK - 5",
        "principal": "Jessica Geller",
        "telephone-number": "718-786-6703",
        "cec-liaison": "Whitney Toussaint",
        "city-council-district": "District 26",
        "image": "ps166.jpeg"
    },
    {
        "school-name": "P.S. 171",
        "address": "14-14 29th Avenue, Astoria, NY 11102",
        "longitude": -73.92899747,
        "latitude": 40.77113105,
        "grades": "PK - 5 ",
        "principal": "Laura Kavourias",
        "telephone-number": "718-932-0909",
        "cec-liaison": "Marisela Santos",
        "city-council-district": "District 22",
        "image": "ps171.jpg"
    },
    {
        "school-name": "P.S. 212",
        "address": "34-25 82nd Street, Jackson Heights, NY 11372",
        "longitude": -73.8848171,
        "latitude": 40.75328314,
        "grades": "PK - 5",
        "principal": "Laura Miniero",
        "telephone-number": "718-898-2563",
        "cec-liaison": "Victoria Medelius",
        "city-council-district": "District 25",
        "image": "ps212.jpeg"
    },
    {
        "school-name": "P.S. 222",
        "address": "86-15 37th Avenue, Jackson Heights, NY 11372",
        "longitude": -73.8799502,
        "latitude": 40.75049603,
        "grades": "PK - 2 ",
        "principal": "Yvonne Marrero",
        "telephone-number": "718-429-2563",
        "cec-liaison": "Kristina Berrouet",
        "city-council-district": "District 25",
        "image": "ps222.jpeg"
    },
    {
        "school-name": "P.S. 228",
        "address": "32-65 93rd Street, East Elmhurst, NY 11369",
        "longitude": -73.87492233,
        "latitude": 40.757136,
        "grades": "PK - 2 ",
        "principal": "Olga Guzman",
        "telephone-number": "718-889-5799",
        "cec-liaison": "Kelly Craig",
        "city-council-district": "District 21",
        "image": "ps228.jpeg"
    },
    {
        "school-name": "P.S. 234",
        "address": "30-15 29th Street, Astoria, NY 11102",
        "longitude": -73.92332813,
        "latitude": 40.76718575,
        "grades": "PK - 5",
        "principal": "Dora Danner",
        "telephone-number": "718-956-2760",
        "cec-liaison": "Juliette-Noor Haji",
        "city-council-district": "District 22",
        "image": "ps234.jpeg"
    },
    {
        "school-name": "P.S. 280",
        "address": "34-20 94th Street, Jackson Heights, NY 11372",
        "longitude": -73.87387606,
        "latitude": 40.75414183,
        "grades": "K - 5",
        "principal": "Dr. Milagros Dueno, I.A.",
        "telephone-number": "718-424-9031",
        "cec-liaison": "Michelle Moore",
        "city-council-district": "District 25",
        "image": "ps280.jpg"
    },
    {
        "school-name": "P.S. 329",
        "address": "26-25 97th Street, East Elmhurst, NY 11369",
        "longitude": -73.87206829,
        "latitude": 40.76187436,
        "grades": "K - 5",
        "principal": "Rachel Staroba- Hallenbeck",
        "telephone-number": "718-505-6050",
        "cec-liaison": "Michelle Moore",
        "city-council-district": "District 21",
        "image": "ps329.jpg"
    },
    {
        "school-name": "P.S./I.S. 300",
        "address": "28-37 29th Street, Astoria, NY 11102",
        "longitude": -73.92318618,
        "latitude": 40.76814529,
        "grades": "K - 4",
        "principal": "Sonita Ramkishun",
        "telephone-number": "718-626-8502",
        "cec-liaison": "Fatima Lakrafli",
        "city-council-district": "District 22",
        "image": "psis300lower.jpg"
    },
    {
        "school-name": "P.S./I.S. 300",
        "address": "31-51 21st Street, Astoria, NY 11106",
        "longitude": -73.92995518,
        "latitude": 40.76619236,
        "grades": "5 - 8",
        "principal": "Sonita Ramkishun",
        "telephone-number": "718-726-0501",
        "cec-liaison": "Fatima Lakrafli",
        "city-council-district": "District 22",
        "image": "psis300upper.jpeg"
    },
    {
        "school-name": "P.S. 361",
        "address": "39-07 57th Street, Woodside, NY 11377",
        "longitude": -73.90568392,
        "latitude": 40.74802466,
        "grades": "PK - 5",
        "principal": "Dr. Nayeon Naomi Hwang",
        "telephone-number": "718-592-3300",
        "cec-liaison": "Whitney Toussaint/Kristina Berrouet",
        "city-council-district": "District 26",
        "image": "ps361.jpeg"
    },
    {
        "school-name": "P.S. 384",
        "address": "1-35 57 Avenue, Long Island City, NY 11101",
        "longitude": -73.96081083,
        "latitude": 40.73911811,
        "grades": "PK - 5",
        "principal": "Christine Britton",
        "telephone-number": "718-391-4667",
        "cec-liaison": "Michelle Moore/Kelly Craig",
        "city-council-district": "District 26",
        "image": "ps384.jpeg"
    },
    {
        "school-name": "P.S. 398",
        "address": "69-01 34 Avenue, Woodside, NY 11377",
        "longitude": -73.89690148,
        "latitude": 40.75287368,
        "grades": "3K - 4",
        "principal": "Erica Urena-Thus",
        "telephone-number": "929-463-7200",
        "cec-liaison": "Esther Verhalle",
        "city-council-district": "District 25",
        "image": "ps398.jpeg"
    },
    {
        "school-name": "I.S. 010",
        "address": "45-11 31st Avenue, Astoria, NY 11103",
        "longitude": -73.91250943,
        "latitude": 40.75969716,
        "grades": "6-8",
        "principal": "Clemente Lopes",
        "telephone-number": "718-278-7054",
        "cec-liaison": "Kristina Berrouet",
        "city-council-district": "District 22",
        "image": "is010.jpeg"
    },
    {
        "school-name": "I.S. 126",
        "address": "31-51 21st Street, Astoria, NY 11106",
        "longitude": -73.92995518,
        "latitude": 40.76619236,
        "grades": "6-8",
        "principal": "Alexander Angueira",
        "telephone-number": "718-274-8316",
        "cec-liaison": "Marisela Santos",
        "city-council-district": "District 22",
        "image": "is126.jpeg"
    },
    {
        "school-name": "I.S. 141",
        "address": "37-11 21st Avenue, Astoria, NY 11105",
        "longitude": -73.90472353,
        "latitude": 40.77565967,
        "grades": "6-8",
        "principal": "Vanessa Williams",
        "telephone-number": "718-278-6403",
        "cec-liaison": "Michelle Moore",
        "city-council-district": "District 22",
        "image": "is141.jpeg"
    },
    {
        "school-name": "I.S. 145",
        "address": "33-34 80th Street, Jackson Heights, NY 11372",
        "longitude": -73.8874998,
        "latitude": 40.75459272,
        "grades": "6-8",
        "principal": "Ivan Rodriguez",
        "telephone-number": "718-457-1242",
        "cec-liaison": "Johnathan Greenberg",
        "city-council-district": "District 25",
        "image": "is145.jpeg"
    },
    {
        "school-name": "I.S. 204",
        "address": "36-41 28th Street, Astoria, NY 11106",
        "longitude": -73.93230397,
        "latitude": 40.75726029,
        "grades": "6-8",
        "principal": "Faye Erstejn-Kotzer",
        "telephone-number": "718-937-1463",
        "cec-liaison": "Whitney Toussaint",
        "city-council-district": "District 26",
        "image": "is204.jpeg"
    },
    {
        "school-name": "I.S. 227",
        "address": "32-02 Junction Boulevard, East Elmhurst, NY 11369",
        "longitude": -73.87459446,
        "latitude": 40.75772038,
        "grades": "5-8",
        "principal": "Helen Ponella",
        "telephone-number": "718-335-7500",
        "cec-liaison": "Victoria Medelius",
        "city-council-district": "District 21",
        "image": "is227.jpeg"
    },
    {
        "school-name": "I.S.230",
        "address": "73-10 34th Avenue, Jackson Heights, NY 11372",
        "longitude": -73.89281925,
        "latitude": 40.75280232,
        "grades": "6-8",
        "principal": "Ajith Satyanarayana",
        "telephone-number": "718-335-7648",
        "cec-liaison": "Victoria Medelius",
        "city-council-district": "District 25",
        "image": "is230.jpeg"
    },
    {
        "school-name": "I.S. 235",
        "address": "30-14 30th Street, Astoria, NY  11102",
        "longitude": -73.92335781,
        "latitude": 40.76722365,
        "grades": "6-8",
        "principal": "Lisa Lin",
        "telephone-number": "718-956-4140",
        "cec-liaison": "Johnathan Greenberg",
        "city-council-district": "District 22",
        "image": "is235.jpeg"
    },
    {
        "school-name": "I.S. 291",
        "address": "1-50 51st Avenue, Long Island City, NY 11101",
        "longitude": -73.95933985,
        "latitude": 40.74319961,
        "grades": "6-8",
        "principal": "Sarah Goodman",
        "telephone-number": "718-609-3300",
        "cec-liaison": "Marisela Santos",
        "city-council-district": "District 26",
        "image": "is291.jpeg"
    },
    {
        "school-name": "Pre-K Center at 78",
        "address": "48-09 Center Blvd, Long Island City, NY 11109",
        "longitude": -73.95764427,
        "latitude": 40.74461071,
        "grades": "PK",
        "principal": "Dr. Suzan Goldstein",
        "telephone-number": "718-472-6041",
        "cec-liaison": "N/A",
        "city-council-district": "District 26",
        "image": "pkcenter78.jpeg"
    },
    {
        "school-name": "D30 PK 972",
        "address": "27-35 Jackson Avenue, Long Island City, NY 11101",
        "longitude": -73.94028125,
        "latitude": 40.74835186,
        "grades": "3K - PK ",
        "principal": "Dr. Suzan Goldstein",
        "telephone-number": "718-391-4660",
        "cec-liaison": "N/A",
        "city-council-district": "District 26",
        "image": "d30pk972.jpg"
    },
    {
        "school-name": "D30 PK 389",
        "address": "96-10 23rd Avenue, East Elmhurst, NY 11369",
        "longitude": -73.87385822,
        "latitude": 40.76831256,
        "grades": "3K - PK ",
        "principal": "Dr. Suzan Goldstein",
        "telephone-number": "718-533-5030",
        "cec-liaison": "N/A",
        "city-council-district": "District 21",
        "image": "d30pk389.jpg"
    },
    {
        "school-name": "D30 PK 397",
        "address": "32-52 37th Street, Astoria, NY 11103",
        "longitude": -73.921791,
        "latitude": 40.75904941,
        "grades": "PK",
        "principal": "Dr. Suzan Goldstein",
        "telephone-number": "718-316-9337",
        "cec-liaison": "N/A",
        "city-council-district": "District 22",
        "image": "d30pk397.jpg"
    }
]
// popup markers  
schools.forEach(function (school) {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 30 })
        .setHTML(
            `
            <div>
                <div>${school['school-name']}</div>
                <img src="img/${school.image}"/>
            </div>
            `

        );

    // figure out the color of the marker based on the program variable

    // by default, use gray


    // setting up the initial markers and popup content

    new mapboxgl.Marker()
        .setLngLat([school.longitude, school.latitude])
        .setPopup(popup)
        .addTo(map);
})



map.on('load', function () {
    map.addSource('school-districts-nyc-simplified', {
        type: 'geojson',
        data: 'data/school-districts-nyc-simplified.geojson'

    })

    map.addLayer({
        id: 'line-school-districts-nyc-simplified',
        type: 'line',
        source: 'school-districts-nyc-simplified',
        paint: {
            'line-width': 2,
           
        }
    })
})

/**
 * Assign a unique id to each school. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
schools.forEach((school, i) => {
    school.id = i;
});


for (const school of schools) {
    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = `listing-${school.id}`;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = `link-${school.id}`;
    link.innerHTML = `<div>${school["school-name"]}</div><div> ${school.address}</div>`;



    /* Add details to the individual listing. */
    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `<div>Grades: ${school["grades"]}</div>
                           <div>Principal: ${school["principal"]}</div>
                           <div>Telephone Number: ${school["telephone-number"]}</div>
                           <div>CEC Liaison: ${school["cec-liaison"]}</div>
                           <div>City Council District: ${school["city-council-district"]}</div>`;

}

function flyToSchool(current) {
    map.flyTo({
        center: current.coordinates,
        zoom: 15
    });
}
function createPopUp(current) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    const listing = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([school.longitude, school.latitude])
        .setHTML(`<div>${school['school-name']}</div><div><img src="img/${school.image}"/></div>`)
        .addTo(map);
}