// start jquey area


$(document).ready(function(){
    // start show hide aside btn
    $(".aside_show_btn").click(function(){
        $(this).toggleClass("active");
        $("#left_side_container").toggleClass("active");
    })
    // end show hide aside btn

    // start banner carousel
    $("#banner_carousel").owlCarousel({
        items : 1,
        loop : true,
        dots : false,
        autoplay : true,
        autoplayTimeout : 5000,
        autoplayHoverPause : true,
        pullDrag: false,
        mouseDrag: false,
        animateIn : "animate__fadeIn",
        animateOut: "animate__fadeOut"
    })
    // end banner carousel

    // start accordian section
    $(".accordian_title").click(function(){
        $(this).toggleClass("active");
        $(this).find("i").toggleClass("fa-minus");
        $(this).find("i").toggleClass("fa-plus");
        $(this).siblings().animate({
            height : "toggle"
        })
    })

    // end accordian section


    // start recent work
    $(".recent_work_tabs_container ul li").click(function(){
        
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        let getTab = $(this).attr("show-tab");

        if(getTab === "all"){
            $(".recent_gallery").show();
        }else if(getTab != "all"){
            $(".recent_gallery").hide();
            $("."+getTab).show();
            
        }
    })
    // end recent work

})
// end jquery area


// start nav bar
let getNavs = document.querySelectorAll(".aside_body ul li a");
console.log(getNavs);
let getsections = document.querySelectorAll(".scrollsection");

window.addEventListener("scroll",function(){
    let getPosition = this.window.scrollY+200;
    let targetSections = [];
    getsections.forEach(function(getsection){
        targetSections.push(getsection.offsetTop);
        
    })
    let getSectionPosition = [];
    targetSections.forEach(function(targetSection){
        if(targetSection >= getPosition){
            getSectionPosition.push(targetSection);
        }
    })


    let getTargetValue = getSectionPosition[0];
    let getLastValue = getSectionPosition[0];


    let getIdx = targetSections.indexOf(getTargetValue);
    let getLastIdx = targetSections.indexOf(getLastValue);

    getnavscroll(getIdx-1);

})

function getnavscroll(idx){
    getNavs.forEach(function(getNav){

        getNav.classList.remove('active');
        if(idx < 0){
            getNavs[getNavs.length-1].classList.add("active");
        }else{
            getNavs[idx].classList.add("active");
        }
        
    })
}

// end nav bar

// start counter up
const counterUp = window.counterUp.default;

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const cupofcoffee = document.querySelector( '.cupofcoffee' );
const projects = document.querySelector( '.projects' );
const clients = document.querySelector( '.clients' );
const partners = document.querySelector( '.partners' );
IO.observe( cupofcoffee );
IO.observe( projects );
IO.observe( clients );
IO.observe( partners );
// end counter up