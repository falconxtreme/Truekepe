$(function () {
  var note = $("#note"),
    ts = new Date(2017, 0, 1),
    newYear = true;

  if (new Date() > ts) {
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = new Date(2020, 7, 1).getTime();
    newYear = false;
  }

  $("#countdown").countdown({
    timestamp: ts,
    callback: function (days, hours, minutes, seconds) {
      var message = "";

      message += days + " días" + (days == 1 ? "" : "s") + ", ";
      message += hours + " horas" + (hours == 1 ? "" : "s") + ", ";
      message += minutes + " minutos" + (minutes == 1 ? "" : "s") + " y ";
      message += seconds + " segundos" + (seconds == 1 ? "" : "s") + " <br />";

      if (newYear) {
        message += "left until the new year!";
      } else {
        message += "left to 10 days from now!";
      }

      note.html(message);
    },
  });
});
