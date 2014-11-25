import Ember from "ember";

export default Ember.Component.extend({
  layoutName: "mui-paper",
  classNameBindings: ["mui-paper",
                      "typeClass",
                      "depthClass",
                      "primary:mui-primary",
                      "disabled:mui-disabled",
                      "rounded:mui-rounded",
                      "circle:mui-circle",
                      "circle:mui-paper"],
  type: "flat",
  primary: false,
  disabled: false,
  circle: false,
  rounded: Em.computed.not("circle"),
  depth: 1,

  typeClass: function(){
    return ["mui", this.get("type")].join("-");
  }.property("type"),



  depthClass: function(){
    return "mui-z-depth-" + this.get("depth");
  }.property("depth")
});