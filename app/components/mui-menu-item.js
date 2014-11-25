import Ember from "ember";

export default Ember.Component.extend({
  classNameBindings: [":mui-menu-item",
                      "selected:mui-selected"],
  selected: false,

  click: function(){
    this.sendAction("action");
  }
});

