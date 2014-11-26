import Ember from "ember";

export default Ember.Component.extend({
  layoutName: "components/mui-input",
  classNameBindings: [":mui-input",
                      ":mui-text",
                      "error:mui-error"],
  multiline: false,
  rows: 4,
  disabled: false,
  description: null,
  placeholder: null,
  value: null,
  required: true,

  onValueChange: function(){
    if(this.get("multiline")){
      var lineCount = this.get("value").match(/\n/gm);
      if(lineCount && lineCount.length > this.get("rows")){
        this.set("rows", lineCount.length);
      }
    }
  }.observes("value"),

  actions: {
    clickPlaceholder: function(){
      this.$("input,textarea").focus();
    }
  }
});