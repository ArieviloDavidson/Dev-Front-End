function globalOpacity(){
    const topScroll = document.documentElement.scrollTop;
    const header = document.getElementById('header');
    if(topScroll == 0){
        header.style.backgroundColor = "rgb(1,1,1,0.5)";   
    } else {
        header.style.backgroundColor = "rgb(1,1,1,0.8)";
    }
}