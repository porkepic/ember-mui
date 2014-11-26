import Ember from "ember";

export default Ember.Component.extend({
  layoutName: "components/mui-radio-button",
  classNameBindings: [":mui-radio-button"],
  value: null,
  selection: null,
  checked: function(){
    return this.get("value") === this.get("selection");
  }.property("selection"),
  name: "button",

  click: function(){
    if(this.get("action")){
      this.sendAction("action", !this.get("value"));
    }else{
      this.set("selection", this.get("value"));
    }
  }
});