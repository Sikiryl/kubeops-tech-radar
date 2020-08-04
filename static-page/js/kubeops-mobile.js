
function addActiveBtn(activeBtn, activeSection) {
    $('.btn-mobile').addClass("btn-mobile--inactive");
    $(activeBtn).removeClass("btn-mobile--inactive");
    
    $('.details-section').addClass("details-section--collapse");
    $(activeSection).removeClass("details-section--collapse");
}

$("body").on('DOMNodeInserted ', '#radar', function(){
    $('.kubeops-mobile').removeClass("kubeops-mobile--inactive");
});

