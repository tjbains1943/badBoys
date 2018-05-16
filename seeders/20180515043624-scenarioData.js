'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Scenarios', [
      {
        scenarioBG: "../images/scenarios/house/house.jpg",
        scenarioIMG: ["../images/scenarios/house/burgYellow.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/mall.jpg",
        scenarioIMG: ["../images/scenarios/house/activeShooter.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/store.jpg",
        scenarioIMG: ["../images/scenarios/house/robber.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/carStop.jpg",
        scenarioIMG: ["../images/scenarios/house/car2.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/park.jpg",
        scenarioIMG: ["../images/scenarios/house/guywbat.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/street.jpg",
        scenarioIMG: ["../images/scenarios/house/gang.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/house.jpg",
        scenarioIMG: ["../images/scenarios/house/guntohead.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/mall.jpg",
        scenarioIMG: ["../images/scenarios/house/gunescalater.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/school.jpg",
        scenarioIMG: ["../images/scenarios/house/kidhostage.jpg"]
      },
      {
        scenarioBG: "../images/scenarios/house/park.jpg",
        scenarioIMG: ["../images/scenarios/house/cop.jpg"]
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
