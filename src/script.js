
$('#clock').countdown('2021/01/20', function(event) {
  $(this).html(event.strftime('%D:%H:%M:%S'));
});
