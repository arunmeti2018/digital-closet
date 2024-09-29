function openEditModal(id) {
    const outfit = outfits.find(o => o.id === id);
    document.getElementById('editOutfitId').value = outfit.id;
    document.getElementById('editOutfitName').value = outfit.name;
    document.getElementById('editOutfitDescription').value = outfit.description;
    document.getElementById('editOutfitCategory').value = outfit.category;
    document.getElementById('editOutfitTimesWorn').value = outfit.timesWorn;
    document.getElementById('editOutfitImage').value = outfit.image;
    document.getElementById('editModal').style.display = 'block';
}

document.querySelector('.close').onclick = function () {
    document.getElementById('editModal').style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === document.getElementById('editModal')) {
        document.getElementById('editModal').style.display = 'none';
    }
}

document.getElementById('editForm').onsubmit = function (e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('editOutfitId').value);
    const name = document.getElementById('editOutfitName').value;
    const description = document.getElementById('editOutfitDescription').value;
    const category = document.getElementById('editOutfitCategory').value;
    const timesWorn = parseInt(document.getElementById('editOutfitTimesWorn').value);
    const image = document.getElementById('editOutfitImage').value;

    // Update the outfit in the array
    const outfitIndex = outfits.findIndex(o => o.id === id);
    if (outfitIndex !== -1) {
        outfits[outfitIndex] = { ...outfits[outfitIndex], name, description, category, timesWorn, image };

        // Update the DOM
        const outfitCard = document.querySelector(`.outfit-card[data-id="${id}"]`);
        outfitCard.querySelector('.outfit-name').textContent = name;
        outfitCard.querySelector('.outfit-description').textContent = description;
        outfitCard.querySelector('.outfit-meta').innerHTML = `
            <p>Category: ${category}</p>
            <p>Times Worn: <span class="times-worn">${timesWorn}</span></p>
        `;
        outfitCard.querySelector('.outfit-image').src = image;
    }

    document.getElementById('editModal').style.display = 'none';
}

function deleteOutfit(id) {
    if (confirm('Are you sure you want to delete this outfit?')) {
        // Remove the outfit from the array
        outfits = outfits.filter(o => o.id !== id);

        // Remove the outfit card from the DOM
        const outfitCard = document.querySelector(`.outfit-card[data-id="${id}"]`);
        outfitCard.remove();
    }
}

function toggleFavorite(id) {
    const outfitIndex = outfits.findIndex(o => o.id === id);
    if (outfitIndex !== -1) {
        outfits[outfitIndex].isFavorite = !outfits[outfitIndex].isFavorite;

        // Update the DOM
        const favoriteBtn = document.querySelector(`.outfit-card[data-id="${id}"] .favorite-btn`);
        favoriteBtn.classList.toggle('active');
        favoriteBtn.setAttribute('aria-label', outfits[outfitIndex].isFavorite ? 'Remove from favorites' : 'Add to favorites');
    }
}

function logWorn(id) {
    const outfitIndex = outfits.findIndex(o => o.id === id);
    if (outfitIndex !== -1) {
        outfits[outfitIndex].timesWorn++;

        // Update the DOM
        const timesWornElement = document.querySelector(`.outfit-card[data-id="${id}"] .times-worn`);
        timesWornElement.textContent = outfits[outfitIndex].timesWorn;
    }
}
