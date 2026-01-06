
const menuItems = document.querySelectorAll(".menu-Items");

menuItems.forEach(function(item) {

    const textAsli = item.textContent;

    item.addEventListener("mouseenter", function () {
        item.textContent = "< " + textAsli;
        item.style.fontSize = "2.2rem";
    });

    item.addEventListener("mouseleave", function () {
        item.textContent = textAsli;
        item.style.fontSize = "2rem";
    });

});
