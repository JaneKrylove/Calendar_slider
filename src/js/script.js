//=include header.js
//=include footer.js

// const userName = "Ivan";
// console.log(`это новый общий консоль ${userName}`);

// $(document).ready(function(){
//   $(".card-slider").slick();
// });

// $(document).ready(function () {
//   $(".card-slider").slick({
//     prevArrow: ".btn--slider-prev",
//     nextArrow: ".btn--slider-next",
//   });
// });

// $(".card-slider").on("afterChange", function (event, slick, current_slide_index, next_slide_index) {
//   event.target.classList.add("animate__animated");
//   event.target.classList.add("animate__bounce");
// });

/* $('.calendar__body').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.calendar__months'
}); */

/* $(".calendar__months").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // asNavFor: ".calendar__body",
  centerMode: true,
  focusOnSelect: true,
  // prevArrow: ".btn--prev",
  // nextArrow: ".btn--next",
}); */

/* $(document).ready(function(){
  $(".calendar__months").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  
});
 */

// Установление текущей даты

// let date = new Date();
// const monthDays = document.querySelector('days');

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// document.querySelector(".date h3").innerHTML = months[date.getMonth];

// document.querySelector(".date p").innerHTML = date.toDateString();

// // let currentYear = date.getFullYear();
// // let currentMonth = date.getMonth();

// // console.log(date, currentYear, currentMonth);

// /* const renderCalendar = () => {
//   currentDate.innerText = `${currentMonth} ${currentYear}`;

// } */
// let days = "";
// for(let i = 1; i <= 31; i++) {
//   days += `<i>${i}</i>`;
//   monthDays.innerHTML = days;

// }


// renderCalendar();
