define(['Backgrid', 'ControlClick'], function() {
  eachRow = function() {
    var each = Backgrid.Row.extend({
      timeoutDblClick: undefined,
      events: {
        'change input[type=checkbox]': 'rowClicked',
        'click': 'rowClicked'
      },

      rowClicked: function(e) {
        var self = this;
        var row     = $(e.currentTarget);
        var checked = row.hasClass('selected') ? false : true ;

        if (typeof App.systemActionBar !== 'undefined') {
          if (checked) {  App.systemActionBar.addItem(self.model.attributes); } else { App.systemActionBar.removeItem(self.model.attributes); }
        }

        row.toggleClass('selected', checked);
        self.model.trigger('backgrid:selected', self.model, checked);
        row.find('input[type=checkbox]').prop('checked',checked);

        // Implementa os principais meios para ativar o checkbox
        e.preventDefault();
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
  };
});
