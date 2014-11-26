import Ember from "ember";
import ClickAwayable from "../mixins/click-awayable";

export default Ember.Component.extend(ClickAwayable, {
  layoutName: "components/mui-dropdown-menu",
  classNameBindings: ["icon:mui-drop-down-icon:mui-drop-down-menu",
                      "open:mui-open"],
  open: false,
  label: "",
  icon: null,

  clickAway: function(){
    this.set("open", false);
  },

  actions: {
    controlClick: function(){
      this.toggleProperty("open");
    }
  }
});