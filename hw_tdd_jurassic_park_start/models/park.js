const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinosaurs.pop(dinosaur);
}

Park.prototype.atractMoreViewsDino = function () {
    let mostPopularDinosaur = this.dinosaurs[0];

    for (const dino of this.dinosaurs) {
      if (dino.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay) {
        mostPopularDinosaur = dino;
      }
    }
  
    return mostPopularDinosaur;
  }

module.exports = Park;