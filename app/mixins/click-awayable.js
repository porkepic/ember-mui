import Ember from "ember";

export default Ember.Mixin.create({
  didInsertElement: function(){
    Ember.$(document).on("click", Ember.$.proxy(this._checkClickAway, this));
  },

  willRemoveElement: function(){
    Ember.$(document).off("click", Ember.$.proxy(this._checkClickAway, this));
  },

  _checkClickAway: function(e) {
    if(this.isDestroyed){
      return;
    }

    var $el = this.$();

    // Check if the target is inside the current component
    if(e.target != $el[0] && Ember.$(e.target).parents().index($el) === -1) {
      if (this.clickAway) this.clickAway();
    }
  }

});