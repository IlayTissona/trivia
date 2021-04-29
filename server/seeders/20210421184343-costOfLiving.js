'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('costOfLiving', [
      {
        "country": "Switzerland",
        "costofLivingIndex": 122.4,
        "rentIndex": 50.25,
        "costofLivingPlusRentIndex": 87.89,
        "groceriesIndex": 120.27,
        "restaurantPriceIndex": 123.01,
        "localPurchasingPowerIndex": 119.53
      },
      {
        "country": "Norway",
        "costofLivingIndex": 101.43,
        "rentIndex": 36.15,
        "costofLivingPlusRentIndex": 70.21,
        "groceriesIndex": 91.14,
        "restaurantPriceIndex": 109.28,
        "localPurchasingPowerIndex": 88.38
      },
      {
        "country": "Iceland",
        "costofLivingIndex": 100.48,
        "rentIndex": 46.95,
        "costofLivingPlusRentIndex": 74.88,
        "groceriesIndex": 86.89,
        "restaurantPriceIndex": 113.74,
        "localPurchasingPowerIndex": 79.44
      },
      {
        "country": "Japan",
        "costofLivingIndex": 83.35,
        "rentIndex": 25.97,
        "costofLivingPlusRentIndex": 55.9,
        "groceriesIndex": 81.82,
        "restaurantPriceIndex": 48.95,
        "localPurchasingPowerIndex": 87.28
      },
      {
        "country": "Denmark",
        "costofLivingIndex": 83,
        "rentIndex": 31.92,
        "costofLivingPlusRentIndex": 58.57,
        "groceriesIndex": 61.74,
        "restaurantPriceIndex": 100.75,
        "localPurchasingPowerIndex": 100.88
      },
      {
        "country": "Bahamas",
        "costofLivingIndex": 82.51,
        "rentIndex": 36.36,
        "costofLivingPlusRentIndex": 60.43,
        "groceriesIndex": 62.65,
        "restaurantPriceIndex": 83.66,
        "localPurchasingPowerIndex": 54.18
      },
      {
        "country": "Luxembourg",
        "costofLivingIndex": 81.89,
        "rentIndex": 54.92,
        "costofLivingPlusRentIndex": 68.99,
        "groceriesIndex": 69.1,
        "restaurantPriceIndex": 89.85,
        "localPurchasingPowerIndex": 103.92
      },
      {
        "country": "Israel",
        "costofLivingIndex": 81.15,
        "rentIndex": 31.33,
        "costofLivingPlusRentIndex": 57.32,
        "groceriesIndex": 66.31,
        "restaurantPriceIndex": 88.65,
        "localPurchasingPowerIndex": 78.09
      },
      {
        "country": "Singapore",
        "costofLivingIndex": 81.1,
        "rentIndex": 63.27,
        "costofLivingPlusRentIndex": 72.58,
        "groceriesIndex": 66.75,
        "restaurantPriceIndex": 58.99,
        "localPurchasingPowerIndex": 88.96
      },
      {
        "country": "South Korea",
        "costofLivingIndex": 78.18,
        "rentIndex": 22.86,
        "costofLivingPlusRentIndex": 51.72,
        "groceriesIndex": 91.31,
        "restaurantPriceIndex": 44.87,
        "localPurchasingPowerIndex": 85.21
      },
      {
        "country": "Hong Kong",
        "costofLivingIndex": 77.22,
        "rentIndex": 79.57,
        "costofLivingPlusRentIndex": 78.35,
        "groceriesIndex": 75.94,
        "restaurantPriceIndex": 54.36,
        "localPurchasingPowerIndex": 65.32
      },
      {
        "country": "Barbados",
        "costofLivingIndex": 76.02,
        "rentIndex": 19.7,
        "costofLivingPlusRentIndex": 49.08,
        "groceriesIndex": 65.2,
        "restaurantPriceIndex": 68.14,
        "localPurchasingPowerIndex": 51.1
      },
      {
        "country": "Ireland",
        "costofLivingIndex": 75.91,
        "rentIndex": 43.88,
        "costofLivingPlusRentIndex": 60.59,
        "groceriesIndex": 58.35,
        "restaurantPriceIndex": 81.24,
        "localPurchasingPowerIndex": 80.88
      },
      {
        "country": "France",
        "costofLivingIndex": 74.14,
        "rentIndex": 25.39,
        "costofLivingPlusRentIndex": 50.82,
        "groceriesIndex": 67.9,
        "restaurantPriceIndex": 72.54,
        "localPurchasingPowerIndex": 80.36
      },
      {
        "country": "Netherlands",
        "costofLivingIndex": 73.75,
        "rentIndex": 35.18,
        "costofLivingPlusRentIndex": 55.3,
        "groceriesIndex": 55.87,
        "restaurantPriceIndex": 80.48,
        "localPurchasingPowerIndex": 90.73
      },
      {
        "country": "Australia",
        "costofLivingIndex": 73.54,
        "rentIndex": 34.86,
        "costofLivingPlusRentIndex": 55.04,
        "groceriesIndex": 67.23,
        "restaurantPriceIndex": 70.32,
        "localPurchasingPowerIndex": 107.31
      },
      {
        "country": "New Zealand",
        "costofLivingIndex": 72.53,
        "rentIndex": 32.09,
        "costofLivingPlusRentIndex": 53.19,
        "groceriesIndex": 64.69,
        "restaurantPriceIndex": 68.8,
        "localPurchasingPowerIndex": 92.66
      },
      {
        "country": "Belgium",
        "costofLivingIndex": 71.78,
        "rentIndex": 25.43,
        "costofLivingPlusRentIndex": 49.61,
        "groceriesIndex": 58.66,
        "restaurantPriceIndex": 80.14,
        "localPurchasingPowerIndex": 86.28
      },
      {
        "country": "Seychelles",
        "costofLivingIndex": 71.59,
        "rentIndex": 32.34,
        "costofLivingPlusRentIndex": 52.81,
        "groceriesIndex": 64.61,
        "restaurantPriceIndex": 84.86,
        "localPurchasingPowerIndex": 21.67
      },
      {
        "country": "United States",
        "costofLivingIndex": 71.05,
        "rentIndex": 40.32,
        "costofLivingPlusRentIndex": 56.36,
        "groceriesIndex": 66.61,
        "restaurantPriceIndex": 70.74,
        "localPurchasingPowerIndex": 109.52
      },
      {
        "country": "Austria",
        "costofLivingIndex": 70.38,
        "rentIndex": 26.81,
        "costofLivingPlusRentIndex": 49.54,
        "groceriesIndex": 61.73,
        "restaurantPriceIndex": 68.09,
        "localPurchasingPowerIndex": 82.38
      },
      {
        "country": "Finland",
        "costofLivingIndex": 70.29,
        "rentIndex": 26.16,
        "costofLivingPlusRentIndex": 49.18,
        "groceriesIndex": 56.52,
        "restaurantPriceIndex": 76.81,
        "localPurchasingPowerIndex": 99.93
      },
      {
        "country": "Sweden",
        "costofLivingIndex": 69.85,
        "rentIndex": 25.9,
        "costofLivingPlusRentIndex": 48.83,
        "groceriesIndex": 60.47,
        "restaurantPriceIndex": 72.35,
        "localPurchasingPowerIndex": 101.73
      },
      {
        "country": "Canada",
        "costofLivingIndex": 67.62,
        "rentIndex": 30.73,
        "costofLivingPlusRentIndex": 49.98,
        "groceriesIndex": 63.68,
        "restaurantPriceIndex": 63.53,
        "localPurchasingPowerIndex": 95.09
      },
      {
        "country": "Puerto Rico",
        "costofLivingIndex": 67.54,
        "rentIndex": 19.29,
        "costofLivingPlusRentIndex": 44.46,
        "groceriesIndex": 65.76,
        "restaurantPriceIndex": 58.68,
        "localPurchasingPowerIndex": 79.38
      },
      {
        "country": "Malta",
        "costofLivingIndex": 67.46,
        "rentIndex": 31.04,
        "costofLivingPlusRentIndex": 50.04,
        "groceriesIndex": 54.9,
        "restaurantPriceIndex": 75.94,
        "localPurchasingPowerIndex": 46.32
      },
      {
        "country": "United Kingdom",
        "costofLivingIndex": 67.28,
        "rentIndex": 29.85,
        "costofLivingPlusRentIndex": 49.38,
        "groceriesIndex": 51.27,
        "restaurantPriceIndex": 74.13,
        "localPurchasingPowerIndex": 91.73
      },
      {
        "country": "Italy",
        "costofLivingIndex": 67.26,
        "rentIndex": 21.22,
        "costofLivingPlusRentIndex": 45.24,
        "groceriesIndex": 55.44,
        "restaurantPriceIndex": 72.32,
        "localPurchasingPowerIndex": 65.59
      },
      {
        "country": "Germany",
        "costofLivingIndex": 65.26,
        "rentIndex": 27.06,
        "costofLivingPlusRentIndex": 46.99,
        "groceriesIndex": 49.23,
        "restaurantPriceIndex": 61.58,
        "localPurchasingPowerIndex": 102.36
      },
      {
        "country": "Macao",
        "costofLivingIndex": 64.84,
        "rentIndex": 43.98,
        "costofLivingPlusRentIndex": 54.87,
        "groceriesIndex": 62,
        "restaurantPriceIndex": 43.37,
        "localPurchasingPowerIndex": 80.9
      },
      {
        "country": "Qatar",
        "costofLivingIndex": 64.04,
        "rentIndex": 47.44,
        "costofLivingPlusRentIndex": 56.1,
        "groceriesIndex": 53.61,
        "restaurantPriceIndex": 66.83,
        "localPurchasingPowerIndex": 111.69
      },
      {
        "country": "United Arab Emirates",
        "costofLivingIndex": 61.98,
        "rentIndex": 41.07,
        "costofLivingPlusRentIndex": 51.98,
        "groceriesIndex": 47.63,
        "restaurantPriceIndex": 61.32,
        "localPurchasingPowerIndex": 91.58
      },
      {
        "country": "Taiwan",
        "costofLivingIndex": 61.37,
        "rentIndex": 16.42,
        "costofLivingPlusRentIndex": 39.87,
        "groceriesIndex": 71.51,
        "restaurantPriceIndex": 28.49,
        "localPurchasingPowerIndex": 65.67
      },
      {
        "country": "Lebanon",
        "costofLivingIndex": 60.5,
        "rentIndex": 24.54,
        "costofLivingPlusRentIndex": 43.3,
        "groceriesIndex": 43.92,
        "restaurantPriceIndex": 58.16,
        "localPurchasingPowerIndex": 44.47
      },
      {
        "country": "Bahrain",
        "costofLivingIndex": 58.94,
        "rentIndex": 30.95,
        "costofLivingPlusRentIndex": 45.55,
        "groceriesIndex": 48.11,
        "restaurantPriceIndex": 54.55,
        "localPurchasingPowerIndex": 57.88
      },
      {
        "country": "Cyprus",
        "costofLivingIndex": 57.93,
        "rentIndex": 20.54,
        "costofLivingPlusRentIndex": 40.05,
        "groceriesIndex": 44.21,
        "restaurantPriceIndex": 63.11,
        "localPurchasingPowerIndex": 57.41
      },
      {
        "country": "Jamaica",
        "costofLivingIndex": 57.82,
        "rentIndex": 15.25,
        "costofLivingPlusRentIndex": 37.46,
        "groceriesIndex": 58.96,
        "restaurantPriceIndex": 38.12,
        "localPurchasingPowerIndex": 32.37
      },
      {
        "country": "Greece",
        "costofLivingIndex": 55.67,
        "rentIndex": 11.68,
        "costofLivingPlusRentIndex": 34.62,
        "groceriesIndex": 41.63,
        "restaurantPriceIndex": 53.74,
        "localPurchasingPowerIndex": 43.68
      },
      {
        "country": "Zimbabwe",
        "costofLivingIndex": 55.3,
        "rentIndex": 11.02,
        "costofLivingPlusRentIndex": 34.12,
        "groceriesIndex": 50.8,
        "restaurantPriceIndex": 40.79,
        "localPurchasingPowerIndex": 26.03
      },
      {
        "country": "Palestine",
        "costofLivingIndex": 54.54,
        "rentIndex": 8.83,
        "costofLivingPlusRentIndex": 32.68,
        "groceriesIndex": 46.67,
        "restaurantPriceIndex": 38.93,
        "localPurchasingPowerIndex": 46.91
      },
      {
        "country": "Ethiopia",
        "costofLivingIndex": 54.39,
        "rentIndex": 20.9,
        "costofLivingPlusRentIndex": 38.37,
        "groceriesIndex": 36.3,
        "restaurantPriceIndex": 19.37,
        "localPurchasingPowerIndex": 8.34
      },
      {
        "country": "Panama",
        "costofLivingIndex": 54.16,
        "rentIndex": 24.76,
        "costofLivingPlusRentIndex": 40.09,
        "groceriesIndex": 53.03,
        "restaurantPriceIndex": 47.27,
        "localPurchasingPowerIndex": 34.23
      },
      {
        "country": "Costa Rica",
        "costofLivingIndex": 53.98,
        "rentIndex": 15.55,
        "costofLivingPlusRentIndex": 35.6,
        "groceriesIndex": 49.6,
        "restaurantPriceIndex": 43.51,
        "localPurchasingPowerIndex": 42.61
      },
      {
        "country": "Spain",
        "costofLivingIndex": 53.77,
        "rentIndex": 21.77,
        "costofLivingPlusRentIndex": 38.46,
        "groceriesIndex": 42.38,
        "restaurantPriceIndex": 52.07,
        "localPurchasingPowerIndex": 72.03
      },
      {
        "country": "Trinidad And Tobago",
        "costofLivingIndex": 53.7,
        "rentIndex": 17.26,
        "costofLivingPlusRentIndex": 36.27,
        "groceriesIndex": 49.43,
        "restaurantPriceIndex": 49.83,
        "localPurchasingPowerIndex": 45.7
      },
      {
        "country": "Jordan",
        "costofLivingIndex": 53.67,
        "rentIndex": 11.54,
        "costofLivingPlusRentIndex": 33.52,
        "groceriesIndex": 43.32,
        "restaurantPriceIndex": 47.12,
        "localPurchasingPowerIndex": 34.88
      },
      {
        "country": "Slovenia",
        "costofLivingIndex": 53.43,
        "rentIndex": 17.09,
        "costofLivingPlusRentIndex": 36.05,
        "groceriesIndex": 43.76,
        "restaurantPriceIndex": 45.43,
        "localPurchasingPowerIndex": 66.31
      },
      {
        "country": "Mauritius",
        "costofLivingIndex": 53.04,
        "rentIndex": 11.99,
        "costofLivingPlusRentIndex": 33.41,
        "groceriesIndex": 48.94,
        "restaurantPriceIndex": 43.96,
        "localPurchasingPowerIndex": 30.88
      },
      {
        "country": "Uruguay",
        "costofLivingIndex": 51.04,
        "rentIndex": 14.43,
        "costofLivingPlusRentIndex": 33.53,
        "groceriesIndex": 40.12,
        "restaurantPriceIndex": 47.41,
        "localPurchasingPowerIndex": 37.46
      },
      {
        "country": "Estonia",
        "costofLivingIndex": 50.93,
        "rentIndex": 15.41,
        "costofLivingPlusRentIndex": 33.94,
        "groceriesIndex": 36.57,
        "restaurantPriceIndex": 52.94,
        "localPurchasingPowerIndex": 71.3
      },
      {
        "country": "Kuwait",
        "costofLivingIndex": 50.37,
        "rentIndex": 31.21,
        "costofLivingPlusRentIndex": 41.21,
        "groceriesIndex": 34.68,
        "restaurantPriceIndex": 47.08,
        "localPurchasingPowerIndex": 85.59
      },
      {
        "country": "Thailand",
        "costofLivingIndex": 49.77,
        "rentIndex": 17.1,
        "costofLivingPlusRentIndex": 34.14,
        "groceriesIndex": 49.2,
        "restaurantPriceIndex": 24.9,
        "localPurchasingPowerIndex": 35.45
      },
      {
        "country": "Croatia",
        "costofLivingIndex": 49.7,
        "rentIndex": 13.5,
        "costofLivingPlusRentIndex": 32.38,
        "groceriesIndex": 39.9,
        "restaurantPriceIndex": 42.44,
        "localPurchasingPowerIndex": 50.42
      },
      {
        "country": "Portugal",
        "costofLivingIndex": 49.52,
        "rentIndex": 21.81,
        "costofLivingPlusRentIndex": 36.27,
        "groceriesIndex": 38.14,
        "restaurantPriceIndex": 42.48,
        "localPurchasingPowerIndex": 49.43
      },
      {
        "country": "Oman",
        "costofLivingIndex": 49.28,
        "rentIndex": 17.98,
        "costofLivingPlusRentIndex": 34.31,
        "groceriesIndex": 43.5,
        "restaurantPriceIndex": 44.26,
        "localPurchasingPowerIndex": 80.97
      },
      {
        "country": "Belize",
        "costofLivingIndex": 49.23,
        "rentIndex": 9.74,
        "costofLivingPlusRentIndex": 30.34,
        "groceriesIndex": 41.89,
        "restaurantPriceIndex": 37.05,
        "localPurchasingPowerIndex": 57.53
      },
      {
        "country": "Saudi Arabia",
        "costofLivingIndex": 48.34,
        "rentIndex": 11.39,
        "costofLivingPlusRentIndex": 30.67,
        "groceriesIndex": 37.89,
        "restaurantPriceIndex": 33.51,
        "localPurchasingPowerIndex": 100
      },
      {
        "country": "Latvia",
        "costofLivingIndex": 47.94,
        "rentIndex": 12.34,
        "costofLivingPlusRentIndex": 30.91,
        "groceriesIndex": 34.85,
        "restaurantPriceIndex": 42.88,
        "localPurchasingPowerIndex": 52.48
      },
      {
        "country": "Cambodia",
        "costofLivingIndex": 47.49,
        "rentIndex": 14.9,
        "costofLivingPlusRentIndex": 31.9,
        "groceriesIndex": 44.56,
        "restaurantPriceIndex": 25.19,
        "localPurchasingPowerIndex": 11.29
      },
      {
        "country": "Fiji",
        "costofLivingIndex": 47.48,
        "rentIndex": 18.55,
        "costofLivingPlusRentIndex": 33.64,
        "groceriesIndex": 52.67,
        "restaurantPriceIndex": 35.87,
        "localPurchasingPowerIndex": 33.17
      },
      {
        "country": "Czech Republic",
        "costofLivingIndex": 46.15,
        "rentIndex": 19.56,
        "costofLivingPlusRentIndex": 33.43,
        "groceriesIndex": 38.13,
        "restaurantPriceIndex": 34.1,
        "localPurchasingPowerIndex": 62.82
      },
      {
        "country": "El Salvador",
        "costofLivingIndex": 45.57,
        "rentIndex": 13.48,
        "costofLivingPlusRentIndex": 30.22,
        "groceriesIndex": 43.67,
        "restaurantPriceIndex": 34.8,
        "localPurchasingPowerIndex": 24.71
      },
      {
        "country": "Brunei",
        "costofLivingIndex": 44.71,
        "rentIndex": 23.08,
        "costofLivingPlusRentIndex": 34.36,
        "groceriesIndex": 37.11,
        "restaurantPriceIndex": 38.06,
        "localPurchasingPowerIndex": 86.95
      },
      {
        "country": "Nicaragua",
        "costofLivingIndex": 44.56,
        "rentIndex": 7.61,
        "costofLivingPlusRentIndex": 26.88,
        "groceriesIndex": 41.71,
        "restaurantPriceIndex": 31.41,
        "localPurchasingPowerIndex": 23.92
      },
      {
        "country": "Slovakia",
        "costofLivingIndex": 44.46,
        "rentIndex": 16.11,
        "costofLivingPlusRentIndex": 30.9,
        "groceriesIndex": 37.51,
        "restaurantPriceIndex": 33.82,
        "localPurchasingPowerIndex": 56.94
      },
      {
        "country": "Lithuania",
        "costofLivingIndex": 44.28,
        "rentIndex": 13.65,
        "costofLivingPlusRentIndex": 29.63,
        "groceriesIndex": 33.63,
        "restaurantPriceIndex": 42.7,
        "localPurchasingPowerIndex": 57.85
      },
      {
        "country": "Dominican Republic",
        "costofLivingIndex": 44.06,
        "rentIndex": 10.62,
        "costofLivingPlusRentIndex": 28.06,
        "groceriesIndex": 35.93,
        "restaurantPriceIndex": 38.27,
        "localPurchasingPowerIndex": 23.95
      },
      {
        "country": "Chile",
        "costofLivingIndex": 43.62,
        "rentIndex": 13.39,
        "costofLivingPlusRentIndex": 29.16,
        "groceriesIndex": 36.45,
        "restaurantPriceIndex": 41.57,
        "localPurchasingPowerIndex": 42.5
      },
      {
        "country": "Cuba",
        "costofLivingIndex": 43.46,
        "rentIndex": 4.84,
        "costofLivingPlusRentIndex": 24.99,
        "groceriesIndex": 37.4,
        "restaurantPriceIndex": 30.95,
        "localPurchasingPowerIndex": 2.18
      },
      {
        "country": "Suriname",
        "costofLivingIndex": 43.14,
        "rentIndex": 7.79,
        "costofLivingPlusRentIndex": 26.23,
        "groceriesIndex": 45.78,
        "restaurantPriceIndex": 34.98,
        "localPurchasingPowerIndex": 22.39
      },
      {
        "country": "Namibia",
        "costofLivingIndex": 43.1,
        "rentIndex": 16.12,
        "costofLivingPlusRentIndex": 30.19,
        "groceriesIndex": 36.8,
        "restaurantPriceIndex": 39.22,
        "localPurchasingPowerIndex": 55.65
      },
      {
        "country": "South Africa",
        "costofLivingIndex": 42.87,
        "rentIndex": 16.61,
        "costofLivingPlusRentIndex": 30.31,
        "groceriesIndex": 33.29,
        "restaurantPriceIndex": 40.58,
        "localPurchasingPowerIndex": 73.61
      },
      {
        "country": "Guatemala",
        "costofLivingIndex": 42.7,
        "rentIndex": 15.29,
        "costofLivingPlusRentIndex": 29.59,
        "groceriesIndex": 37.41,
        "restaurantPriceIndex": 33,
        "localPurchasingPowerIndex": 39.83
      },
      {
        "country": "Honduras",
        "costofLivingIndex": 42.17,
        "rentIndex": 10.6,
        "costofLivingPlusRentIndex": 27.07,
        "groceriesIndex": 33.33,
        "restaurantPriceIndex": 30.55,
        "localPurchasingPowerIndex": 30.26
      },
      {
        "country": "Myanmar",
        "costofLivingIndex": 42.11,
        "rentIndex": 23.78,
        "costofLivingPlusRentIndex": 33.35,
        "groceriesIndex": 44.68,
        "restaurantPriceIndex": 19.04,
        "localPurchasingPowerIndex": 10.22
      },
      {
        "country": "Ecuador",
        "costofLivingIndex": 40.98,
        "rentIndex": 11.96,
        "costofLivingPlusRentIndex": 27.1,
        "groceriesIndex": 35.46,
        "restaurantPriceIndex": 30.66,
        "localPurchasingPowerIndex": 36.08
      },
      {
        "country": "Hungary",
        "costofLivingIndex": 40.85,
        "rentIndex": 13.97,
        "costofLivingPlusRentIndex": 27.99,
        "groceriesIndex": 30.77,
        "restaurantPriceIndex": 34.46,
        "localPurchasingPowerIndex": 47.55
      },
      {
        "country": "Brazil",
        "costofLivingIndex": 40.22,
        "rentIndex": 10.65,
        "costofLivingPlusRentIndex": 26.08,
        "groceriesIndex": 29.2,
        "restaurantPriceIndex": 30.78,
        "localPurchasingPowerIndex": 32.81
      },
      {
        "country": "Kenya",
        "costofLivingIndex": 40.21,
        "rentIndex": 10.73,
        "costofLivingPlusRentIndex": 26.11,
        "groceriesIndex": 35.35,
        "restaurantPriceIndex": 35.06,
        "localPurchasingPowerIndex": 27.32
      },
      {
        "country": "China",
        "costofLivingIndex": 40.04,
        "rentIndex": 16.38,
        "costofLivingPlusRentIndex": 28.72,
        "groceriesIndex": 40.37,
        "restaurantPriceIndex": 29.16,
        "localPurchasingPowerIndex": 60.88
      },
      {
        "country": "Poland",
        "costofLivingIndex": 40.04,
        "rentIndex": 15.67,
        "costofLivingPlusRentIndex": 28.38,
        "groceriesIndex": 30.55,
        "restaurantPriceIndex": 33.45,
        "localPurchasingPowerIndex": 59.61
      },
      {
        "country": "Russia",
        "costofLivingIndex": 39.21,
        "rentIndex": 11.36,
        "costofLivingPlusRentIndex": 25.89,
        "groceriesIndex": 31.08,
        "restaurantPriceIndex": 39.61,
        "localPurchasingPowerIndex": 38.94
      },
      {
        "country": "Botswana",
        "costofLivingIndex": 39.13,
        "rentIndex": 11.12,
        "costofLivingPlusRentIndex": 25.73,
        "groceriesIndex": 31.74,
        "restaurantPriceIndex": 39.98,
        "localPurchasingPowerIndex": 58.1
      },
      {
        "country": "Malaysia",
        "costofLivingIndex": 39.12,
        "rentIndex": 11,
        "costofLivingPlusRentIndex": 25.67,
        "groceriesIndex": 37.58,
        "restaurantPriceIndex": 22.94,
        "localPurchasingPowerIndex": 64.49
      },
      {
        "country": "Iraq",
        "costofLivingIndex": 39.04,
        "rentIndex": 11.28,
        "costofLivingPlusRentIndex": 25.76,
        "groceriesIndex": 31.85,
        "restaurantPriceIndex": 32.72,
        "localPurchasingPowerIndex": 42.43
      },
      {
        "country": "Iran",
        "costofLivingIndex": 39.01,
        "rentIndex": 14.48,
        "costofLivingPlusRentIndex": 27.28,
        "groceriesIndex": 35.54,
        "restaurantPriceIndex": 25.12,
        "localPurchasingPowerIndex": 22.69
      },
      {
        "country": "Somalia",
        "costofLivingIndex": 38.68,
        "rentIndex": 4.75,
        "costofLivingPlusRentIndex": 22.45,
        "groceriesIndex": 45.88,
        "restaurantPriceIndex": 27.04,
        "localPurchasingPowerIndex": 33.24
      },
      {
        "country": "Peru",
        "costofLivingIndex": 38.65,
        "rentIndex": 12.78,
        "costofLivingPlusRentIndex": 26.28,
        "groceriesIndex": 33.8,
        "restaurantPriceIndex": 24.69,
        "localPurchasingPowerIndex": 33.95
      },
      {
        "country": "Vietnam",
        "costofLivingIndex": 38.34,
        "rentIndex": 13.57,
        "costofLivingPlusRentIndex": 26.5,
        "groceriesIndex": 37.06,
        "restaurantPriceIndex": 19.59,
        "localPurchasingPowerIndex": 28.14
      },
      {
        "country": "Montenegro",
        "costofLivingIndex": 38.23,
        "rentIndex": 10.38,
        "costofLivingPlusRentIndex": 24.91,
        "groceriesIndex": 28.63,
        "restaurantPriceIndex": 33.16,
        "localPurchasingPowerIndex": 39.8
      },
      {
        "country": "Ghana",
        "costofLivingIndex": 37.65,
        "rentIndex": 19.41,
        "costofLivingPlusRentIndex": 28.93,
        "groceriesIndex": 37.17,
        "restaurantPriceIndex": 26.59,
        "localPurchasingPowerIndex": 14.66
      },
      {
        "country": "Philippines",
        "costofLivingIndex": 37.63,
        "rentIndex": 9,
        "costofLivingPlusRentIndex": 23.94,
        "groceriesIndex": 33.46,
        "restaurantPriceIndex": 20.84,
        "localPurchasingPowerIndex": 23.48
      },
      {
        "country": "Indonesia",
        "costofLivingIndex": 37.27,
        "rentIndex": 10.62,
        "costofLivingPlusRentIndex": 24.52,
        "groceriesIndex": 37.36,
        "restaurantPriceIndex": 18.25,
        "localPurchasingPowerIndex": 25.05
      },
      {
        "country": "Bulgaria",
        "costofLivingIndex": 36.7,
        "rentIndex": 9.64,
        "costofLivingPlusRentIndex": 23.75,
        "groceriesIndex": 30.09,
        "restaurantPriceIndex": 29.14,
        "localPurchasingPowerIndex": 49.37
      },
      {
        "country": "Albania",
        "costofLivingIndex": 36.39,
        "rentIndex": 8.55,
        "costofLivingPlusRentIndex": 23.07,
        "groceriesIndex": 28.39,
        "restaurantPriceIndex": 26.75,
        "localPurchasingPowerIndex": 29.56
      },
      {
        "country": "Bosnia And Herzegovina",
        "costofLivingIndex": 35.97,
        "rentIndex": 6.72,
        "costofLivingPlusRentIndex": 21.97,
        "groceriesIndex": 28.08,
        "restaurantPriceIndex": 25.1,
        "localPurchasingPowerIndex": 41.83
      },
      {
        "country": "Mexico",
        "costofLivingIndex": 35.72,
        "rentIndex": 11.46,
        "costofLivingPlusRentIndex": 24.11,
        "groceriesIndex": 32.39,
        "restaurantPriceIndex": 32.12,
        "localPurchasingPowerIndex": 41.81
      },
      {
        "country": "Serbia",
        "costofLivingIndex": 35.72,
        "rentIndex": 9.08,
        "costofLivingPlusRentIndex": 22.98,
        "groceriesIndex": 25.46,
        "restaurantPriceIndex": 28.63,
        "localPurchasingPowerIndex": 36.72
      },
      {
        "country": "Romania",
        "costofLivingIndex": 35.31,
        "rentIndex": 10.05,
        "costofLivingPlusRentIndex": 23.22,
        "groceriesIndex": 29.03,
        "restaurantPriceIndex": 30.5,
        "localPurchasingPowerIndex": 48.86
      },
      {
        "country": "Tanzania",
        "costofLivingIndex": 35.25,
        "rentIndex": 14.04,
        "costofLivingPlusRentIndex": 25.11,
        "groceriesIndex": 29.66,
        "restaurantPriceIndex": 22.57,
        "localPurchasingPowerIndex": 17.58
      },
      {
        "country": "Belarus",
        "costofLivingIndex": 34.7,
        "rentIndex": 10.5,
        "costofLivingPlusRentIndex": 23.13,
        "groceriesIndex": 28.06,
        "restaurantPriceIndex": 38.94,
        "localPurchasingPowerIndex": 37
      },
      {
        "country": "Turkey",
        "costofLivingIndex": 34.69,
        "rentIndex": 6.78,
        "costofLivingPlusRentIndex": 21.34,
        "groceriesIndex": 29.76,
        "restaurantPriceIndex": 24.16,
        "localPurchasingPowerIndex": 40.85
      },
      {
        "country": "Bolivia",
        "costofLivingIndex": 34.56,
        "rentIndex": 10.93,
        "costofLivingPlusRentIndex": 23.26,
        "groceriesIndex": 28.09,
        "restaurantPriceIndex": 25.11,
        "localPurchasingPowerIndex": 39.34
      },
      {
        "country": "Morocco",
        "costofLivingIndex": 34.32,
        "rentIndex": 8.94,
        "costofLivingPlusRentIndex": 22.18,
        "groceriesIndex": 30.11,
        "restaurantPriceIndex": 24.5,
        "localPurchasingPowerIndex": 35.25
      },
      {
        "country": "Moldova",
        "costofLivingIndex": 33.7,
        "rentIndex": 8.4,
        "costofLivingPlusRentIndex": 21.6,
        "groceriesIndex": 25.96,
        "restaurantPriceIndex": 27.79,
        "localPurchasingPowerIndex": 27.57
      },
      {
        "country": "Rwanda",
        "costofLivingIndex": 33.35,
        "rentIndex": 11.88,
        "costofLivingPlusRentIndex": 23.08,
        "groceriesIndex": 26.83,
        "restaurantPriceIndex": 29.17,
        "localPurchasingPowerIndex": 19.32
      },
      {
        "country": "Ukraine",
        "costofLivingIndex": 33.18,
        "rentIndex": 10.46,
        "costofLivingPlusRentIndex": 22.31,
        "groceriesIndex": 26.01,
        "restaurantPriceIndex": 26.42,
        "localPurchasingPowerIndex": 31.8
      },
      {
        "country": "Argentina",
        "costofLivingIndex": 32.95,
        "rentIndex": 8.33,
        "costofLivingPlusRentIndex": 21.17,
        "groceriesIndex": 25.82,
        "restaurantPriceIndex": 30.52,
        "localPurchasingPowerIndex": 47.22
      },
      {
        "country": "Armenia",
        "costofLivingIndex": 32.84,
        "rentIndex": 10.91,
        "costofLivingPlusRentIndex": 22.35,
        "groceriesIndex": 25.61,
        "restaurantPriceIndex": 30.43,
        "localPurchasingPowerIndex": 28
      },
      {
        "country": "Bangladesh",
        "costofLivingIndex": 32.25,
        "rentIndex": 5.01,
        "costofLivingPlusRentIndex": 19.22,
        "groceriesIndex": 29.72,
        "restaurantPriceIndex": 19.21,
        "localPurchasingPowerIndex": 33.21
      },
      {
        "country": "Zambia",
        "costofLivingIndex": 31.72,
        "rentIndex": 7.39,
        "costofLivingPlusRentIndex": 20.08,
        "groceriesIndex": 26.86,
        "restaurantPriceIndex": 22.07,
        "localPurchasingPowerIndex": 54.14
      },
      {
        "country": "Sri Lanka",
        "costofLivingIndex": 31.61,
        "rentIndex": 7.74,
        "costofLivingPlusRentIndex": 20.2,
        "groceriesIndex": 35.09,
        "restaurantPriceIndex": 18.76,
        "localPurchasingPowerIndex": 24.45
      },
      {
        "country": "North Macedonia",
        "costofLivingIndex": 31.59,
        "rentIndex": 6.49,
        "costofLivingPlusRentIndex": 19.58,
        "groceriesIndex": 24.94,
        "restaurantPriceIndex": 23.31,
        "localPurchasingPowerIndex": 37.15
      },
      {
        "country": "Paraguay",
        "costofLivingIndex": 31.1,
        "rentIndex": 9.66,
        "costofLivingPlusRentIndex": 20.85,
        "groceriesIndex": 25.03,
        "restaurantPriceIndex": 25.01,
        "localPurchasingPowerIndex": 32.6
      },
      {
        "country": "Nigeria",
        "costofLivingIndex": 31,
        "rentIndex": 23.59,
        "costofLivingPlusRentIndex": 27.45,
        "groceriesIndex": 31.15,
        "restaurantPriceIndex": 17.71,
        "localPurchasingPowerIndex": 13.52
      },
      {
        "country": "Colombia",
        "costofLivingIndex": 30.66,
        "rentIndex": 9.58,
        "costofLivingPlusRentIndex": 20.58,
        "groceriesIndex": 25.05,
        "restaurantPriceIndex": 22.44,
        "localPurchasingPowerIndex": 31.12
      },
      {
        "country": "Kazakhstan",
        "costofLivingIndex": 30.64,
        "rentIndex": 9.78,
        "costofLivingPlusRentIndex": 20.66,
        "groceriesIndex": 24.31,
        "restaurantPriceIndex": 29.87,
        "localPurchasingPowerIndex": 38.36
      },
      {
        "country": "Uganda",
        "costofLivingIndex": 30.18,
        "rentIndex": 10.15,
        "costofLivingPlusRentIndex": 20.6,
        "groceriesIndex": 25.25,
        "restaurantPriceIndex": 22.14,
        "localPurchasingPowerIndex": 20.5
      },
      {
        "country": "Algeria",
        "costofLivingIndex": 30.1,
        "rentIndex": 5.34,
        "costofLivingPlusRentIndex": 18.26,
        "groceriesIndex": 30.71,
        "restaurantPriceIndex": 15.89,
        "localPurchasingPowerIndex": 28.69
      },
      {
        "country": "Azerbaijan",
        "costofLivingIndex": 29.92,
        "rentIndex": 9.48,
        "costofLivingPlusRentIndex": 20.15,
        "groceriesIndex": 23.74,
        "restaurantPriceIndex": 30.36,
        "localPurchasingPowerIndex": 30.2
      },
      {
        "country": "Egypt",
        "costofLivingIndex": 29.54,
        "rentIndex": 5.49,
        "costofLivingPlusRentIndex": 18.04,
        "groceriesIndex": 25.5,
        "restaurantPriceIndex": 23.53,
        "localPurchasingPowerIndex": 22.41
      },
      {
        "country": "Nepal",
        "costofLivingIndex": 29.05,
        "rentIndex": 4.77,
        "costofLivingPlusRentIndex": 17.44,
        "groceriesIndex": 24.91,
        "restaurantPriceIndex": 20.36,
        "localPurchasingPowerIndex": 21.9
      },
      {
        "country": "Georgia",
        "costofLivingIndex": 28.48,
        "rentIndex": 9.8,
        "costofLivingPlusRentIndex": 19.54,
        "groceriesIndex": 23.05,
        "restaurantPriceIndex": 26.66,
        "localPurchasingPowerIndex": 24.88
      },
      {
        "country": "Kosovo (Disputed Territory)",
        "costofLivingIndex": 28.47,
        "rentIndex": 8.47,
        "costofLivingPlusRentIndex": 18.91,
        "groceriesIndex": 26.53,
        "restaurantPriceIndex": 21.04,
        "localPurchasingPowerIndex": 48.9
      },
      {
        "country": "Venezuela",
        "costofLivingIndex": 27.17,
        "rentIndex": 6.81,
        "costofLivingPlusRentIndex": 17.43,
        "groceriesIndex": 28.29,
        "restaurantPriceIndex": 24.41,
        "localPurchasingPowerIndex": 2.61
      },
      {
        "country": "Tunisia",
        "costofLivingIndex": 27.04,
        "rentIndex": 5.51,
        "costofLivingPlusRentIndex": 16.74,
        "groceriesIndex": 25.25,
        "restaurantPriceIndex": 14.95,
        "localPurchasingPowerIndex": 34.45
      },
      {
        "country": "Kyrgyzstan",
        "costofLivingIndex": 26.97,
        "rentIndex": 9.18,
        "costofLivingPlusRentIndex": 18.46,
        "groceriesIndex": 23.39,
        "restaurantPriceIndex": 21.45,
        "localPurchasingPowerIndex": 24.98
      },
      {
        "country": "Uzbekistan",
        "costofLivingIndex": 26.01,
        "rentIndex": 7.54,
        "costofLivingPlusRentIndex": 17.18,
        "groceriesIndex": 21.59,
        "restaurantPriceIndex": 20.17,
        "localPurchasingPowerIndex": 24.31
      },
      {
        "country": "Syria",
        "costofLivingIndex": 25.31,
        "rentIndex": 5.68,
        "costofLivingPlusRentIndex": 15.92,
        "groceriesIndex": 22.42,
        "restaurantPriceIndex": 21.38,
        "localPurchasingPowerIndex": 11.46
      },
      {
        "country": "India",
        "costofLivingIndex": 24.58,
        "rentIndex": 5.68,
        "costofLivingPlusRentIndex": 15.54,
        "groceriesIndex": 24.55,
        "restaurantPriceIndex": 17.17,
        "localPurchasingPowerIndex": 54.3
      },
      {
        "country": "Afghanistan",
        "costofLivingIndex": 24.24,
        "rentIndex": 4.03,
        "costofLivingPlusRentIndex": 14.58,
        "groceriesIndex": 17.7,
        "restaurantPriceIndex": 17.38,
        "localPurchasingPowerIndex": 28.2
      },
      {
        "country": "Pakistan",
        "costofLivingIndex": 21.98,
        "rentIndex": 4.59,
        "costofLivingPlusRentIndex": 13.66,
        "groceriesIndex": 19.08,
        "restaurantPriceIndex": 16.78,
        "localPurchasingPowerIndex": 30.57
      },
    ]

    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('costOfLiving', null, {});
  }
};
