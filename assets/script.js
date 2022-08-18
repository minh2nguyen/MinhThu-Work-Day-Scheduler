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

// Dayjs was used here per instructors request
const today = dayjs();
// console.log(today.format("MMM D, YYYY"));
$("#currentDay").text(today.format("🗓" + "dddd, MMMM D, YYYY" + "🗓"));
$("#currentTime").text(today.format("h:mm A"));



function timeColor(){
    var hour = moment().hours();

    $(".timeblocks").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        console.log(this);
    

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

timeColor();