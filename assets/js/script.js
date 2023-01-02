$(function () {
  // Get current date and display on header
  var currentDate = dayjs().format('dddd, MMM/D/YYYY');
  $("#currentDay").html(currentDate);

  // Save button event listener that stores input to local storage
  $('.saveBtn').on('click', function() {
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, input);

  });

  // Function that applies past, present, or future classes to time-blocks depending on the current time
  function timeApply() {
    var currentTime = dayjs().hour()
    $(".time-block").each(function() {

      // Store the numeric value of the time inputted
      var blockTime = $(this).attr("id").replace("hour-", "")

      // If statement for removing and adding classes depending on current time
      if (blockTime < currentTime) {
        $(this).removeClass("future present").addClass("past");
      } else if (blockTime == currentTime) {
        $(this).removeClass("future past").addClass("present");
      } else {
        $(this).removeClass("present past").addClass("future");
      }
    });
  };

  // For loop retrieving data from local storage and displaying it in each time-block
  for (i = 9; i < 18; i++) {
    $("#hour-" + i).children(".description").val(localStorage.getItem("hour-" + i));
  };

  timeApply();
});
