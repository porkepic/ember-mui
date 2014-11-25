import Ember from "ember";
import ClickAwayable from "../mixins/click-awayable";

export default Ember.Component.extend(ClickAwayable, {
  layoutName: "mui-dropdown-menu",
  classNameBindings: [":mui-drop-down-menu",
                      "open:mui-open"],
  open: false,
  label: "",

  clickAway: function(){
    this.set("open", false);
  },

  actions: {
    controlClick: function(){
      this.toggleProperty("open");
    }
  }
});