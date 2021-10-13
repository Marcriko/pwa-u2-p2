let principal = $('#principal');
let news = $('#news');

$('.btn-seguir').on('click',function (e) {
    console.log('funcion btn-seguir')
    principal.fadeOut(function () {
        news.slideDown(1500)
    })
});

$('.btn-regresar').on('click',function () {
    news.fadeOut(function (params) {
        principal.slideDown(1500)
    })
})