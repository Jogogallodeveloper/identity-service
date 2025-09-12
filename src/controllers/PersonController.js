const database = require('../models');

class PersonController {
    static async getAll (req, res) {
        try {
            const listPersons = await database.Person.findAll();

            return res.status(200).json(listPersons);

        } catch (error) {
            //error
        }
    }
}

module.exports = PersonController;