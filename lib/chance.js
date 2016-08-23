if (Meteor.isServer) {
  Chance = Npm.require('chance');
}

chance = Meteor.isClient ? this.chance : new Chance();
