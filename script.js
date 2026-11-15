
const button = document.getElementById("startButton");

button.addEventListener("click", async function () {

    const status = document.getElementById("status");
    const results = document.getElementById("results");

    status.textContent = "Consultando información...";

    try {

        const response = await fetch(
            "https://ipwho.is/"
        );

        const data = await response.json();

        if (!data.success) {
            throw new Error("No se pudo consultar la IP");
        }

        document.getElementById("ip").textContent =
            data.ip || "No disponible";

        document.getElementById("city").textContent =
            data.city || "No disponible";

        document.getElementById("region").textContent =
            data.region || "No disponible";

        document.getElementById("country").textContent =
            data.country || "No disponible";

        document.getElementById("isp").textContent =
            data.connection?.isp || "No disponible";

        document.getElementById("date").textContent =
            new Date().toLocaleString("es-MX");

        results.hidden = false;

        status.textContent =
            "Consulta completada.";

    } catch (error) {

        status.textContent =
            "Error: " + error.message;

    }

});
