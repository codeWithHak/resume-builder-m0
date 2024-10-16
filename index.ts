let seeMore = false;
let seeMoreBtn = document.getElementById('see-more-btn') as HTMLButtonElement
let seeMoreContent = document.getElementById('see-more-content') as HTMLElement

seeMoreBtn.addEventListener('click',()=>{
    if(seeMore){
        seeMoreContent.classList.add('hidden')
        seeMoreBtn.textContent="See More"
    }
    else{
        seeMoreContent.classList.remove("hidden")
        seeMoreBtn.textContent="See Less"
    }

    seeMore = !seeMore;
    
});
