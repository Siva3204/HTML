const imageInput = document.getElementById('image-input');
const previewImage = document.getElementById('preview-image');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dateInput = document.getElementById('date');
const authorInput = document.getElementById('author');
const overlayTitle = document.getElementById('overlay-title');
const overlayDescription = document.getElementById('overlay-description');
const overlayDate = document.getElementById('overlay-date');
const overlayAuthor = document.getElementById('overlay-author');

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

titleInput.addEventListener('input', () => {
    overlayTitle.textContent = titleInput.value;
});

descriptionInput.addEventListener('input', () => {
    overlayDescription.textContent = descriptionInput.value;
});

dateInput.addEventListener('input', () => {
    overlayDate.textContent = dateInput.value;
});

authorInput.addEventListener('input', () => {
    overlayAuthor.textContent = authorInput.value;
});
