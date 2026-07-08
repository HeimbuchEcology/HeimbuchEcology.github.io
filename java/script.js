const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";

        const large = document.createElement("img");

        large.src = img.src;
        large.style.maxWidth = "90%";
        large.style.maxHeight = "90%";

        overlay.appendChild(large);

        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";

        overlay.onclick = () => overlay.remove();

        document.body.appendChild(overlay); 

    });

});