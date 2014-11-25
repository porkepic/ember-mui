import Ember from "ember";

export default Ember.Component.extend({
  tagName: "button",
  layoutName: "mui-button",
  classNameBindings: ["icon:mui-icon-button:mui-flat-button",
                      ":mui-enhanced-button",
                      "primary:mui-is-primary",
                      "disabled:mui-is-disabled",
                      "focused:mui-is-keyboard-focused"],
  attributeBindings: ["disabled"],

  icon: false,

  // Set the focus on the button.
  focused: false,
  _tabPressed: true,
  focusIn: function(){
    Ember.run.later(this, function(){
      if(this._tabPressed){
        this.set("focused", true);    
      }
      this._tabPressed = true;
    }, 150);
  },
  focusOut: function(){
    this.set("focused", false);
  },

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