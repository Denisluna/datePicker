let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let selectedMonth = document.getElementById('s-month');
let selectedYear = document.getElementById('s-year');

let dateSelectDom = document.getElementById('select');
let dayItems = document.querySelectorAll('#d-container .item');

const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();



document.addEventListener('DOMContentLoaded', function(){

  init();

  document.getElementById('date').addEventListener('click', function(){
    if(dateSelectDom.style.display == 'none' || !dateSelectDom.style.display) dateSelectDom.style.display = 'block';
    else dateSelectDom.style.display = 'none';
  });

});

function init(){
  updateDateLabels();
  showMonth();
}

function showMonth(){
  let dateCount = new Date(currentYear, (currentMonth - 1), 1);
  let monthDayStart = dateCount.getDay();

  dateCount.setDate(dateCount.getDate() - monthDayStart);

  for (var i = 0; i < dayItems.length; i++) {
    dayItems[i].innerText = dateCount.getDate();
    dayItems[i].addEventListener('click', changeDate);
    if(dateCount.getMonth() != (currentMonth - 1)){
      dayItems[i].classList += ' other';
    }
    if(dateCount.getDate() == currentDay && dateCount.getMonth() == (currentMonth - 1)) dayItems[i].classList += ' selected';
    dateCount.setDate(dateCount.getDate() + 1);
  }

}

function updateDateLabels(){
  day.innerText = currentDay < 10 ? '0' + currentDay : currentDay;
  month.innerText = currentMonth < 10 ? '0' + currentMonth : currentMonth;
  year.innerText = currentYear;

  selectedMonth.innerText = months[currentMonth - 1];
  selectedYear.innerText = currentYear;
}

function changeDate(e){
  alert(e.target);
}

function isLeapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
