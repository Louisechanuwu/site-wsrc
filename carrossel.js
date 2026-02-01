window.onload = function() {
    const track = document.querySelector('.imagens-carrossel');
    const images = document.querySelectorAll('.imagem-carrossel');
    const nextBtn = document.querySelector('#botao-ir');
    const prevBtn = document.querySelector('#botao-voltar');
    const container = document.querySelector('.carrossel');
    
    let index = 0;
    let autoPlayInterval;

    function updateCarousel() {
        const width = images[0].clientWidth;
        track.style.transform = `translateX(${-index * width}px)`;
    }

    function moveToNext() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null; 
        }
    }

    function startAutoPlay() {
       
        stopAutoPlay();
        autoPlayInterval = setInterval(moveToNext, 3000);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoPlay(); 
        moveToNext();  
        startAutoPlay(); 
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
        startAutoPlay();
    });

    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    window.addEventListener('resize', updateCarousel);
    
    startAutoPlay(); 
};