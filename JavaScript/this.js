var relationshio1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriednds: function() {
    var that = this;
    console.log(that);
    this.friends.forEach(function(friend) {
      console.log(that.name, friend);
    });
  }
};
relationshio1.logFriednds();

var relationshio2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriednds() {
    this.friends.forEach(friend => {
      console.log(this);
      console.log(this.name, friend);
    });
  }
};
relationshio2.logFriednds();
