"use-strict"
{
document.addEventListener('scroll', ()=> {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;

    elements.forEach((element)=> {
        const position = element.getBoundingClientRect().top;

        // 要素が画面内に入ったらクラスを追加
        if (position+120 < windowHeight) {
            element.classList.add('visible');
        }
    });
});
}