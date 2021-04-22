'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Question_types', [
      {
        "template_str": "Which country is most populous?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "population",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "Which country is least populous?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "population",
        "is_first": false,
        "type": 1
      },
      {
        "template_str": "Which country is the largest by total area?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "areaByKm2",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "Which country is the smallest by total area?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "areaByKm2",
        "is_first": false,
        "type": 1
      },
      {
        "template_str": "Which country is the most densely populated?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "densityPopBykm2",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "Which country is the least densely populated?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "densityPopBykm2",
        "is_first": false,
        "type": 1
      },
      {
        "template_str": "Which country has the most cell phones per person?",
        "model": "countriesGeneral",
        "question_col": "country",
        "answer_col": "phonesPer1000",
        "is_first": true,
        "type": 1
      },
      {
        "template_str": "What is the capital of <value>?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "capital",
        "is_first": null,
        "type": 2
      },
      {
        "template_str": "How many people live in <value>?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "population",
        "is_first": null,
        "type": 2
      },
      {
        "template_str": "In what continent is <value>?",
        "model": "Capitals",
        "question_col": "country",
        "answer_col": "continent",
        "is_first": null,
        "type": 2
      },
      {
        "template_str": "Are there more people in <value1> than in <value2>?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "population",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Is <value1> larger than <value2>?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "areaByKm2",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Does <value1> have a higher population density than <value2>?",
        "model": "PopulationDensity",
        "question_col": "country",
        "answer_col": "densityPopBykm2",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Is the quality of life in <value1> higher than the quality of life in <value2>?",
        "model": "QualityOfLife",
        "question_col": "country",
        "answer_col": "qualityOfLifeIndex",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Is the crime rate of <value1> higher than the crime rate in <value2>?",
        "model": "CrimeStatus",
        "question_col": "country",
        "answer_col": "crimeIndex",
        "is_first": null,
        "type": 3
      },
      {
        "template_str": "Are restaurants in <value1> more expensive than restaurants in <value2>?",
        "model": "CostOfLiving",
        "question_col": "country",
        "answer_col": "RestaurantPriceIndex",
        "is_first": null,
        "type": 3
      }
    ]);
  },
  // {
  //   "template_str": "Which country is most populous?",
  //   "model": "PopulationDensity",
  //   "question_col": "country",
  //   "answer_col": "population",
  //   "is_first": true,
  //   "type": 2
  // },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Question_types', null, {});
  }
};
