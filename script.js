(function () {
    const icon = document.createElement("div");
    icon.style.position = "fixed";
    icon.style.bottom = "20px";
    icon.style.right = "20px";
    icon.style.width = "50px";
    icon.style.height = "50px";
    icon.style.backgroundColor = "red";
    icon.style.borderRadius = "50%";
    icon.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    icon.style.display = "flex";
    icon.style.justifyContent = "center";
    icon.style.alignItems = "center";
    icon.style.cursor = "pointer";
    icon.style.zIndex = "9999999";

    icon.innerHTML = "\u2605"; // Unicode star symbol
    icon.style.color = "white";
    icon.style.fontSize = "24px";

    document.body.appendChild(icon);

    icon.addEventListener("click", function () {
        // create a banner message, center it on the screen, and style it
        const banner = document.createElement("div");
        banner.style.position = "fixed";
        banner.style.top = "50%";
        banner.style.left = "50%";
        banner.style.transform = "translate(-50%, -50%)";
        banner.style.width = "100%";
        banner.style.padding = "20px";
        banner.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        banner.style.color = "white";
        banner.style.borderRadius = "10px";
        banner.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        banner.style.zIndex = "9999999";
        banner.textContent = "Trường Sa và Hoàng Sa là của Việt Nam!";
        // text content must largest
        banner.style.fontSize = "50px";
        banner.style.textAlign = "center";
        document.body.appendChild(banner);
    });
})();
