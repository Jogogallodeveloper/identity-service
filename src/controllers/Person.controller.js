const Controller = require("./Controller.js");
const PersonServiceClass = require('../services/person.services.js');

const personServiceInstance = new PersonServiceClass();

class PersonController extends Controller {
  constructor() {
    super(personServiceInstance);
  }
}

module.exports = new PersonController();
