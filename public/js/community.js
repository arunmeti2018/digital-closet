
const addClothesForm = document.getElementById('addClothesForm');
const clothesList = document.getElementById('clothesList');
let clothes = JSON.parse(localStorage.getItem('clothes')) || [];

function displayClothes() {
    clothesList.innerHTML = '';
    clothes.forEach((item, index) => {
        const clothesItem = document.createElement('div');
        clothesItem.classList.add('clothes-item');
        clothesItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p> ${item.type}</p>
            <p>Size: ${item.size}</p>
            <button onclick="removeClothes(${index})">Remove</button>
        `;
        clothesList.appendChild(clothesItem);
    });
}

function addClothes(e) {
    e.preventDefault();
    const newClothes = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        type: document.getElementById('type').value,
        size: document.getElementById('size').value,
        image: document.getElementById('image').value

    };
    clothes.push(newClothes);
    localStorage.setItem('clothes', JSON.stringify(clothes));
    displayClothes();
    addClothesForm.reset();
}

function removeClothes(index) {
    clothes.splice(index, 1);
    localStorage.setItem('clothes', JSON.stringify(clothes));
    displayClothes();
}

addClothesForm.addEventListener('submit', addClothes);
displayClothes();

// Chat functionality
const openChatBtn = document.getElementById('openChat');
const chatContainer = document.getElementById('chatContainer');
const closeChatBtn = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const userMessageInput = document.getElementById('userMessage');

openChatBtn.addEventListener('click', () => {
    chatContainer.style.display = 'flex';
    openChatBtn.style.display = 'none';
});

closeChatBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none';
    openChatBtn.style.display = 'block';
});

chatInput.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = userMessageInput.value.trim();
    if (userMessage) {
        addMessage('user', userMessage);
        userMessageInput.value = '';
        // Simulate AI response
        setTimeout(() => {
            const aiResponse = getAIResponse(userMessage);
            addMessage('ai', aiResponse);
        }, 1000);
    }
});

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);

    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userMessage) {
    // Simple AI response logic
    const lowercaseMessage = userMessage.toLowerCase();
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
        return "Hello! How can I help you with clothes sharing today?";
    } else if (lowercaseMessage.includes('borrow')) {
        return "To borrow clothes, browse the available items and contact the lender directly. Is there a specific type of clothing you're looking for?";
    } else if (lowercaseMessage.includes('lend')) {
        return "Great! To lend clothes, use the 'Add Clothes' form to list your items. Make sure to provide clear photos and descriptions.";
    } else if (lowercaseMessage.includes('donate')) {
        return "Donating clothes is a wonderful way to help others. Use the 'Add Clothes' form and select 'donate' as the type. Your generosity is appreciated!";
    } else {
        return "I'm here to help with clothes sharing. You can ask about borrowing, lending, or donating clothes. What would you like to know?";
    }
}
