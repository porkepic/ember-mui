import Ember from "ember";

export default Ember.Component.extend({
  layoutName: "components/mui-checbox",
  classNameBindings: [":mui-checkbox", "checked:mui-checked"],

  value: false,
  name: "button",

  checked: function(){
    return !!this.get("value");
  }.property("value"),
  

  click: function(){
    if(this.get("action")){
      this.sendAction("action", !this.get("value"));
    }else{
      this.toggleProperty("value");
    }
  }
});