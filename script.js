// Fallback function using native JavaScript
function updateTimeWithoutMoment() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    
    // Pad with leading zeros
    const timeStr = {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        ampm: ampm
    };
    
    // Update clock digits
    document.querySelector('.hours-tens span').textContent = timeStr.hours[0];
    document.querySelector('.hours-ones span').textContent = timeStr.hours[1];
    document.querySelector('.minutes-tens span').textContent = timeStr.minutes[0];
    document.querySelector('.minutes-ones span').textContent = timeStr.minutes[1];
    document.querySelector('.ampm').textContent = timeStr.ampm;
    
    // Update date
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    
    // Add ordinal suffix
    const ordinal = (d) => {
        if (d > 3 && d < 21) return 'TH';
        switch (d % 10) {
            case 1: return 'ST';
            case 2: return 'ND';
            case 3: return 'RD';
            default: return 'TH';
        }
    };
    
    const dateStr = `${day}, ${month} ${date}${ordinal(date)}, ${year}`;
    document.querySelector('.date-container').textContent = dateStr;
}

// Start updating immediately without waiting for moment.js
document.addEventListener('DOMContentLoaded', () => {
    updateTimeWithoutMoment();
    setInterval(updateTimeWithoutMoment, 1000);
});