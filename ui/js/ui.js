$(document).ready(function() {

  $( "body>[data-role='panel']" ).panel().enhanceWithin();

  $('#loginLogIn').bind('click', function(event) {
    $.mobile.pageContainer.pagecontainer("change", "#dashboard");
  });

});

$(document).on('pagecontainershow', function(e, ui) {
    var pageId = $('body').pagecontainer('getActivePage').prop('id');
    if ('dashboard' === pageId) {
      chartUsageLastWeek();
      chartUsageLastYear();
    }
});

function chartUsageLastWeek() {
  $.jqplot.config.enablePlugins = true;
  var s1 = [2, 6, 7, 10, 3, 5, 8];
  var ticks = ['7 Aug', '8 Aug', '9 Aug', '11 Aug', '12 Aug', '13 Aug', '14 Aug'];

  plot1 = $.jqplot('dashboardChartUsageLastWeek', [s1], {
      // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
      animate: !$.jqplot.use_excanvas,
      seriesDefaults:{
          renderer:$.jqplot.BarRenderer,
          pointLabels: { show: true }
      },
      axes: {
          xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              ticks: ticks
          }
      },
      highlighter: { show: false }
  });

}

function chartUsageLastYear() {
  $.jqplot.config.enablePlugins = true;
  var s1 = [200, 250, 300, 360, 350, 425, 375, 300, 150, 250, 260, 150];
  var ticks = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb',
              'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  plot1 = $.jqplot('dashboardChartUsageLastYear', [s1], {
      // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
      animate: !$.jqplot.use_excanvas,
      seriesDefaults:{
          renderer:$.jqplot.BarRenderer,
          pointLabels: { show: true }
      },
      axes: {
          xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              ticks: ticks
          }
      },
      highlighter: { show: false }
  });
}
