import Laser from "../laser.js";

const thatoneannoyingstarterattack = (main, currentTime) => {
    for (let attack = 0; attack < 45; attack++) {
        // Horiz double
        main.attacks.push(
            new Laser(
                0,
                Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
                main.width,
                25 /*You can also do 50 if you dont think its painfull*/,
                currentTime + 20,
                0.25 * 60,
                1.5 * 60
            )
        );
        main.attacks.push(
            new Laser(
                0,
                Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
                main.width,
                25 /*You can also do 50 if you dont think its painfull*/,
                currentTime + 20,
                0.25 * 60,
                1.5 * 60
            )
        );

        // Verti double
        main.attacks.push(
            new Laser(
                Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
                0,
                25 /*You can also do 50 if you dont think its painfull*/,
                main.height,
                currentTime + 20,
                0.25 * 60,
                1.5 * 60
            )
        );
        main.attacks.push(
            new Laser(
                Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
                0,
                25 /*You can also do 50 if you dont think its painfull*/,
                main.height,
                currentTime + 20,
                0.25 * 60,
                1.5 * 60
            )
        );
        currentTime += 20;
    }
    return currentTime;
}

export default thatoneannoyingstarterattack;