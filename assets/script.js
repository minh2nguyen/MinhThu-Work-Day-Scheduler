// Display c 
// var today = dayjs();
// dayjs.extend(window.dayjs_plugin_advancedFormat);
// dayjs.extend(window.dayjs_plugin_weekOfYear);

// $("#currentDay").text(today.format("MMM Do, YYYY"));

// const today = document.querySelector("#currentDay");
// console.log(today)
// $("#currentDay") = dayjs(today.format("MMM Do, YYYY"));


// $("#currentDay").text(moment().format("🗓" + 'dddd MMMM Do, YYYY'+ "🗓"));

// Dayjs was used instead of moment, per instructors request 

const today = dayjs();
console.log(today.format("MMM D, YYYY"));
$("#currentDay").text(today.format("🗓" + "dddd, MMMM D, YYYY" + "🗓"));

