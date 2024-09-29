
// Update DOM with user data
document.addEventListener('DOMContentLoaded', () => {
    const user = window.user;

    console.log(user.imageUrl)
});



// Header buttons
document.querySelector('.btn-outline:not(#logoutBtn)').addEventListener('click', () => {
    alert('Opening item search...');
});



// Card buttons
document.querySelectorAll('.card .btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Action: ${button.textContent}`);
    });
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Logout functionality
document.getElementById('logoutButton').onclick = function () {
    // Redirect to the logout route
    window.location.href = '/user/logout';

};

document.getElementById('outfitsBtn').onclick = function () {

    window.location.href = '/user/tryOn';
};
document.getElementById('activityBtn').onclick = function () {

    window.location.href = '/user/community';
};
document.getElementById('sustainabilityBtn').onclick = function () {

    window.location.href = '/user/sustainability';
};
document.getElementById('analyticsBtn').onclick = function () {

    window.location.href = '/user/analytics';
};
document.getElementById('add-item').onclick = function () {

    window.location.href = '/items/create';
};
document.getElementById('closetBtn').onclick = function () {

    window.location.href = '/items/myCloset';
};


function updateWeather() {
    const temperatures = [18, 20, 22, 25, 28];
    const descriptions = ['Sunny', 'Partly Cloudy', 'Overcast', 'Light Rain', 'Clear'];
    const icons = ['ri-sun-fill', 'ri-sun-cloudy-fill', 'ri-cloudy-fill', 'ri-drizzle-fill', 'ri-moon-clear-fill'];

    const randomIndex = Math.floor(Math.random() * temperatures.length);

    document.getElementById('temperature').textContent = temperatures[randomIndex] + '°C';
    document.getElementById('weather-description').textContent = descriptions[randomIndex];
    document.querySelector('.weather-icon').className = `${icons[randomIndex]} weather - icon`;
}


// Update weather every 5 minutes
updateWeather();
setInterval(updateWeather, 300000);