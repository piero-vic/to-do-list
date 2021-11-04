export default class ToDo {
  static list = [];

  constructor(description, complete = false) {
    this.description = 'description';
    this.complete = complete;
    this.index = ToDo.list.length;
    ToDo.list.push(this);
    this.getList = () => ToDo.list;
  }
}
