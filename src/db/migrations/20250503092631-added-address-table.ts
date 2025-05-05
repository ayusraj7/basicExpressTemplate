"use strict";
import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels 
       ADD COLUMN address VARCHAR(250) NOT NULL;
     `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
       ALTER TABLE hotels
      DROP COLUMN address;
      `);
  },
};
