$(document).ready(function() {

    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });

    window.addEventListener('beforeunload', ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    })
 

    var blocks = document.getElementsByClassName('anim-item');

    var isScrolling = false;
 
    window.addEventListener("scroll", (Event)=>{
        if (isScrolling == false ) {
            window.requestAnimationFrame(function() {
                scrolling(Event);
                isScrolling = false;
            });
        }
        isScrolling = true;

    }, false);

    document.addEventListener("load", scrolling, false);
    
    function isPartiallyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
     
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
        var height = elementBoundary.height;
     
        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }

    function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
       
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
       
        return ((top >= 0) && (bottom <= window.innerHeight));
    }

    function scrolling(e) {

        for (var i = 0; i < blocks.length; i++) {
            

            if (isPartiallyVisible(blocks[i])) {
                blocks[i].classList.add("active");
                blocks[i].classList.remove("anim-item");
            } else {
                blocks[i].classList.remove("active");
                blocks[i].classList.add("anim-item");
            }
        }
    }
    



    
})


