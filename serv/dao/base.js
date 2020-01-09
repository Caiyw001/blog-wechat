class Base {
  constructor(schema) {
    this.schema = schema;
  }

  async create(entity) {
    this.schema.insert(entity);
  }

  async update(where, updateEntity) {

  }
}

module.exports = Base;