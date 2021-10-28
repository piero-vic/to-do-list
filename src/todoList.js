export default class ToDo {
  static list = [];

  constructor(description, complete = false) {
    this.description = description;
    this.complete = complete;
    this.index = ToDo.list.length;
    ToDo.list.push(this);
    this.getList = () => ToDo.list;
  }

  update() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }
}
