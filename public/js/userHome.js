// Sample data


// Update DOM with user data
document.addEventListener('DOMContentLoaded', () => {
    const user = window.user;
    document.getElementById('username').textContent = user.UserName;
    document.getElementById('itemCount').textContent = user.items.length;
    document.getElementById('userAvatar').textContent = user.imageUrl;
});
console.log(user, items, totalItems);

// Sidebar navigation
document.querySelectorAll('.sidebar-nav button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Navigating to ${button.textContent.trim()}`);
    });
});

// Header buttons
document.querySelector('.btn-outline:not(#logoutBtn)').addEventListener('click', () => {
    alert('Opening item search...');
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Opening add item form...');
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