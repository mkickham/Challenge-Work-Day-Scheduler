// this makes sure that the page only loads when it's ready and also makes the save buton function
$(document).ready(function(){
  $('.saveBtn').on("click", function(){
    var value = $(this).siblings('.description').val()
    var id = $(this).parent().attr('id') 


    localStorage.setItem(id, value)
  });

// this takes time-block ID and gives it local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'))
});
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// this creates a function which is giving me the current time using dayjs
function currentTime(){
  const currentTime = dayjs();
  const formattedTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
  $('#currentDay').text(formattedTime);
  }
  // this is an if/else statement that is checkign the hour/current hour and giving the time-blocks color based on past/present/future classes
  $( ".time-block" ).each(function(i) {
    var hour = $(this).attr("id").split("hour-")[1];
    var currentHour = dayjs().hour();
    console.log(hour, currentHour)
    if (currentHour == hour) {
    $(this).addClass("present")
    } else if (hour < currentHour) {
    $( this ).addClass( "past" )
    } else if (hour > currentHour) {
    $(this).addClass("future") 
    }
  });

  currentTime();

  setInterval(currentTime, 1000);

const localeSettings = {};
dayjs.locale(localeSettings);
