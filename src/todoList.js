export class ToDo {
  static list = []

  constructor(description) {
    this.description = description,
    this.complete = false,
    this.index = ToDo.list.length
    ToDo.list.push(this)
  }

  update() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }
}
