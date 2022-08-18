// *Criteria* 
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Dayjs is used here per instructors request
// This will display the current date and time in the jumbotron at the top of the page
const today = dayjs();
$("#currentDay").text(today.format("🗓  " + "dddd, MMMM D, YYYY" + "  🗓"));
$("#currentTime").text(today.format("⏰  " + "h:mm A" + "  ⏰" ));


// Moment is used here to color the timeblocks that will indicate the past, present, and future 
function timeColor() {
    var hour = moment().hour();

    $(".timeblocks").each(function () {
        var currentHour = parseInt($(this).attr("id"));
        // console.log(this);


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
//Call the timeColor function 
timeColor();

// Function for clicking the save button
$(".saveBtn").on("click", function() {
    // console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // This will save the description of your schedule into a local storage
    localStorage.setItem(time,text);
})
// This will load the saved data from localstorage for each hour in the scheduler 
// It goes from 9 for 9AM to 17 for 5PM to follow the 12 hour conversion
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#12 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


