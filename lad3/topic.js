var calendarThemeSelector = document.getElementById("dark-and-light");
calendarThemeSelector.onchange = function () {
  var themeSelectorValue = calendarThemeSelector.value;
  var elementsArray = document.getElementsByClassName('calendar-item');
  if (themeSelectorValue == "Dark") {
    for (var i = 0; i < elementsArray.length; i++) {
      elementsArray[i].classList.add('calendar-dark');
      document.getElementsByClassName('calendar-month')[0].classList.add('calendar-dark');
      document.getElementsByClassName('calendar-block')[0].classList.add('calendar-dark');
      document.getElementsByClassName('calendar-head')[0].classList.add('calendar-dark');
    }
  } else {
    for (var i = 0; i < elementsArray.length; i++) {
      elementsArray[i].classList.remove('calendar-dark');
      document.getElementsByClassName('calendar-month')[0].classList.remove('calendar-dark');
      document.getElementsByClassName('calendar-block')[0].classList.remove('calendar-dark');
      document.getElementsByClassName('calendar-head')[0].classList.remove('calendar-dark');
    }
  }
}
function show() {
  var showData = prompt('Watch is that holiday', ' ');
  var today = document.getElementById('one');
  today.setAttribute('title', showData);
  alert(showData);
};