const slider = document.querySelector('input');
const bar = document.querySelector('.progress-bar');
const thumb = document.querySelector('.thumb');
let span = document.querySelector('span')
const slideIcon = document.querySelector('.slide-icon')
let fundo = document.getElementById('corpo');

slider.oninput = () => {
    let value = slider.value;
    thumb.style.left = value +'%';
    bar.style.width = value + '%';

    if (value < 20) {
        slideIcon.style.marginTop = '0px';
        fundo.style.background = "var(--raiva)"
        thumb.style.background = 'var(--raiva)'
        span.style.background = 'var(--raiva)';
        bar.style.background = 'var(--raiva)';
    }
    if (value >= 20) {
        slideIcon.style.marginTop = '-150px';
        fundo.style.background= 'var(--tedio)';
        thumb.style.background = 'var(--tedio)'
        span.style.background = 'var(--tedio)';
        bar.style.background = 'var(--tedio)';
    }
    if (value >= 40) {
        slideIcon.style.marginTop = '-300px'
        fundo.style.background = "var(--fofo)"
        thumb.style.background = 'var(--fofo)'
        span.style.background = 'var(--fofo)';
        bar.style.background = 'var(--fofo)';
    }
    if (value >= 60) {
        slideIcon.style.marginTop = '-450px'
        fundo.style.background = "var(--coracao)"
        thumb.style.background = 'var(--coracao)'
        span.style.background = 'var(--coracao)';
        bar.style.background = 'var(--coracao)';
    }
    if (value >= 80) {
        slideIcon.style.marginTop = '-600px'
        fundo.style.background = "var(--beijo)"
        thumb.style.background = 'var(--beijo)'
        span.style.background = 'var(--beijo)';
        bar.style.background = 'var(--beijo)';
    }
}