'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ageStructure', [
      {
        "country": "Japan",
        "age0To14Years": "12.90",
        "age15To64Years": "60.10",
        "ageAbove65Years": "27"
      },
      {
        "country": "Italy",
        "age0To14Years": "13.50",
        "age15To64Years": "63.50",
        "ageAbove65Years": "23"
      },
      {
        "country": "Portugal",
        "age0To14Years": "13.60",
        "age15To64Years": "64.90",
        "ageAbove65Years": "22"
      },
      {
        "country": "Germany",
        "age0To14Years": "13.10",
        "age15To64Years": "65.50",
        "ageAbove65Years": "22"
      },
      {
        "country": "Finland",
        "age0To14Years": "16.40",
        "age15To64Years": "62.40",
        "ageAbove65Years": "21"
      },
      {
        "country": "Bulgaria",
        "age0To14Years": "14.20",
        "age15To64Years": "65.00",
        "ageAbove65Years": "21"
      },
      {
        "country": "Greece",
        "age0To14Years": "14.20",
        "age15To64Years": "65.40",
        "ageAbove65Years": "20"
      },
      {
        "country": "Sweden",
        "age0To14Years": "17.50",
        "age15To64Years": "62.50",
        "ageAbove65Years": "20"
      },
      {
        "country": "Latvia",
        "age0To14Years": "15.40",
        "age15To64Years": "64.80",
        "ageAbove65Years": "20"
      },
      {
        "country": "Denmark",
        "age0To14Years": "16.50",
        "age15To64Years": "63.80",
        "ageAbove65Years": "20"
      },
      {
        "country": "France",
        "age0To14Years": "18.10",
        "age15To64Years": "62.20",
        "ageAbove65Years": "20"
      },
      {
        "country": "Croatia",
        "age0To14Years": "14.70",
        "age15To64Years": "65.60",
        "ageAbove65Years": "20"
      },
      {
        "country": "Estonia",
        "age0To14Years": "16.40",
        "age15To64Years": "64.20",
        "ageAbove65Years": "20"
      },
      {
        "country": "Malta",
        "age0To14Years": "14.40",
        "age15To64Years": "66.10",
        "ageAbove65Years": "19"
      },
      {
        "country": "Spain",
        "age0To14Years": "14.70",
        "age15To64Years": "65.90",
        "ageAbove65Years": "19"
      },
      {
        "country": "Austria",
        "age0To14Years": "14.10",
        "age15To64Years": "66.70",
        "ageAbove65Years": "19"
      },
      {
        "country": "Slovenia",
        "age0To14Years": "15.00",
        "age15To64Years": "66.00",
        "ageAbove65Years": "19"
      },
      {
        "country": "Czech Republic",
        "age0To14Years": "15.40",
        "age15To64Years": "65.60",
        "ageAbove65Years": "19"
      },
      {
        "country": "Lithuania",
        "age0To14Years": "14.80",
        "age15To64Years": "66.20",
        "ageAbove65Years": "19"
      },
      {
        "country": "Netherlands",
        "age0To14Years": "16.40",
        "age15To64Years": "64.80",
        "ageAbove65Years": "19"
      },
      {
        "country": "Hungary",
        "age0To14Years": "14.30",
        "age15To64Years": "67.10",
        "ageAbove65Years": "19"
      },
      {
        "country": "US Virgin Islands (US)",
        "age0To14Years": "20.10",
        "age15To64Years": "61.30",
        "ageAbove65Years": "19"
      },
      {
        "country": "Belgium",
        "age0To14Years": "17.10",
        "age15To64Years": "64.30",
        "ageAbove65Years": "19"
      },
      {
        "country": "United Kingdom",
        "age0To14Years": "17.70",
        "age15To64Years": "63.80",
        "ageAbove65Years": "19"
      },
      {
        "country": "Switzerland",
        "age0To14Years": "14.90",
        "age15To64Years": "66.70",
        "ageAbove65Years": "18"
      },
      {
        "country": "Romania",
        "age0To14Years": "15.30",
        "age15To64Years": "66.90",
        "ageAbove65Years": "18"
      },
      {
        "country": "Serbia",
        "age0To14Years": "16.50",
        "age15To64Years": "66.20",
        "ageAbove65Years": "17"
      },
      {
        "country": "Canada",
        "age0To14Years": "16.00",
        "age15To64Years": "67.00",
        "ageAbove65Years": "17"
      },
      {
        "country": "Norway",
        "age0To14Years": "17.80",
        "age15To64Years": "65.40",
        "ageAbove65Years": "17"
      },
      {
        "country": "Poland",
        "age0To14Years": "14.80",
        "age15To64Years": "68.40",
        "ageAbove65Years": "17"
      },
      {
        "country": "Bosnia and Herzegovina",
        "age0To14Years": "14.10",
        "age15To64Years": "69.30",
        "ageAbove65Years": "17"
      },
      {
        "country": "Ukraine",
        "age0To14Years": "15.50",
        "age15To64Years": "68.00",
        "ageAbove65Years": "17"
      },
      {
        "country": "Curaçao",
        "age0To14Years": "18.70",
        "age15To64Years": "64.90",
        "ageAbove65Years": "16"
      },
      {
        "country": "Hong Kong",
        "age0To14Years": "11.50",
        "age15To64Years": "72.20",
        "ageAbove65Years": "16"
      },
      {
        "country": "Australia",
        "age0To14Years": "19.00",
        "age15To64Years": "65.50",
        "ageAbove65Years": "16"
      },
      {
        "country": "United States",
        "age0To14Years": "18.90",
        "age15To64Years": "65.70",
        "ageAbove65Years": "15"
      },
      {
        "country": "New Zealand",
        "age0To14Years": "19.80",
        "age15To64Years": "64.90",
        "ageAbove65Years": "15"
      },
      {
        "country": "Puerto Rico (US)",
        "age0To14Years": "17.90",
        "age15To64Years": "66.90",
        "ageAbove65Years": "15"
      },
      {
        "country": "Slovakia",
        "age0To14Years": "15.40",
        "age15To64Years": "69.60",
        "ageAbove65Years": "15"
      },
      {
        "country": "Barbados",
        "age0To14Years": "19.10",
        "age15To64Years": "66.00",
        "ageAbove65Years": "15"
      },
      {
        "country": "Georgia",
        "age0To14Years": "19.20",
        "age15To64Years": "66.00",
        "ageAbove65Years": "15"
      },
      {
        "country": "Belarus",
        "age0To14Years": "16.70",
        "age15To64Years": "68.50",
        "ageAbove65Years": "15"
      },
      {
        "country": "Montenegro",
        "age0To14Years": "18.10",
        "age15To64Years": "67.10",
        "ageAbove65Years": "15"
      },
      {
        "country": "Uruguay",
        "age0To14Years": "21.10",
        "age15To64Years": "64.30",
        "ageAbove65Years": "15"
      },
      {
        "country": "Cuba",
        "age0To14Years": "16.10",
        "age15To64Years": "69.20",
        "ageAbove65Years": "15"
      },
      {
        "country": "Iceland",
        "age0To14Years": "20.10",
        "age15To64Years": "65.50",
        "ageAbove65Years": "14"
      },
      {
        "country": "Luxembourg",
        "age0To14Years": "16.50",
        "age15To64Years": "69.20",
        "ageAbove65Years": "14"
      },
      {
        "country": "Russia",
        "age0To14Years": "17.60",
        "age15To64Years": "68.20",
        "ageAbove65Years": "14"
      },
      {
        "country": "South Korea",
        "age0To14Years": "13.50",
        "age15To64Years": "72.60",
        "ageAbove65Years": "14"
      },
      {
        "country": "Ireland",
        "age0To14Years": "21.60",
        "age15To64Years": "64.40",
        "ageAbove65Years": "14"
      },
      {
        "country": "Taiwan",
        "age0To14Years": "13.12",
        "age15To64Years": "73.02",
        "ageAbove65Years": "14"
      },
      {
        "country": "Cyprus",
        "age0To14Years": "16.80",
        "age15To64Years": "69.80",
        "ageAbove65Years": "13"
      },
      {
        "country": "Albania",
        "age0To14Years": "17.40",
        "age15To64Years": "68.90",
        "ageAbove65Years": "13"
      },
      {
        "country": "Aruba (Netherlands)",
        "age0To14Years": "17.90",
        "age15To64Years": "69.00",
        "ageAbove65Years": "13"
      },
      {
        "country": "Singapore",
        "age0To14Years": "15.00",
        "age15To64Years": "72.10",
        "ageAbove65Years": "13"
      },
      {
        "country": "North Macedonia",
        "age0To14Years": "23.70",
        "age15To64Years": "64.40",
        "ageAbove65Years": "12"
      },
      {
        "country": "Israel",
        "age0To14Years": "27.90",
        "age15To64Years": "60.40",
        "ageAbove65Years": "12"
      },
      {
        "country": "Thailand",
        "age0To14Years": "17.30",
        "age15To64Years": "71.30",
        "ageAbove65Years": "11"
      },
      {
        "country": "Argentina",
        "age0To14Years": "24.90",
        "age15To64Years": "63.90",
        "ageAbove65Years": "11"
      },
      {
        "country": "Armenia",
        "age0To14Years": "20.00",
        "age15To64Years": "68.80",
        "ageAbove65Years": "11"
      },
      {
        "country": "Chile",
        "age0To14Years": "20.30",
        "age15To64Years": "68.60",
        "ageAbove65Years": "11"
      },
      {
        "country": "Mauritius",
        "age0To14Years": "18.40",
        "age15To64Years": "70.70",
        "ageAbove65Years": "11"
      },
      {
        "country": "Moldova",
        "age0To14Years": "15.70",
        "age15To64Years": "73.40",
        "ageAbove65Years": "11"
      },
      {
        "country": "China",
        "age0To14Years": "17.70",
        "age15To64Years": "71.70",
        "ageAbove65Years": "11"
      },
      {
        "country": "Sri Lanka",
        "age0To14Years": "24.00",
        "age15To64Years": "65.90",
        "ageAbove65Years": "10"
      },
      {
        "country": "Trinidad and Tobago",
        "age0To14Years": "20.70",
        "age15To64Years": "69.30",
        "ageAbove65Years": "10"
      },
      {
        "country": "Macau",
        "age0To14Years": "13.40",
        "age15To64Years": "76.90",
        "ageAbove65Years": "10"
      },
      {
        "country": "Jamaica",
        "age0To14Years": "22.70",
        "age15To64Years": "67.60",
        "ageAbove65Years": "10"
      },
      {
        "country": "Saint Lucia",
        "age0To14Years": "18.90",
        "age15To64Years": "71.40",
        "ageAbove65Years": "10"
      },
      {
        "country": "Guam (US)",
        "age0To14Years": "24.70",
        "age15To64Years": "65.70",
        "ageAbove65Years": "10"
      },
      {
        "country": "Costa Rica",
        "age0To14Years": "21.30",
        "age15To64Years": "68.90",
        "ageAbove65Years": "10"
      },
      {
        "country": "North Korea",
        "age0To14Years": "20.60",
        "age15To64Years": "69.90",
        "ageAbove65Years": "10"
      },
      {
        "country": "Bahamas",
        "age0To14Years": "20.50",
        "age15To64Years": "70.60",
        "ageAbove65Years": "9"
      },
      {
        "country": "Brazil",
        "age0To14Years": "21.70",
        "age15To64Years": "69.70",
        "ageAbove65Years": "9"
      },
      {
        "country": "Seychelles",
        "age0To14Years": "22.20",
        "age15To64Years": "69.20",
        "ageAbove65Years": "9"
      },
      {
        "country": "Lebanon",
        "age0To14Years": "23.10",
        "age15To64Years": "68.40",
        "ageAbove65Years": "9"
      },
      {
        "country": "El Salvador",
        "age0To14Years": "27.40",
        "age15To64Years": "64.40",
        "ageAbove65Years": "8"
      },
      {
        "country": "Turkey",
        "age0To14Years": "25.00",
        "age15To64Years": "66.90",
        "ageAbove65Years": "8"
      },
      {
        "country": "Tunisia",
        "age0To14Years": "24.00",
        "age15To64Years": "68.00",
        "ageAbove65Years": "8"
      },
      {
        "country": "Panama",
        "age0To14Years": "27.40",
        "age15To64Years": "64.70",
        "ageAbove65Years": "8"
      },
      {
        "country": "Saint Vincent and the Grenadines",
        "age0To14Years": "23.80",
        "age15To64Years": "68.50",
        "ageAbove65Years": "8"
      },
      {
        "country": "Colombia",
        "age0To14Years": "23.50",
        "age15To64Years": "68.90",
        "ageAbove65Years": "8"
      },
      {
        "country": "Grenada",
        "age0To14Years": "26.30",
        "age15To64Years": "66.40",
        "ageAbove65Years": "7"
      },
      {
        "country": "Peru",
        "age0To14Years": "27.40",
        "age15To64Years": "65.50",
        "ageAbove65Years": "7"
      },
      {
        "country": "Vietnam",
        "age0To14Years": "23.10",
        "age15To64Years": "69.80",
        "ageAbove65Years": "7"
      },
      {
        "country": "Ecuador",
        "age0To14Years": "28.40",
        "age15To64Years": "64.50",
        "ageAbove65Years": "7"
      },
      {
        "country": "Dominican Republic",
        "age0To14Years": "29.30",
        "age15To64Years": "63.70",
        "ageAbove65Years": "7"
      },
      {
        "country": "Kazakhstan",
        "age0To14Years": "27.90",
        "age15To64Years": "65.10",
        "ageAbove65Years": "7"
      },
      {
        "country": "Mexico",
        "age0To14Years": "26.70",
        "age15To64Years": "66.50",
        "ageAbove65Years": "7"
      },
      {
        "country": "Antigua and Barbuda",
        "age0To14Years": "23.90",
        "age15To64Years": "69.20",
        "ageAbove65Years": "7"
      },
      {
        "country": "Suriname",
        "age0To14Years": "26.40",
        "age15To64Years": "66.60",
        "ageAbove65Years": "7"
      },
      {
        "country": "Morocco",
        "age0To14Years": "27.40",
        "age15To64Years": "65.80",
        "ageAbove65Years": "7"
      },
      {
        "country": "Bolivia",
        "age0To14Years": "31.60",
        "age15To64Years": "61.70",
        "ageAbove65Years": "7"
      },
      {
        "country": "Venezuela",
        "age0To14Years": "27.60",
        "age15To64Years": "65.80",
        "ageAbove65Years": "7"
      },
      {
        "country": "Paraguay",
        "age0To14Years": "29.40",
        "age15To64Years": "64.20",
        "ageAbove65Years": "6"
      },
      {
        "country": "Malaysia",
        "age0To14Years": "24.30",
        "age15To64Years": "69.40",
        "ageAbove65Years": "6"
      },
      {
        "country": "Algeria",
        "age0To14Years": "29.30",
        "age15To64Years": "64.50",
        "ageAbove65Years": "6"
      },
      {
        "country": "Fiji",
        "age0To14Years": "28.50",
        "age15To64Years": "65.30",
        "ageAbove65Years": "6"
      },
      {
        "country": "India",
        "age0To14Years": "27.80",
        "age15To64Years": "66.20",
        "ageAbove65Years": "6"
      },
      {
        "country": "Azerbaijan",
        "age0To14Years": "23.30",
        "age15To64Years": "70.70",
        "ageAbove65Years": "6"
      },
      {
        "country": "Nepal",
        "age0To14Years": "30.90",
        "age15To64Years": "63.30",
        "ageAbove65Years": "6"
      },
      {
        "country": "Tonga",
        "age0To14Years": "35.80",
        "age15To64Years": "58.30",
        "ageAbove65Years": "6"
      },
      {
        "country": "Myanmar",
        "age0To14Years": "26.80",
        "age15To64Years": "67.40",
        "ageAbove65Years": "6"
      },
      {
        "country": "Samoa",
        "age0To14Years": "36.60",
        "age15To64Years": "57.80",
        "ageAbove65Years": "6"
      },
      {
        "country": "Nicaragua",
        "age0To14Years": "29.00",
        "age15To64Years": "65.50",
        "ageAbove65Years": "5"
      },
      {
        "country": "Iran",
        "age0To14Years": "23.70",
        "age15To64Years": "70.90",
        "ageAbove65Years": "5"
      },
      {
        "country": "Indonesia",
        "age0To14Years": "27.40",
        "age15To64Years": "67.30",
        "ageAbove65Years": "5"
      },
      {
        "country": "Guyana",
        "age0To14Years": "28.10",
        "age15To64Years": "65.70",
        "ageAbove65Years": "5"
      },
      {
        "country": "South Africa",
        "age0To14Years": "29.00",
        "age15To64Years": "65.70",
        "ageAbove65Years": "5"
      },
      {
        "country": "Egypt",
        "age0To14Years": "33.50",
        "age15To64Years": "61.40",
        "ageAbove65Years": "5"
      },
      {
        "country": "Bangladesh",
        "age0To14Years": "28.40",
        "age15To64Years": "66.50",
        "ageAbove65Years": "5"
      },
      {
        "country": "Bhutan",
        "age0To14Years": "26.60",
        "age15To64Years": "68.60",
        "ageAbove65Years": "5"
      },
      {
        "country": "Philippines",
        "age0To14Years": "31.70",
        "age15To64Years": "63.50",
        "ageAbove65Years": "5"
      },
      {
        "country": "Haiti",
        "age0To14Years": "33.00",
        "age15To64Years": "62.20",
        "ageAbove65Years": "5"
      },
      {
        "country": "Federated States of Micronesia",
        "age0To14Years": "33.10",
        "age15To64Years": "62.10",
        "ageAbove65Years": "5"
      },
      {
        "country": "Honduras",
        "age0To14Years": "31.60",
        "age15To64Years": "63.70",
        "ageAbove65Years": "5"
      },
      {
        "country": "Guatemala",
        "age0To14Years": "35.10",
        "age15To64Years": "60.30",
        "ageAbove65Years": "5"
      },
      {
        "country": "Brunei",
        "age0To14Years": "23.00",
        "age15To64Years": "72.40",
        "ageAbove65Years": "5"
      },
      {
        "country": "Lesotho",
        "age0To14Years": "35.40",
        "age15To64Years": "60.10",
        "ageAbove65Years": "5"
      },
      {
        "country": "Cape Verde",
        "age0To14Years": "30.20",
        "age15To64Years": "65.30",
        "ageAbove65Years": "5"
      },
      {
        "country": "Kyrgyzstan",
        "age0To14Years": "31.80",
        "age15To64Years": "63.70",
        "ageAbove65Years": "5"
      },
      {
        "country": "Pakistan",
        "age0To14Years": "34.80",
        "age15To64Years": "60.70",
        "ageAbove65Years": "5"
      },
      {
        "country": "Gabon",
        "age0To14Years": "35.90",
        "age15To64Years": "59.60",
        "ageAbove65Years": "5"
      },
      {
        "country": "Uzbekistan",
        "age0To14Years": "28.00",
        "age15To64Years": "67.50",
        "ageAbove65Years": "5"
      },
      {
        "country": "Libya",
        "age0To14Years": "28.20",
        "age15To64Years": "67.40",
        "ageAbove65Years": "4"
      },
      {
        "country": "Cambodia",
        "age0To14Years": "31.30",
        "age15To64Years": "64.30",
        "ageAbove65Years": "4"
      },
      {
        "country": "Vanuatu",
        "age0To14Years": "36.00",
        "age15To64Years": "59.70",
        "ageAbove65Years": "4"
      },
      {
        "country": "Turkmenistan",
        "age0To14Years": "30.90",
        "age15To64Years": "64.80",
        "ageAbove65Years": "4"
      },
      {
        "country": "Syria",
        "age0To14Years": "36.60",
        "age15To64Years": "59.10",
        "ageAbove65Years": "4"
      },
      {
        "country": "Djibouti",
        "age0To14Years": "31.10",
        "age15To64Years": "64.70",
        "ageAbove65Years": "4"
      },
      {
        "country": "Maldives",
        "age0To14Years": "23.40",
        "age15To64Years": "72.50",
        "ageAbove65Years": "4"
      },
      {
        "country": "Laos",
        "age0To14Years": "32.90",
        "age15To64Years": "63.10",
        "ageAbove65Years": "4"
      },
      {
        "country": "Mongolia",
        "age0To14Years": "29.70",
        "age15To64Years": "66.30",
        "ageAbove65Years": "4"
      },
      {
        "country": "Botswana",
        "age0To14Years": "31.40",
        "age15To64Years": "64.70",
        "ageAbove65Years": "4"
      },
      {
        "country": "Belize",
        "age0To14Years": "31.40",
        "age15To64Years": "64.70",
        "ageAbove65Years": "4"
      },
      {
        "country": "Jordan",
        "age0To14Years": "35.50",
        "age15To64Years": "60.70",
        "ageAbove65Years": "4"
      },
      {
        "country": "Papua New Guinea",
        "age0To14Years": "35.90",
        "age15To64Years": "60.30",
        "ageAbove65Years": "4"
      },
      {
        "country": "Central African Republic",
        "age0To14Years": "43.20",
        "age15To64Years": "53.10",
        "ageAbove65Years": "4"
      },
      {
        "country": "Timor-Leste",
        "age0To14Years": "43.60",
        "age15To64Years": "52.80",
        "ageAbove65Years": "4"
      },
      {
        "country": "Namibia",
        "age0To14Years": "36.70",
        "age15To64Years": "59.80",
        "ageAbove65Years": "4"
      },
      {
        "country": "Eritrea",
        "age0To14Years": "41.80",
        "age15To64Years": "54.60",
        "ageAbove65Years": "4"
      },
      {
        "country": "Sudan",
        "age0To14Years": "40.80",
        "age15To64Years": "55.60",
        "ageAbove65Years": "4"
      },
      {
        "country": "Ethiopia",
        "age0To14Years": "40.60",
        "age15To64Years": "55.90",
        "ageAbove65Years": "4"
      },
      {
        "country": "Tajikistan",
        "age0To14Years": "35.30",
        "age15To64Years": "61.30",
        "ageAbove65Years": "4"
      },
      {
        "country": "Solomon Islands",
        "age0To14Years": "38.80",
        "age15To64Years": "57.70",
        "ageAbove65Years": "4"
      },
      {
        "country": "Republic of the Congo",
        "age0To14Years": "42.30",
        "age15To64Years": "54.30",
        "ageAbove65Years": "3"
      },
      {
        "country": "South Sudan",
        "age0To14Years": "41.70",
        "age15To64Years": "54.90",
        "ageAbove65Years": "3"
      },
      {
        "country": "Ghana",
        "age0To14Years": "38.50",
        "age15To64Years": "58.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "Saudi Arabia",
        "age0To14Years": "25.20",
        "age15To64Years": "71.50",
        "ageAbove65Years": "3"
      },
      {
        "country": "Eswatini (Swaziland)",
        "age0To14Years": "37.20",
        "age15To64Years": "59.70",
        "ageAbove65Years": "3"
      },
      {
        "country": "Cameroon",
        "age0To14Years": "42.70",
        "age15To64Years": "54.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "Benin",
        "age0To14Years": "42.70",
        "age15To64Years": "54.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "Iraq",
        "age0To14Years": "40.40",
        "age15To64Years": "56.40",
        "ageAbove65Years": "3"
      },
      {
        "country": "Mozambique",
        "age0To14Years": "44.80",
        "age15To64Years": "52.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "Liberia",
        "age0To14Years": "41.80",
        "age15To64Years": "55.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "Tanzania",
        "age0To14Years": "44.90",
        "age15To64Years": "52.00",
        "ageAbove65Years": "3"
      },
      {
        "country": "Mauritania",
        "age0To14Years": "39.90",
        "age15To64Years": "56.90",
        "ageAbove65Years": "3"
      },
      {
        "country": "Guinea",
        "age0To14Years": "42.30",
        "age15To64Years": "54.60",
        "ageAbove65Years": "3"
      },
      {
        "country": "Palestine",
        "age0To14Years": "39.60",
        "age15To64Years": "57.40",
        "ageAbove65Years": "3"
      },
      {
        "country": "Senegal",
        "age0To14Years": "42.90",
        "age15To64Years": "54.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "Malawi",
        "age0To14Years": "44.00",
        "age15To64Years": "53.00",
        "ageAbove65Years": "3"
      },
      {
        "country": "Rwanda",
        "age0To14Years": "40.10",
        "age15To64Years": "56.90",
        "ageAbove65Years": "3"
      },
      {
        "country": "Democratic Republic of the Congo",
        "age0To14Years": "46.30",
        "age15To64Years": "50.70",
        "ageAbove65Years": "3"
      },
      {
        "country": "Comoros",
        "age0To14Years": "39.80",
        "age15To64Years": "57.30",
        "ageAbove65Years": "3"
      },
      {
        "country": "Guinea-Bissau",
        "age0To14Years": "40.70",
        "age15To64Years": "55.50",
        "ageAbove65Years": "3"
      },
      {
        "country": "Ivory Coast",
        "age0To14Years": "42.40",
        "age15To64Years": "54.60",
        "ageAbove65Years": "3"
      },
      {
        "country": "Madagascar",
        "age0To14Years": "41.00",
        "age15To64Years": "56.10",
        "ageAbove65Years": "3"
      },
      {
        "country": "São Tomé and Príncipe",
        "age0To14Years": "42.80",
        "age15To64Years": "54.30",
        "ageAbove65Years": "3"
      },
      {
        "country": "Yemen",
        "age0To14Years": "39.90",
        "age15To64Years": "57.20",
        "ageAbove65Years": "3"
      },
      {
        "country": "Togo",
        "age0To14Years": "41.60",
        "age15To64Years": "55.60",
        "ageAbove65Years": "3"
      },
      {
        "country": "Zimbabwe",
        "age0To14Years": "41.20",
        "age15To64Years": "56.00",
        "ageAbove65Years": "3"
      },
      {
        "country": "Nigeria",
        "age0To14Years": "44.00",
        "age15To64Years": "53.30",
        "ageAbove65Years": "3"
      },
      {
        "country": "Equatorial Guinea",
        "age0To14Years": "37.20",
        "age15To64Years": "60.00",
        "ageAbove65Years": "3"
      },
      {
        "country": "Kenya",
        "age0To14Years": "40.50",
        "age15To64Years": "56.80",
        "ageAbove65Years": "3"
      },
      {
        "country": "Somalia",
        "age0To14Years": "46.40",
        "age15To64Years": "50.80",
        "ageAbove65Years": "3"
      },
      {
        "country": "Afghanistan",
        "age0To14Years": "43.20",
        "age15To64Years": "54.20",
        "ageAbove65Years": "3"
      },
      {
        "country": "Burundi",
        "age0To14Years": "45.00",
        "age15To64Years": "52.40",
        "ageAbove65Years": "3"
      },
      {
        "country": "Niger",
        "age0To14Years": "50.20",
        "age15To64Years": "47.20",
        "ageAbove65Years": "3"
      },
      {
        "country": "Chad",
        "age0To14Years": "47.10",
        "age15To64Years": "50.40",
        "ageAbove65Years": "3"
      },
      {
        "country": "Sierra Leone",
        "age0To14Years": "42.10",
        "age15To64Years": "55.40",
        "ageAbove65Years": "3"
      },
      {
        "country": "Zambia",
        "age0To14Years": "44.80",
        "age15To64Years": "52.70",
        "ageAbove65Years": "3"
      },
      {
        "country": "Mali",
        "age0To14Years": "47.70",
        "age15To64Years": "49.80",
        "ageAbove65Years": "3"
      },
      {
        "country": "Oman",
        "age0To14Years": "21.80",
        "age15To64Years": "75.80",
        "ageAbove65Years": "2"
      },
      {
        "country": "Burkina Faso",
        "age0To14Years": "45.20",
        "age15To64Years": "52.40",
        "ageAbove65Years": "2"
      },
      {
        "country": "Bahrain",
        "age0To14Years": "19.70",
        "age15To64Years": "77.90",
        "ageAbove65Years": "2"
      },
      {
        "country": "Angola",
        "age0To14Years": "46.80",
        "age15To64Years": "50.80",
        "ageAbove65Years": "2"
      },
      {
        "country": "Gambia",
        "age0To14Years": "45.30",
        "age15To64Years": "52.30",
        "ageAbove65Years": "2"
      },
      {
        "country": "Kuwait",
        "age0To14Years": "21.10",
        "age15To64Years": "76.60",
        "ageAbove65Years": "2"
      },
      {
        "country": "Uganda",
        "age0To14Years": "47.70",
        "age15To64Years": "50.10",
        "ageAbove65Years": "2"
      },
      {
        "country": "Qatar",
        "age0To14Years": "13.90",
        "age15To64Years": "84.80",
        "ageAbove65Years": "1"
      },
      {
        "country": "United Arab Emirates",
        "age0To14Years": "13.90",
        "age15To64Years": "85.00",
        "ageAbove65Years": "1"
      }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ageStructure', null, {})

  }
};
