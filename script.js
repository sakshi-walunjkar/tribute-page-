// Toggle bio more content
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const bioMore = button.nextElementSibling;
            bioMore.style.display = bioMore.style.display === "block"? "none" : "block";
            button.textContent = bioMore.style.display === "block"? "Read Less" : "Read More";
        });
    });
});

// Toggle quotes more content
document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButtons = document.querySelectorAll(".load-more");
    loadMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const quotesMore = button.nextElementSibling;
            quotesMore.style.display = quotesMore.style.display === "block"? "none" : "block";
            button.textContent = quotesMore.style.display === "block"? "Load Less" : "Load More";
        });
    });
});