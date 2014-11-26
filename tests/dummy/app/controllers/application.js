import Ember from "ember";

export default Ember.ObjectController.extend({
  selectValues: function(){
    return [
    {label:"John Doe", value:1},
    {label:"John Kennedy", value:2},
    {label:"John Fitzgerald", value:3},
    {label:"John Malcovich", value:4}
  ]}.property(),

  radioSelection: 1
});