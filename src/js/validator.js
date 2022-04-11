export default class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUsername() {
    return (
      /[\w-]/.test(this.name) && !/^(\d|-|_)|\d{4,}|(_|-|\d)$/g.test(this.name)
    );
  }
}
