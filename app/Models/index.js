class Card {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.reveal = false;
    this.selected = false;
  }
}

export default Card;
