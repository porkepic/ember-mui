import Ember from "ember";
import nearestParent from "../utils/nearest-parent";


export default Ember.Component.extend({
  classNameBindings: [":mui-menu-item",
                      "selected:mui-selected"],
  select: nearestParent("mui-select"),

  label: null,
  value: null,
  disabled: false,

  registerWithSelect: function(){
    if(!this.get("select")) return;

    this.get("select.options").unshiftObject(this);
  }.on("didInsertElement"),

  unregisterWithSelect: function(){
    if(!this.get("select")) return;

    this.get("select.options").removeObject(this);
  }.on("willDestroyElement"),

  selection: Ember.computed.alias("select.value"),

  selected: function(key, value){
    if(this.get("select")){
      value = this.get('selection') === this.get('value');
    }else if(value === undefined){
      value = false;
    }
    return value;
  }.property("select", "selection"),

  click: function(){
    var select = this.get("select")
    if(select){
      this.set("selection", this.get("value"));
      select.set("open", false);
    }else{
      this.sendAction("action");
    }
  }
});

