// calendar.js

const calendarContainer = document.getElementById('calendar');
const currentYearSpan = document.getElementById('current-year');
let currentYear = new Date().getFullYear();

function createCalendar(year) {
    calendarContainer.innerHTML = ''; // Clear existing calendar
    currentYearSpan.textContent = year;
    
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    
    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        
        const monthTitle = document.createElement('h3');
        monthTitle.textContent = monthNames[month];
        monthDiv.appendChild(monthTitle);
        
        const daysDiv = document.createElement('div');
        daysDiv.className = 'days';
        
        // Days of the week
        const daysOfWeek = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        for (let dayOfWeek of daysOfWeek) {
            const daySpan = document.createElement('span');
            daySpan.textContent = dayOfWeek;
            daysDiv.appendChild(daySpan);
        }
        
        // Days of the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        
        // Add blank days for the first week
        for (let i = 0; i < firstDay; i++) {
            const blankDay = document.createElement('span');
            daysDiv.appendChild(blankDay);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const daySpan = document.createElement('span');
            daySpan.textContent = day;
            daySpan.className = 'day';
            if ((firstDay + day - 1) % 7 === 0 || (firstDay + day - 1) % 7 === 6) {
                daySpan.classList.add('weekend'); // Highlight weekends
            }
            daysDiv.appendChild(daySpan);
        }
        
        monthDiv.appendChild(daysDiv);
        calendarContainer.appendChild(monthDiv);
    }
}

document.getElementById('prev-year').addEventListener('click', () => {
    currentYear--;
    createCalendar(currentYear);
});

document.getElementById('next-year').addEventListener('click', () => {
    currentYear++;
    createCalendar(currentYear);
});

createCalendar(currentYear); // Initial call to create calendar


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slideshow-container img');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Show the first slide
    showSlide(currentIndex);

    // Change slide every 3 seconds (3000 milliseconds)
    setInterval(nextSlide, 3000);
});