'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * 
     * country:string,areaByKm2:float,population:integer,densityPopBykm2:float
     * }], {});
    */
    await queryInterface.bulkInsert('capitals', [
      {
        "Country": "Afghanistan",
        "Capital": "Kabul",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Aland Islands",
        "Capital": "Mariehamn",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Albania",
        "Capital": "Tirana",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Algeria",
        "Capital": "Algiers",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "American Samoa",
        "Capital": "Pago Pago",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Andorra",
        "Capital": "Andorra la Vella",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Angola",
        "Capital": "Luanda",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Anguilla",
        "Capital": "The Valley",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Antarctica",
        "Capital": "N/A",
        "Continent": "Antarctica",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Antigua and Barbuda",
        "Capital": "Saint John's",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Argentina",
        "Capital": "Buenos Aires",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Armenia",
        "Capital": "Yerevan",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Aruba",
        "Capital": "Oranjestad",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Australia",
        "Capital": "Canberra",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Austria",
        "Capital": "Vienna",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Azerbaijan",
        "Capital": "Baku",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bahamas",
        "Capital": "Nassau",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bahrain",
        "Capital": "Manama",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bangladesh",
        "Capital": "Dhaka",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Barbados",
        "Capital": "Bridgetown",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Belarus",
        "Capital": "Minsk",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Belgium",
        "Capital": "Brussels",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Belize",
        "Capital": "Belmopan",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Benin",
        "Capital": "Porto-Novo",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bermuda",
        "Capital": "Hamilton",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bhutan",
        "Capital": "Thimphu",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bolivia",
        "Capital": "La Paz",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bosnia and Herzegovina",
        "Capital": "Sarajevo",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Botswana",
        "Capital": "Gaborone",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Brazil",
        "Capital": "Brasilia",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "British Indian Ocean Territory",
        "Capital": "Diego Garcia",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "British Virgin Islands",
        "Capital": "Road Town",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Brunei Darussalam",
        "Capital": "Bandar Seri Begawan",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Bulgaria",
        "Capital": "Sofia",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Burkina Faso",
        "Capital": "Ouagadougou",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Burundi",
        "Capital": "Bujumbura",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cambodia",
        "Capital": "Phnom Penh",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cameroon",
        "Capital": "Yaounde",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Canada",
        "Capital": "Ottawa",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cape Verde",
        "Capital": "Praia",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cayman Islands",
        "Capital": "George Town",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Central African Republic",
        "Capital": "Bangui",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Chad",
        "Capital": "N'Djamena",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Chile",
        "Capital": "Santiago",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "China",
        "Capital": "Beijing",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Christmas Island",
        "Capital": "The Settlement",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cocos Islands",
        "Capital": "West Island",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Colombia",
        "Capital": "Bogota",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Comoros",
        "Capital": "Moroni",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cook Islands",
        "Capital": "Avarua",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Costa Rica",
        "Capital": "San Jose",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cote d'Ivoire",
        "Capital": "Yamoussoukro",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Croatia",
        "Capital": "Zagreb",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cuba",
        "Capital": "Havana",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Curaçao",
        "Capital": "Willemstad",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Cyprus",
        "Capital": "Nicosia",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Czech Republic",
        "Capital": "Prague",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Democratic Republic of the Congo",
        "Capital": "Kinshasa",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Denmark",
        "Capital": "Copenhagen",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Djibouti",
        "Capital": "Djibouti",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Dominica",
        "Capital": "Roseau",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Dominican Republic",
        "Capital": "Santo Domingo",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Ecuador",
        "Capital": "Quito",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Egypt",
        "Capital": "Cairo",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "El Salvador",
        "Capital": "San Salvador",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Equatorial Guinea",
        "Capital": "Malabo",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Eritrea",
        "Capital": "Asmara",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Estonia",
        "Capital": "Tallinn",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Ethiopia",
        "Capital": "Addis Ababa",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Falkland Islands",
        "Capital": "Stanley",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Faroe Islands",
        "Capital": "Torshavn",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Federated States of Micronesia",
        "Capital": "Palikir",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Fiji",
        "Capital": "Suva",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Finland",
        "Capital": "Helsinki",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "France",
        "Capital": "Paris",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "French Polynesia",
        "Capital": "Papeete",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "French Southern and Antarctic Lands",
        "Capital": "Port-aux-Français",
        "Continent": "Antarctica",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Gabon",
        "Capital": "Libreville",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Georgia",
        "Capital": "Tbilisi",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Germany",
        "Capital": "Berlin",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Ghana",
        "Capital": "Accra",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Gibraltar",
        "Capital": "Gibraltar",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Greece",
        "Capital": "Athens",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Greenland",
        "Capital": "Nuuk",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Grenada",
        "Capital": "Saint George's",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Guam",
        "Capital": "Hagatna",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Guatemala",
        "Capital": "Guatemala City",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Guernsey",
        "Capital": "Saint Peter Port",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Guinea",
        "Capital": "Conakry",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Guinea-Bissau",
        "Capital": "Bissau",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Guyana",
        "Capital": "Georgetown",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Haiti",
        "Capital": "Port-au-Prince",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Heard Island and McDonald Islands",
        "Capital": "N/A",
        "Continent": "Antarctica",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Honduras",
        "Capital": "Tegucigalpa",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Hong Kong",
        "Capital": "N/A",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Hungary",
        "Capital": "Budapest",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Iceland",
        "Capital": "Reykjavik",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "India",
        "Capital": "New Delhi",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Indonesia",
        "Capital": "Jakarta",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Iran",
        "Capital": "Tehran",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Iraq",
        "Capital": "Baghdad",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Ireland",
        "Capital": "Dublin",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Isle of Man",
        "Capital": "Douglas",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Israel",
        "Capital": "Jerusalem",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Italy",
        "Capital": "Rome",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Jamaica",
        "Capital": "Kingston",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Japan",
        "Capital": "Tokyo",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Jersey",
        "Capital": "Saint Helier",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Jordan",
        "Capital": "Amman",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Kazakhstan",
        "Capital": "Astana",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Kenya",
        "Capital": "Nairobi",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Kiribati",
        "Capital": "Tarawa",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Kosovo",
        "Capital": "Pristina",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Kuwait",
        "Capital": "Kuwait City",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Kyrgyzstan",
        "Capital": "Bishkek",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Laos",
        "Capital": "Vientiane",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Latvia",
        "Capital": "Riga",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Lebanon",
        "Capital": "Beirut",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Lesotho",
        "Capital": "Maseru",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Liberia",
        "Capital": "Monrovia",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Libya",
        "Capital": "Tripoli",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Liechtenstein",
        "Capital": "Vaduz",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Lithuania",
        "Capital": "Vilnius",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Luxembourg",
        "Capital": "Luxembourg",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Macau",
        "Capital": "N/A",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Macedonia",
        "Capital": "Skopje",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Madagascar",
        "Capital": "Antananarivo",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Malawi",
        "Capital": "Lilongwe",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Malaysia",
        "Capital": "Kuala Lumpur",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Maldives",
        "Capital": "Male",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Mali",
        "Capital": "Bamako",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Malta",
        "Capital": "Valletta",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Marshall Islands",
        "Capital": "Majuro",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Mauritania",
        "Capital": "Nouakchott",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Mauritius",
        "Capital": "Port Louis",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Mexico",
        "Capital": "Mexico City",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Moldova",
        "Capital": "Chisinau",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Monaco",
        "Capital": "Monaco",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Mongolia",
        "Capital": "Ulaanbaatar",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Montenegro",
        "Capital": "Podgorica",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Montserrat",
        "Capital": "Plymouth",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Morocco",
        "Capital": "Rabat",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Mozambique",
        "Capital": "Maputo",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Myanmar",
        "Capital": "Rangoon",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Namibia",
        "Capital": "Windhoek",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Nauru",
        "Capital": "Yaren",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Nepal",
        "Capital": "Kathmandu",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Netherlands",
        "Capital": "Amsterdam",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "New Caledonia",
        "Capital": "Noumea",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "New Zealand",
        "Capital": "Wellington",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Nicaragua",
        "Capital": "Managua",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Niger",
        "Capital": "Niamey",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Nigeria",
        "Capital": "Abuja",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Niue",
        "Capital": "Alofi",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Norfolk Island",
        "Capital": "Kingston",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "North Korea",
        "Capital": "Pyongyang",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Northern Cyprus",
        "Capital": "North Nicosia",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Northern Mariana Islands",
        "Capital": "Saipan",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Norway",
        "Capital": "Oslo",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Oman",
        "Capital": "Muscat",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Pakistan",
        "Capital": "Islamabad",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Palau",
        "Capital": "Melekeok",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Palestine",
        "Capital": "Jerusalem",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Panama",
        "Capital": "Panama City",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Papua New Guinea",
        "Capital": "Port Moresby",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Paraguay",
        "Capital": "Asuncion",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Peru",
        "Capital": "Lima",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Philippines",
        "Capital": "Manila",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Pitcairn Islands",
        "Capital": "Adamstown",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Poland",
        "Capital": "Warsaw",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Portugal",
        "Capital": "Lisbon",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Puerto Rico",
        "Capital": "San Juan",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Qatar",
        "Capital": "Doha",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Republic of Congo",
        "Capital": "Brazzaville",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Romania",
        "Capital": "Bucharest",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Russia",
        "Capital": "Moscow",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Rwanda",
        "Capital": "Kigali",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Barthelemy",
        "Capital": "Gustavia",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Helena",
        "Capital": "Jamestown",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Kitts and Nevis",
        "Capital": "Basseterre",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Lucia",
        "Capital": "Castries",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Martin",
        "Capital": "Marigot",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Pierre and Miquelon",
        "Capital": "Saint-Pierre",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saint Vincent and the Grenadines",
        "Capital": "Kingstown",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Samoa",
        "Capital": "Apia",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "San Marino",
        "Capital": "San Marino",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Sao Tome and Principe",
        "Capital": "Sao Tome",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Saudi Arabia",
        "Capital": "Riyadh",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Senegal",
        "Capital": "Dakar",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Serbia",
        "Capital": "Belgrade",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Seychelles",
        "Capital": "Victoria",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Sierra Leone",
        "Capital": "Freetown",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Singapore",
        "Capital": "Singapore",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Sint Maarten",
        "Capital": "Philipsburg",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Slovakia",
        "Capital": "Bratislava",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Slovenia",
        "Capital": "Ljubljana",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Solomon Islands",
        "Capital": "Honiara",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Somalia",
        "Capital": "Mogadishu",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Somaliland",
        "Capital": "Hargeisa",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "South Africa",
        "Capital": "Pretoria",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "South Georgia and South Sandwich Islands",
        "Capital": "King Edward Point",
        "Continent": "Antarctica",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "South Korea",
        "Capital": "Seoul",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "South Sudan",
        "Capital": "Juba",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Spain",
        "Capital": "Madrid",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Sri Lanka",
        "Capital": "Colombo",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Sudan",
        "Capital": "Khartoum",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Suriname",
        "Capital": "Paramaribo",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Svalbard",
        "Capital": "Longyearbyen",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Swaziland",
        "Capital": "Mbabane",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Sweden",
        "Capital": "Stockholm",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Switzerland",
        "Capital": "Bern",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Syria",
        "Capital": "Damascus",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Taiwan",
        "Capital": "Taipei",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Tajikistan",
        "Capital": "Dushanbe",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Tanzania",
        "Capital": "Dar es Salaam",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Thailand",
        "Capital": "Bangkok",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "The Gambia",
        "Capital": "Banjul",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Timor-Leste",
        "Capital": "Dili",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Togo",
        "Capital": "Lome",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Tokelau",
        "Capital": "Atafu",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Tonga",
        "Capital": "Nuku'alofa",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Trinidad and Tobago",
        "Capital": "Port of Spain",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Tunisia",
        "Capital": "Tunis",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Turkey",
        "Capital": "Ankara",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Turkmenistan",
        "Capital": "Ashgabat",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Turks and Caicos Islands",
        "Capital": "Grand Turk",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Tuvalu",
        "Capital": "Funafuti",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Uganda",
        "Capital": "Kampala",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Ukraine",
        "Capital": "Kyiv",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "United Arab Emirates",
        "Capital": "Abu Dhabi",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "United Kingdom",
        "Capital": "London",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "United States",
        "Capital": "Washington",
        "Continent": "Central America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Uruguay",
        "Capital": "Montevideo",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "US Minor Outlying Islands",
        "Capital": "Washington",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "US Virgin Islands",
        "Capital": "Charlotte Amalie",
        "Continent": "North America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Uzbekistan",
        "Capital": "Tashkent",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Vanuatu",
        "Capital": "Port-Vila",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Vatican City",
        "Capital": "Vatican City",
        "Continent": "Europe",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Venezuela",
        "Capital": "Caracas",
        "Continent": "South America",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Vietnam",
        "Capital": "Hanoi",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Wallis and Futuna",
        "Capital": "Mata-Utu",
        "Continent": "Australia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Western Sahara",
        "Capital": "El-Aaiún",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Yemen",
        "Capital": "Sanaa",
        "Continent": "Asia",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Zambia",
        "Capital": "Lusaka",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      },
      {
        "Country": "Zimbabwe",
        "Capital": "Harare",
        "Continent": "Africa",
        "Created_at": new Date(),
        "Updated_at": new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('capitals', null, {})

  }
};
