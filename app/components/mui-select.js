import Ember from "ember";
import DropdownMenu from "./mui-dropdown-menu";

var RSVP = Ember.RSVP;

/*
  Vaguely inspired by https://github.com/paddle8/ember-select-menu
  
  TODO:
    - Disabled items
    - Grouped items
    - Keyboard Nav
*/ 

export default DropdownMenu.extend({
  options: function () {
    return [];
  }.property(),

  selectedOption: function(){
    return this.get("options").findProperty("selected", true);
  }.property("options.@each.selected"),

  prompt: function(){
    return this.get("options").findProperty("value", null);
  }.property("options.@each.value"),

  value: function (key, value) {
    if (value && value.then) {
      var select = this;
      RSVP.Promise.cast(value).then(function (unwrappedValue) {
        if (select.isDestroyed) { return; }
        select.set('value', unwrappedValue);
      });
    } else if (value == null) {
      if (this.get('prompt')) { return; }
      var firstOption = this.get('options.firstObject.value');
      if (firstOption) {
        this.set('value', firstOption);
      }
    }

    return value;
  }.property(),

  label: Ember.computed.alias("selectedOption.label")
});