class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {

      const recordList = await this.entityService.getAllRecords();
      return res.status(200).json(recordList);

    } catch (error) {
      //error
    }
  }
}

module.exports = Controller;
