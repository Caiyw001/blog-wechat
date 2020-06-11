class Base {
  constructor(schema) {
    this.schema = schema;
  }

  async create(entity) {
    this.schema.create(entity);
  }

  async update(where, updateEntity) {

  }
}

module.exports = Base;