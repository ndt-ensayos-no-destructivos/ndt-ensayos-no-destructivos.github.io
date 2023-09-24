$(document).ready(function() {
    $(window).scroll(function() {
        // Obtén la posición vertical del desplazamiento de la página
        var scrollPosition = $(this).scrollTop();

        // Aplica el efecto de parallax a las imágenes con la clase "parallax-image-js"
        $(".parallax-image-js").css({
            'transform': 'translate3d(0px, ' + scrollPosition / 2 + 'px, 0px)'
        });
    });
});
