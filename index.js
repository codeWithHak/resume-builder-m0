var seeMore = false;
var seeMoreBtn = document.getElementById('see-more-btn');
var seeMoreContent = document.getElementById('see-more-content');
seeMoreBtn.addEventListener('click', function () {
    if (seeMore) {
        seeMoreContent.classList.add('hidden');
        seeMoreBtn.textContent = "See More";
    }
    else {
        seeMoreContent.classList.remove("hidden");
        seeMoreBtn.textContent = "See Less";
    }
    seeMore = !seeMore;
});
