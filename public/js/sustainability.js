
document.getElementById('pickupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);

    // Reset form
    this.reset();
});
