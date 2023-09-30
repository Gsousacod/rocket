function stars(){
    let count = 50;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i<count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);
        let duration = Math.random()*1;
        let h = Math.random()*100;

        star.style.left = x+'px';
        star.style.width = 1+'px';
        star.style.height = h+'px';
        star.style.animationDuration = duration+'s';

        scene.appendChild(star);
        i++;
    }
}
stars();
console.log('funcionando')

// Variáveis do jogo
let rocketPosition = 0;
let rocketSpeed = 0;
let isMovingLeft = false;
let isMovingRight = false;

// Elementos HTML
const rocket = document.querySelector('.rocket');

// Função para mover o foguete
function moveRocket() {
    if (isMovingLeft) {
        rocketSpeed -= 0.5; // Aceleração negativa quando movendo para a esquerda
    } else if (isMovingRight) {
        rocketSpeed += 0.5; // Aceleração positiva quando movendo para a direita
    } else {
        // Desaceleração quando não há entrada do jogador
        if (rocketSpeed > 0) {
            rocketSpeed -= 0.1;
        } else if (rocketSpeed < 0) {
            rocketSpeed += 0.1;
        }
    }

    // Limitar a velocidade máxima e mínima
    rocketSpeed = Math.min(10, Math.max(-10, rocketSpeed));

    // Atualizar a posição do foguete com base na velocidade
    rocketPosition += rocketSpeed;
    rocket.style.left = rocketPosition + 'px';
    

    // Chamar a função novamente para criar um loop de animação
    requestAnimationFrame(moveRocket);
}


// Ouvinte de eventos para teclas de seta
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        isMovingLeft = true;
        // Mover foguete para a esquerda
    } else if (event.key === 'ArrowRight') {
        isMovingRight = true;
        // Mover foguete para a direita
    } else if (event.key === ' ') { // Tecla de espaço pressionada
        // Atirar projétil
        projectile.style.left = (rocketPosition + 20) + 'px'; // Posição inicial do projétil
        projectile.style.bottom = '50px'; // Altura inicial do projétil
        projectile.style.display = 'block'; // Torna o projétil visível
        moveProjectile(); // Chama a função para movimentar o projétil
    }
});
document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowLeft') {
        isMovingLeft = false;
    } else if (event.key === 'ArrowRight') {
        isMovingRight = false;
    }
});

// Iniciar o movimento do foguete
moveRocket();

//Projetio

const projectile = document.querySelector('.projectile');



function moveProjectile() {
    
    let scene = document.querySelector('.scene');
    let projetio = document.createElement('.projectile');
    scene.appendChild(projetio);
    projetio.style.animation = 
    projetio.style.animationDuration = 2+'s';
}


