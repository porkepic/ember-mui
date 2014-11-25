import Ember from "ember";
import ClickAwayable from "../mixins/click-awayable";
import Paper from "./mui-paper";
import KeyLine from "../utils/key-line";
import CssEvents from "../utils/css-events";

export default Paper.extend(ClickAwayable, {
  classNameBindings: [":mui-menu",
                      "hideable:mui-menu-hideable",
                      "visible:mui-visible"],
  type: "paper",                      
  hideable: false,
  visible: true,
  depth: 1,

  didInsertElement: function(){
    this._super();
    // set menu width
    var $el = this.$(),
        el = $el[0],
        menuWidth = KeyLine.getIncrementalDim(el.offsetWidth);

    $el.css({
      transition: "none",
      width: menuWidth + "px"
    });

    // This would force the redraw
    Em.run.schedule("afterRender", this, function(){
      //put the transition back
      $el.css({
        transition: ""
      });
      
      //Save the initial menu height for later
      this._initialMenuHeight = el.offsetHeight + KeyLine.Desktop.GUTTER_LESS;
      
      //Show or Hide the menu according to visibility
      this._renderVisibility();
    });
  },

  clickAway: function(){
    if(this.get("parentView").constructor.toString().indexOf("mui-dropdown-menu")){
      return;
    }
    this.set("visible", false);
  },

  onVisibilityChange: function(){
    this._renderVisibility();
  }.observes("visible"),

  _renderVisibility: function() {
    var $el = this.$();
    if(this.get("hideable")){
      var innerContainer = $el.find(".mui-paper-container");

      if(this.get("visible")){

        //Open the menu
        $el.css("height", this._initialMenuHeight + 'px');

        //Set the overflow to visible after the animation is done so
        //that other nested menus can be shown
        CssEvents.onTransitionEnd($el, function() {
          //Make sure the menu is open before setting the overflow.
          //This is to accout for fast clicks
          if(this.get("visible")){
            innerContainer.css("overflow", 'visible');
          }
        }.bind(this));

      } else {
        //Close the menu
        $el.css("height", "0px");

        //Set the overflow to hidden so that animation works properly
        innerContainer.css("overflow", 'hidden');
      }
    }
  },
});