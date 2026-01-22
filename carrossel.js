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
        console.log(autoPlayInterval)
    }
    
    function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null; 
    }

    function startAutoPlay() {
        if(autoPlayInterval){
            autoPlayInterval = clearInterval(); 
            
        }   
        autoPlayInterval = setInterval(moveToNext, 3000);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        startAutoPlay();
        console.log("pra frente , intervalo ", autoPlayInterval)
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay(); 
        index = (index - 1 + images.length) % images.length;
        console.log(index);
        updateCarousel();
        startAutoPlay();
        console.log("pra tras , intervalo ", autoPlayInterval)
    });

    container.addEventListener('mouseenter', () => stopAutoPlay());
    container.addEventListener('mouseleave', startAutoPlay());

    window.addEventListener('resize', updateCarousel);
    
    startAutoPlay(); // Inicia o carrossel
};

