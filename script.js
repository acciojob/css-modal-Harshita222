
// Get elements
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeModalButton = modal.querySelector('.close-modal');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
