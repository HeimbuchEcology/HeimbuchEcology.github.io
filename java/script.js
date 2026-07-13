

////////////////////////image galleries/////////////////////////
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

/*
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
    cursor.src = "assets/click.png";
});

document.addEventListener("mouseup", () => {
    cursor.src = "assets/unclick.png";
});
*/
/////////////////////cursor stuff/////////////////////////////////////
const cursor = document.getElementById("cursor");

// Hide initially
cursor.style.opacity = "0";

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Show the cursor after the first movement
    cursor.style.opacity = "1";
});

document.addEventListener("mousedown", () => {
    cursor.src = "assets/click.png";
});

document.addEventListener("mouseup", () => {
    cursor.src = "assets/unclick.png";
});

// Optional: hide when leaving the browser window
document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
});

// Show again when re-entering
document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
});


//////////////////making the page fade in and out /////////////////////////////

////////////////////////////////////////////////////////////////////////////////
