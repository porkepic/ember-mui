import Ember from "ember";
import MuiPaper from "./mui-paper";

export default MuiPaper.extend({
  // tagName: "button",
  layoutName: "mui-paper-button",
  classNameBindings: [":mui-paper-button",
                      ":mui-enhanced-button"],
  attributeBindings: ["disabled"],

  circle: function(){
    return this.get("type").indexOf("fab") >= 0;
  }.property("type"),


  // Handle the click
  _rippleEvent: true,
  click: function(e){
    // this was really a focus based click
    this._tabPressed = false;

    if (!this.get("disabled")){
      // ripple it!
      this.set("_rippleEvent", e);

      // pass on the event
      this.sendAction("action");
    }
  }
});