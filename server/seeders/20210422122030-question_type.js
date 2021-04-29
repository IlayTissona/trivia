'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('question_types', [
      {
        "template_str": "Which country is most populous?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "population",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "Which country is least populous?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "population",
        "is_first": false,
        "type": 1
      },
      {
        "template_str": "Which country is the largest by total area?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "areaByKm2",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "Which country is the smallest by total area?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "areaByKm2",
        "is_first": false,
        "type": 1
      },
      {
        "template_str": "Which country is the most densely populated?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "densityPopBykm2",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "Which country is the least densely populated?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "densityPopBykm2",
        "is_first": false,
        "type": 1
      },
      {
        "template_str": "Which country has the most cell phones per person?",
        "model": "CountriesGeneral",
        "answer_col": "country",
        "question_col": "phonesPer1000",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "What is the capital of <value>?",
        "model": "Capitals",
        "answer_col": "country",
        "question_col": "capital",
        "is_first": null,
        "type": 2
      },
      {
        "template_str": "How many people live in <value>?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "population",
        "is_first": null,
        "type": 2
      },
      {
        "template_str": "In what continent is <value>?",
        "model": "Capitals",
        "answer_col": "country",
        "question_col": "continent",
        "is_first": null,
        "type": 2
      },
      {
        "template_str": "Are there more people in <value1> than in <value2>?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "population",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Is <value1> larger than <value2>?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "areaByKm2",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Does <value1> have a higher population density than <value2>?",
        "model": "PopulationDensity",
        "answer_col": "country",
        "question_col": "densityPopBykm2",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Is the quality of life in <value1> higher than the quality of life in <value2>?",
        "model": "QualityOfLife",
        "answer_col": "country",
        "question_col": "qualityOfLifeIndex",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Is the crime rate of <value1> higher than the crime rate in <value2>?",
        "model": "CrimeStatus",
        "answer_col": "country",
        "question_col": "crimeIndex",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Are restaurants in <value1> more expensive than restaurants in <value2>?",
        "model": "CostOfLiving",
        "answer_col": "country",
        "question_col": "RestaurantPriceIndex",
        "is_first": null,
        "type": 3
      }
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('question_types', null, {});
  }
};
