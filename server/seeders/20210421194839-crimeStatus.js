'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('crimeStatus', [
      {
        "country": "Venezuela",
        "crimeIndex": 84.49,
        "safetyIndex": 15.51
      },
      {
        "country": "Papua New Guinea",
        "crimeIndex": 81.93,
        "safetyIndex": 18.07
      },
      {
        "country": "South Africa",
        "crimeIndex": 77.49,
        "safetyIndex": 22.51
      },
      {
        "country": "Afghanistan",
        "crimeIndex": 76.23,
        "safetyIndex": 23.77
      },
      {
        "country": "Honduras",
        "crimeIndex": 76.11,
        "safetyIndex": 23.89
      },
      {
        "country": "Trinidad And Tobago",
        "crimeIndex": 73.19,
        "safetyIndex": 26.81
      },
      {
        "country": "Brazil",
        "crimeIndex": 68.88,
        "safetyIndex": 31.12
      },
      {
        "country": "Peru",
        "crimeIndex": 68.15,
        "safetyIndex": 31.85
      },
      {
        "country": "El Salvador",
        "crimeIndex": 67.96,
        "safetyIndex": 32.04
      },
      {
        "country": "Guyana",
        "crimeIndex": 67.66,
        "safetyIndex": 32.34
      },
      {
        "country": "Namibia",
        "crimeIndex": 67.21,
        "safetyIndex": 32.79
      },
      {
        "country": "Syria",
        "crimeIndex": 66.46,
        "safetyIndex": 33.54
      },
      {
        "country": "Jamaica",
        "crimeIndex": 66.04,
        "safetyIndex": 33.96
      },
      {
        "country": "Puerto Rico",
        "crimeIndex": 65.63,
        "safetyIndex": 34.37
      },
      {
        "country": "Angola",
        "crimeIndex": 64.97,
        "safetyIndex": 35.03
      },
      {
        "country": "Bangladesh",
        "crimeIndex": 63.94,
        "safetyIndex": 36.06
      },
      {
        "country": "Nigeria",
        "crimeIndex": 63.77,
        "safetyIndex": 36.23
      },
      {
        "country": "Bahamas",
        "crimeIndex": 62.86,
        "safetyIndex": 37.14
      },
      {
        "country": "Libya",
        "crimeIndex": 62.19,
        "safetyIndex": 37.81
      },
      {
        "country": "Kazakhstan",
        "crimeIndex": 62.02,
        "safetyIndex": 37.98
      },
      {
        "country": "Argentina",
        "crimeIndex": 61.77,
        "safetyIndex": 38.23
      },
      {
        "country": "Kenya",
        "crimeIndex": 61.66,
        "safetyIndex": 38.34
      },
      {
        "country": "Dominican Republic",
        "crimeIndex": 61.16,
        "safetyIndex": 38.84
      },
      {
        "country": "Uganda",
        "crimeIndex": 59,
        "safetyIndex": 41
      },
      {
        "country": "Tanzania",
        "crimeIndex": 58.95,
        "safetyIndex": 41.05
      },
      {
        "country": "Fiji",
        "crimeIndex": 58.92,
        "safetyIndex": 41.08
      },
      {
        "country": "Malaysia",
        "crimeIndex": 58.84,
        "safetyIndex": 41.16
      },
      {
        "country": "Somalia",
        "crimeIndex": 58.5,
        "safetyIndex": 41.5
      },
      {
        "country": "Mongolia",
        "crimeIndex": 57.97,
        "safetyIndex": 42.03
      },
      {
        "country": "Guatemala",
        "crimeIndex": 57.83,
        "safetyIndex": 42.17
      },
      {
        "country": "Zimbabwe",
        "crimeIndex": 57.47,
        "safetyIndex": 42.53
      },
      {
        "country": "Costa Rica",
        "crimeIndex": 56.33,
        "safetyIndex": 43.67
      },
      {
        "country": "Colombia",
        "crimeIndex": 54.79,
        "safetyIndex": 45.21
      },
      {
        "country": "Mexico",
        "crimeIndex": 53.97,
        "safetyIndex": 46.03
      },
      {
        "country": "Uruguay",
        "crimeIndex": 53.81,
        "safetyIndex": 46.19
      },
      {
        "country": "Botswana",
        "crimeIndex": 53.49,
        "safetyIndex": 46.51
      },
      {
        "country": "Maldives",
        "crimeIndex": 53.21,
        "safetyIndex": 46.79
      },
      {
        "country": "Bolivia",
        "crimeIndex": 52.93,
        "safetyIndex": 47.07
      },
      {
        "country": "Ecuador",
        "crimeIndex": 50.9,
        "safetyIndex": 49.1
      },
      {
        "country": "Cambodia",
        "crimeIndex": 50.66,
        "safetyIndex": 49.34
      },
      {
        "country": "Algeria",
        "crimeIndex": 49.81,
        "safetyIndex": 50.19
      },
      {
        "country": "Paraguay",
        "crimeIndex": 49.6,
        "safetyIndex": 50.4
      },
      {
        "country": "Iran",
        "crimeIndex": 49.25,
        "safetyIndex": 50.75
      },
      {
        "country": "Ethiopia",
        "crimeIndex": 49.21,
        "safetyIndex": 50.79
      },
      {
        "country": "Ghana",
        "crimeIndex": 48.97,
        "safetyIndex": 51.03
      },
      {
        "country": "Ukraine",
        "crimeIndex": 48.85,
        "safetyIndex": 51.15
      },
      {
        "country": "Morocco",
        "crimeIndex": 48.69,
        "safetyIndex": 51.31
      },
      {
        "country": "Iraq",
        "crimeIndex": 47.78,
        "safetyIndex": 52.22
      },
      {
        "country": "Mauritius",
        "crimeIndex": 47.33,
        "safetyIndex": 52.67
      },
      {
        "country": "United States",
        "crimeIndex": 47.2,
        "safetyIndex": 52.8
      },
      {
        "country": "Panama",
        "crimeIndex": 47.19,
        "safetyIndex": 52.81
      },
      {
        "country": "Sweden",
        "crimeIndex": 47.07,
        "safetyIndex": 52.93
      },
      {
        "country": "Egypt",
        "crimeIndex": 46.92,
        "safetyIndex": 53.08
      },
      {
        "country": "France",
        "crimeIndex": 46.79,
        "safetyIndex": 53.21
      },
      {
        "country": "Myanmar",
        "crimeIndex": 45.86,
        "safetyIndex": 54.14
      },
      {
        "country": "Indonesia",
        "crimeIndex": 45.84,
        "safetyIndex": 54.16
      },
      {
        "country": "Ireland",
        "crimeIndex": 45.43,
        "safetyIndex": 54.57
      },
      {
        "country": "Vietnam",
        "crimeIndex": 45.35,
        "safetyIndex": 54.65
      },
      {
        "country": "Chile",
        "crimeIndex": 45.23,
        "safetyIndex": 54.77
      },
      {
        "country": "Moldova",
        "crimeIndex": 44.98,
        "safetyIndex": 55.02
      },
      {
        "country": "Nicaragua",
        "crimeIndex": 44.44,
        "safetyIndex": 55.56
      },
      {
        "country": "Italy",
        "crimeIndex": 44.26,
        "safetyIndex": 55.74
      },
      {
        "country": "Pakistan",
        "crimeIndex": 44.08,
        "safetyIndex": 55.92
      },
      {
        "country": "Belgium",
        "crimeIndex": 43.98,
        "safetyIndex": 56.02
      },
      {
        "country": "United Kingdom",
        "crimeIndex": 43.71,
        "safetyIndex": 56.29
      },
      {
        "country": "Palestine",
        "crimeIndex": 43.59,
        "safetyIndex": 56.41
      },
      {
        "country": "Lebanon",
        "crimeIndex": 43.36,
        "safetyIndex": 56.64
      },
      {
        "country": "India",
        "crimeIndex": 43.32,
        "safetyIndex": 56.68
      },
      {
        "country": "Bosnia And Herzegovina",
        "crimeIndex": 43.03,
        "safetyIndex": 56.97
      },
      {
        "country": "Philippines",
        "crimeIndex": 42.16,
        "safetyIndex": 57.84
      },
      {
        "country": "Tunisia",
        "crimeIndex": 41.88,
        "safetyIndex": 58.12
      },
      {
        "country": "Australia",
        "crimeIndex": 41.36,
        "safetyIndex": 58.64
      },
      {
        "country": "Montenegro",
        "crimeIndex": 41.18,
        "safetyIndex": 58.82
      },
      {
        "country": "Russia",
        "crimeIndex": 41.12,
        "safetyIndex": 58.88
      },
      {
        "country": "New Zealand",
        "crimeIndex": 40.93,
        "safetyIndex": 59.07
      },
      {
        "country": "Jordan",
        "crimeIndex": 40.83,
        "safetyIndex": 59.17
      },
      {
        "country": "Thailand",
        "crimeIndex": 40.48,
        "safetyIndex": 59.52
      },
      {
        "country": "Greece",
        "crimeIndex": 40.32,
        "safetyIndex": 59.68
      },
      {
        "country": "Sri Lanka",
        "crimeIndex": 40.22,
        "safetyIndex": 59.78
      },
      {
        "country": "Canada",
        "crimeIndex": 39.67,
        "safetyIndex": 60.33
      },
      {
        "country": "Albania",
        "crimeIndex": 39.52,
        "safetyIndex": 60.48
      },
      {
        "country": "Turkey",
        "crimeIndex": 39.49,
        "safetyIndex": 60.51
      },
      {
        "country": "Malta",
        "crimeIndex": 39.04,
        "safetyIndex": 60.96
      },
      {
        "country": "North Macedonia",
        "crimeIndex": 38.67,
        "safetyIndex": 61.33
      },
      {
        "country": "Bulgaria",
        "crimeIndex": 38.5,
        "safetyIndex": 61.5
      },
      {
        "country": "Serbia",
        "crimeIndex": 37.41,
        "safetyIndex": 62.59
      },
      {
        "country": "Latvia",
        "crimeIndex": 36.95,
        "safetyIndex": 63.05
      },
      {
        "country": "Norway",
        "crimeIndex": 35.43,
        "safetyIndex": 64.57
      },
      {
        "country": "Hungary",
        "crimeIndex": 35.08,
        "safetyIndex": 64.92
      },
      {
        "country": "Germany",
        "crimeIndex": 34.81,
        "safetyIndex": 65.19
      },
      {
        "country": "Kuwait",
        "crimeIndex": 34.75,
        "safetyIndex": 65.25
      },
      {
        "country": "Nepal",
        "crimeIndex": 34.56,
        "safetyIndex": 65.44
      },
      {
        "country": "Luxembourg",
        "crimeIndex": 33.39,
        "safetyIndex": 66.61
      },
      {
        "country": "Lithuania",
        "crimeIndex": 33.06,
        "safetyIndex": 66.94
      },
      {
        "country": "Kosovo (Disputed Territory)",
        "crimeIndex": 32.91,
        "safetyIndex": 67.09
      },
      {
        "country": "Spain",
        "crimeIndex": 31.96,
        "safetyIndex": 68.04
      },
      {
        "country": "China",
        "crimeIndex": 31.83,
        "safetyIndex": 68.17
      },
      {
        "country": "Azerbaijan",
        "crimeIndex": 31.61,
        "safetyIndex": 68.39
      },
      {
        "country": "Singapore",
        "crimeIndex": 30.57,
        "safetyIndex": 69.43
      },
      {
        "country": "Cyprus",
        "crimeIndex": 30.01,
        "safetyIndex": 69.99
      },
      {
        "country": "Portugal",
        "crimeIndex": 29.63,
        "safetyIndex": 70.37
      },
      {
        "country": "Israel",
        "crimeIndex": 29.6,
        "safetyIndex": 70.4
      },
      {
        "country": "Bahrain",
        "crimeIndex": 29.29,
        "safetyIndex": 70.71
      },
      {
        "country": "Slovakia",
        "crimeIndex": 29.22,
        "safetyIndex": 70.78
      },
      {
        "country": "Poland",
        "crimeIndex": 28.5,
        "safetyIndex": 71.5
      },
      {
        "country": "South Korea",
        "crimeIndex": 28.02,
        "safetyIndex": 71.98
      },
      {
        "country": "Brunei",
        "crimeIndex": 27.68,
        "safetyIndex": 72.32
      },
      {
        "country": "Romania",
        "crimeIndex": 27.64,
        "safetyIndex": 72.36
      },
      {
        "country": "Netherlands",
        "crimeIndex": 27.62,
        "safetyIndex": 72.38
      },
      {
        "country": "Cuba",
        "crimeIndex": 27.45,
        "safetyIndex": 72.55
      },
      {
        "country": "Saudi Arabia",
        "crimeIndex": 26.18,
        "safetyIndex": 73.82
      },
      {
        "country": "Czech Republic",
        "crimeIndex": 25.52,
        "safetyIndex": 74.48
      },
      {
        "country": "Denmark",
        "crimeIndex": 25.1,
        "safetyIndex": 74.9
      },
      {
        "country": "Belarus",
        "crimeIndex": 24.99,
        "safetyIndex": 75.01
      },
      {
        "country": "Croatia",
        "crimeIndex": 24.71,
        "safetyIndex": 75.29
      },
      {
        "country": "Austria",
        "crimeIndex": 23.73,
        "safetyIndex": 76.27
      },
      {
        "country": "Iceland",
        "crimeIndex": 23.36,
        "safetyIndex": 76.64
      },
      {
        "country": "Finland",
        "crimeIndex": 23.32,
        "safetyIndex": 76.68
      },
      {
        "country": "Estonia",
        "crimeIndex": 23.14,
        "safetyIndex": 76.86
      },
      {
        "country": "Armenia",
        "crimeIndex": 21.6,
        "safetyIndex": 78.4
      },
      {
        "country": "Switzerland",
        "crimeIndex": 21.6,
        "safetyIndex": 78.4
      },
      {
        "country": "Slovenia",
        "crimeIndex": 21.07,
        "safetyIndex": 78.93
      },
      {
        "country": "Oman",
        "crimeIndex": 20.79,
        "safetyIndex": 79.21
      },
      {
        "country": "Hong Kong",
        "crimeIndex": 20.7,
        "safetyIndex": 79.3
      },
      {
        "country": "Japan",
        "crimeIndex": 20.66,
        "safetyIndex": 79.34
      },
      {
        "country": "Georgia",
        "crimeIndex": 20.21,
        "safetyIndex": 79.79
      },
      {
        "country": "United Arab Emirates",
        "crimeIndex": 15.7,
        "safetyIndex": 84.3
      },
      {
        "country": "Taiwan",
        "crimeIndex": 15.65,
        "safetyIndex": 84.35
      },
      {
        "country": "Qatar",
        "crimeIndex": 11.86,
        "safetyIndex": 88.14
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('crimeStatus', null, {})

  }
};
