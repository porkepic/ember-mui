import Ember from "ember";

export default Ember.Component.extend({
  tagName: "span",
  classNameBindings: [":mui-icon",
                      "withinButton:mui-paper-button-icon",
                      "iconClass",],
  icon: "",
  iconClass: function(){
    return 'mdfi_' + this.get("icon").replace(/-/g, '_');
  }.property("icon"),

  withinButton: function(){
    return this.get("parentView").constructor.toString().indexOf("mui-paper-button") >= 0;
  }.property("parentView")

});