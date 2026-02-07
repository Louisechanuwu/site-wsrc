
const albuns = {
    'prediocasqueiro': [
        'fotosgaleria/Predio_JdCasqueiro/0.webp',
        'fotosgaleria/Predio_JdCasqueiro/1.webp',
        'fotosgaleria/Predio_JdCasqueiro/2.webp',
        'fotosgaleria/Predio_JdCasqueiro/3.webp',
        'fotosgaleria/Predio_JdCasqueiro/4.webp',
        
    ],
    'vilanova': [
        'fotosgaleria/VilaNova/0.webp',
        'fotosgaleria/VilaNova/1.webp'
    ],
    'embaresantos': [
        'fotosgaleria/imagens_igreja/0.jpg',
        'fotosgaleria/imagens_igreja/1.jpg',
        'fotosgaleria/imagens_igreja/2.jpg',
        'fotosgaleria/imagens_igreja/3.jpg'
    ],
    'josemenino':[
        'fotosgaleria/foto3.jpeg'
    ]
};

let fotosAtuais = [];
let indexAtual = 0;

const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');

function abrirAlbum(nomeDoAlbum) {
    fotosAtuais = albuns[nomeDoAlbum];
    indexAtual = 0; 
    
    if (fotosAtuais) {
        modal.style.display = "flex";
        modalImg.src = fotosAtuais[indexAtual];
        document.body.style.overflow = "hidden"; 
    }
}

function changeSlide(direcao) {
    indexAtual += direcao;

    // Loop infinito dentro do álbum
    if (indexAtual >= fotosAtuais.length) indexAtual = 0;
    if (indexAtual < 0) indexAtual = fotosAtuais.length - 1;

    modalImg.src = fotosAtuais[indexAtual];
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

// Fechar ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
}