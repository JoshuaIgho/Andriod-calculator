$(document).ready(function () {
    let current = '';

    $('.num, .op').click(function () {
      current += $(this).text();
      $('#display').val(current);
    });

    $('#equals').click(function () {
      try {
        const result = math.evaluate(current);
        current = result.toString();
        $('#display').val(current);
      } catch (err) {
        $('#display').val('Error');
        current = '';
      }
    });

    $('#clear').click(function () {
      current = '';
      $('#display').val('');
    });
});
