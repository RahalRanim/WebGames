document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('.container');
    let btn = document.querySelector('.start_btn');
    let scoreContainer = document.querySelector('.score');
    let timeContainer = document.querySelector('.time');

    btn.addEventListener('click', function () {
        let score = 0;
        let time = 10;
        container.innerHTML = "";

        let interval = setInterval(function showTarget() {
            // Création de la cible
            let target = document.createElement('img');
            target.id = "target";
            target.src = "silly.png";
            container.appendChild(target);
            target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
            target.style.left = Math.random() * (500 - target.offsetWidth) + 'px';

            // Faire disparaître la cible
            setTimeout(function () {
                target.remove();
            }, 2000);

            // Quand on clique sur la cible
            target.onclick = function () {
                score += 1;
                target.remove();
                scoreContainer.innerHTML = `Score : ${score}`;
            };
            time -= 1;

            // Afficher les infos
            scoreContainer.innerHTML = `Score : ${score}`;
            timeContainer.innerHTML = `Time : ${time}`;

            // Fin du jeu quand le temps est écoulé
            if (time === 0) {
                clearInterval(interval);
                container.innerHTML = "The game is finished";
            }
        }, 1000);
    });
});
