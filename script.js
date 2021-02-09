let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let selectedMonth = document.getElementById('s-month');
let selectedYear = document.getElementById('s-year');

let calendarElement = document.getElementById('select');
let dayItems = document.querySelectorAll('#d-container .item');
let arrowControl = document.querySelectorAll('.arrow-control span');
let daysContainer = document.getElementById('d-container');


document.addEventListener('DOMContentLoaded', function(){

  init();

  document.getElementById('date').addEventListener('click', function(){
    if(calendarElement.style.display == 'none' || !calendarElement.style.display) calendarElement.style.display = 'block';
    else calendarElement.style.display = 'none';
    moveMonth(currentMonth);
  });

});

function init(){

  arrowControl.forEach((item, i) => {
    item.addEventListener('click', function(e){
      let arrow = e.currentTarget;

      if(arrow.classList.contains('up')) currentMonth -= 1;
      else currentMonth += 1;

      moveMonth(currentMonth)
    })
  });

  updateDateLabels();
  showFullYear();
}

function showFullYear(){
  let dateCount = new Date(currentYear, 0, 1);
  let monthDayStart = dateCount.getDay();

  dateCount.setDate(dateCount.getDate() - monthDayStart);

  do {
    let newDay = document.createElement('span');
    newDay.classList = `item ${months[dateCount.getMonth()]}`;
    newDay.innerText = dateCount.getDate();

    if(dateCount.getDate() == 1){
      newDay.setAttribute('data-month', dateCount.getMonth());
    }

    daysContainer.appendChild(newDay);

    dateCount.setDate(dateCount.getDate() + 1);
  } while (!(dateCount.getMonth() == 0 && dateCount.getDate() == (14 - monthDayStart) && dateCount.getFullYear() == (currentYear + 1)));
}

function updateDateLabels(){
  day.innerText = currentDay < 10 ? '0' + currentDay : currentDay;
  month.innerText = currentMonth < 10 ? '0' + parseInt(currentMonth + 1) : currentMonth;
  year.innerText = currentYear;

  selectedMonth.innerText = months[currentMonth];
  selectedYear.innerText = currentYear;
}

function moveMonth(position){
  let currentMonthStartDay = document.querySelector(`#d-container span[data-month="${position}"]`);
  let marginTop = daysContainer.offsetTop - currentMonthStartDay.offsetTop + 40;

  daysContainer.style.marginTop = `${marginTop}px`;
  updateDateLabels();
}

function changeDate(e){
  alert(e.target);
}

function isLeapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
