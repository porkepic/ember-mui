import Ember from "ember";

export default Ember.Component.extend({
  layoutName: "mui-side-nav",
  classNameBindings: ["left:mui-left-nav:mui-right-nav",
                      "open::mui-closed"],
  left: true,
  open: false
});