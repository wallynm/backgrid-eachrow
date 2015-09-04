define(['Backgrid', 'ControlClick'], function (){ // @todo Com a implementaÃ§Ã£o do ControlClick 2.0 esta dependÃªncia poderÃ¡ deixar de existir
  eachRow = function(){

    var each = Backgrid.Row.extend({
      timeoutDblClick : undefined,
      events: {
        "change input[type=checkbox]": "rowClicked",
        "click" : "rowClicked"
      },

      rowClicked: function (e)
      {
        console.log("ROW CLICKED")
        var self = this;
        var row     = $(e.currentTarget);
        var checked = row.hasClass("selected") ? false : true ;

        if(typeof App.systemActionBar != "undefined"){
          if(checked) {  App.systemActionBar.addItem(self.model.attributes); }
          else { App.systemActionBar.removeItem(self.model.attributes); }
        }

        row.toggleClass("selected", checked);
        self.model.trigger("backgrid:selected", self.model, checked);
        row.find("input[type=checkbox]").prop('checked',checked);
      },

      /*toggleCheck: function (e)
      {
        console.log("TOGGLE CHECKBOX")
        var row     = $(e.currentTarget);
        var checkbox = row.find("input[type=checkbox]");
        var checked = checkbox.is(':checked') ? false : true;
        checkbox.prop('checked',checked).trigger("change");
      }*/
    });
    return each;
  }
})