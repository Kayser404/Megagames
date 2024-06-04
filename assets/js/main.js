document.addEventListener("DOMContentLoaded", () => {
    const games = {
        minecraft: {
            title: "Minecraft Edición Java",
            specs: [
                "Género: Sandbox, Survival",
                "Plataforma: PC",
                "Desarrollador: Mojang"
            ]
        },
        "red-dead": {
            title: "Red Dead Redemption 2",
            specs: [
                "Género: Acción/Aventura",
                "Plataforma: PC, PS4, PS5, Xbox One, Xbox Series X/S",
                "Desarrollador: Rockstar Games"
            ]
        },
        cod: {
            title: "Call of Duty Black Ops 2",
            specs: [
                "Género: Shooter",
                "Plataforma: PC, PS3, Xbox 360",
                "Desarrollador: Treyarch"
            ]
        },
        batlego: {
            title: "Batman Lego",
            specs: [
                "Género: Acción, Aventura",
                "Plataforma: PC, PS4, Xbox One, Nintendo Switch",
                "Desarrollador: Traveller's Tales"
            ]
        },
        eldenring: {
            title: "Elden Ring",
            specs: [
                "Género: RPG, Acción",
                "Plataforma: PC, PS4, PS5, Xbox One, Xbox Series X/S",
                "Desarrollador: FromSoftware"
            ]
        },
        nfs: {
            title: "Need For Speed",
            specs: [
                "Género: Carreras",
                "Plataforma: PC, PS4, Xbox One",
                "Desarrollador: Ghost Games"
            ]
        },
        gta5: {
            title: "GTA V",
            specs: [
                "Género: Acción/Aventura",
                "Plataforma: PC, PS4, PS5, Xbox One, Xbox Series X/S",
                "Desarrollador: Rockstar Games"
            ]
        },
        spiderman: {
            title: "Spiderman Miles Morales",
            specs: [
                "Género: Acción/Aventura",
                "Plataforma: PS4, PS5",
                "Desarrollador: Insomniac Games"
            ]
        },
        ark: {
            title: "ARK Survival Evolved",
            specs: [
                "Género: Supervivencia",
                "Plataforma: PC, PS4, Xbox One",
                "Desarrollador: Studio Wildcard"
            ]
        },
        phas: {
            title: "Phasmofobia",
            specs: [
                "Género: Terror, Supervivencia",
                "Plataforma: PC",
                "Desarrollador: Kinetic Games"
            ]
        },
        residentEvil2: {
            title: "Resident Evil 2",
            specs: [
                "Género: Survival Horror",
                "Plataforma: PC, PS4, Xbox One",
                "Desarrollador: Capcom"
            ]
        },
        residentEvil4: {  // Corregido
            title: "Resident Evil 4",
            specs: [
                "Género: Survival Horror",
                "Plataforma: PC, PS4, Xbox One",
                "Desarrollador: Capcom"
            ]
        }
    };

    document.querySelectorAll(".btn-specs").forEach(button => {
        button.addEventListener("click", event => {
            const gameKey = event.target.getAttribute("data-game");
            const game = games[gameKey];

            if (game) {
                document.getElementById("gameTitle").textContent = game.title;
                const specsList = document.getElementById("gameSpecs");
                specsList.innerHTML = "";
                game.specs.forEach(spec => {
                    const li = document.createElement("li");
                    li.textContent = spec;
                    specsList.appendChild(li);
                });
                const modal = new bootstrap.Modal(document.getElementById("gameSpecsModal"));
                modal.show();
            }
        });
    });
});
