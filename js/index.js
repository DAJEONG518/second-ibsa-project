window.onload = function(){
let section2 = document.querySelector('.section2_1');
let section4 = document.querySelector('.section4_1');

section2.addEventListener('mouseover', function(){
    this.style.backgroundColor = '#FE5723';
    this.style.borderRadius = '0 0 100% 0';
    this.style.transition = 'all 0.5s'
});
section2.addEventListener('mouseout', function(){
    this.style.backgroundColor = '#fff';
    this.style.borderRadius = '0 0 0 0';
});

section4.addEventListener('mouseover', function(){
    this.style.backgroundColor = '#FE5723';
    this.style.borderRadius = '0 0 100% 0';
    this.style.transition = 'all 0.5s'
});
section4.addEventListener('mouseout', function(){
    this.style.backgroundColor = '#fff';
    this.style.borderRadius = '0 0 0 0';
});
}