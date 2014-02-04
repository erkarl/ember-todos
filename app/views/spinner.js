var SpinnerView = Ember.View.extend({
    layoutName: 'views/spinner',
    didInsertElement: function(){
      var opts = {
        lines: 15, // The number of lines to draw
        length: 24, // The length of each line
        width: 12, // The line thickness
        radius: 31, // The radius of the inner circle
        corners: 0.8, // Corner roundness (0..1)
        rotate: 36, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#F4F7FA', // #rgb or #rrggbb or array of colors
        speed: 1.7, // Rounds per second
        trail: 25, // Afterglow percentage
        shadow: true, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 65, // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
      };
      var target = document.getElementById('spinnerContainer');
      var spinner = new Spinner(opts).spin(target);
    },
});

export default SpinnerView;
