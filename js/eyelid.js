window.onload = function(){
    /* 비교하기 */
    let count = 1;
    const btn = document.querySelector('#section2 .section2_1 p');
    const btnImg = document.querySelector('#section2 .section2_1 p img');
    const before = document.querySelector('.section2_2 .before');
    const after = document.querySelector('.section2_2 .after');

    btn.addEventListener('click', function(){
        count++;
        if(count%2 == 0){
            btnImg.style.left = '-105px';
            before.style.opacity = '0';
            after.style.opacity = '1';
        }else{
            btnImg.style.left = '0px';
            before.style.opacity = '1';
            after.style.opacity = '0';
        }
    });
}