
const wardrobeData = [
    { name: "Blue Jeans", uses: 20 },
    { name: "White T-shirt", uses: 15 },
    { name: "Black Dress", uses: 5 },
    { name: "Red Sweater", uses: 8 },
    { name: "Green Jacket", uses: 3 },
    { name: "Gray Pants", uses: 12 },
    { name: "Yellow Skirt", uses: 2 },
    { name: "Purple Blouse", uses: 6 },
    { name: "Brown Shoes", uses: 18 },
    { name: "Orange Scarf", uses: 1 },
];

document.getElementById('totalItems').textContent = wardrobeData.length;
document.getElementById('avgUsage').textContent = (wardrobeData.reduce((sum, item) => sum + item.uses, 0) / wardrobeData.length).toFixed(1);
document.getElementById('unusedItems').textContent = wardrobeData.filter(item => item.uses === 0).length;


const ctx = document.getElementById('usageChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: wardrobeData.map(item => item.name),
        datasets: [{
            label: 'Number of Uses',
            data: wardrobeData.map(item => item.uses),
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Populate most worn and least worn lists
const sortedData = [...wardrobeData].sort((a, b) => b.uses - a.uses);
const mostWornList = document.getElementById('mostWornList');
const leastWornList = document.getElementById('leastWornList');

sortedData.slice(0, 5).forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.name}</span> <span>${item.uses} uses</span>`;
    mostWornList.appendChild(li);
});

sortedData.slice(-5).reverse().forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.name}</span> <span>${item.uses} uses</span>`;
    leastWornList.appendChild(li);
});

// Generate suggestion
function generateSuggestion() {
    const suggestions = [
        "Try pairing your least worn item with your most worn item for a fresh look.",
        "Consider donating items you haven't worn in the past year.",
        "Experiment with layering to create new outfits from existing pieces.",
        "Host a clothing swap party with friends to refresh your wardrobe.",
        "Challenge yourself to wear your least worn item this week.",
        "Create a capsule wardrobe with your most versatile pieces.",
        "Upcycle or repurpose rarely worn items into something new.",
        "Set a goal to wear each item at least once in the next month.",
        "Mix and match patterns and textures for unique combinations.",
        "Accessorize differently to give new life to less-worn clothes."
    ];
    const suggestionElement = document.getElementById('suggestion');
    suggestionElement.textContent = suggestions[Math.floor(Math.random() * suggestions.length)];
}

// Data for Lended, Borrowed, and Donated items
const lbdData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Lended',
            data: [5, 10, 3, 7, 2, 8, 12, 4, 6, 9, 10, 5],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
        },
        {
            label: 'Borrowed',
            data: [3, 6, 2, 9, 4, 5, 6, 2, 7, 5, 8, 4],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
        },
        {
            label: 'Donated',
            data: [2, 4, 5, 6, 3, 7, 8, 5, 6, 4, 7, 6],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }
    ]
};

// Create Lended, Borrowed, and Donated chart
const lbdCtx = document.getElementById('lbdChart').getContext('2d');
new Chart(lbdCtx, {
    type: 'line',
    data: lbdData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update Lended, Borrowed, and Donated stats
document.getElementById('lendedItems').textContent = lbdData.datasets[0].data.reduce((sum, val) => sum + val, 0);
document.getElementById('borrowedItems').textContent = lbdData.datasets[1].data.reduce((sum, val) => sum + val, 0);
document.getElementById('donatedItems').textContent = lbdData.datasets[2].data.reduce((sum, val) => sum + val, 0);
