function transformOpacity(){
    const header = document.getElementById('header');
    const topScroll = document.documentElement.scrollTop;
    if(topScroll != 0){
        header.style.opacity = 0.3;
    }
}

function restoreOpacity(){
    const topScroll = document.documentElement.scrollTop;
    const header = document.getElementById('header');
    if(topScroll != 0){
        header.style.opacity = 1;
    }
}

function globalOpacity(){
    const topScroll = document.documentElement.scrollTop;
    const header = document.getElementById('header');
    if(topScroll == 0){
        header.style.opacity = 1;   
    } else {
        header.style.opacity = 0.3;
    }
}