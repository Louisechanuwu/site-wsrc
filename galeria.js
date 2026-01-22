
// Pegamos todas as imagens da galeria para saber o caminho (src) delas
const images = document.querySelectorAll('.gallery-grid img');
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');  
let currentIndex = 0;


function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex"; // Mostra o popup
  modalImg.src = images[currentIndex].src; // Define a imagem atual
}

function closeModal() {
  modal.style.display = "none"; // Esconde o popup
}

function changeSlide(direction) {
  currentIndex += direction;

  // Lógica infinita: se passar da última, volta pra primeira
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  // Se for antes da primeira, vai pra última
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  modalImg.src = images[currentIndex].src;
}

// Fechar se clicar fora da imagem
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});



