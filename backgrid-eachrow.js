define(['Backgrid', 'ControlClick'], function (){ // @todo Com a implementação do ControlClick 2.0 esta dependência poderá deixar de existir
  eachRow = function(){

    var each = Backgrid.Row.extend({
      timeoutDblClick : undefined,
      events: {
        click: "rowClicked",
        //dblclick: "alert",
      },
      rowClicked: function (e)
      {
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
    });
    return each;
  }
});
