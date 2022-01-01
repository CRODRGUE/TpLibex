const item = document.querySelectorAll('.slider1');
const lenitem = item.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

const item2 = document.querySelectorAll('.slider2');
const lenitem2 = item2.length;
const suivant2 = document.querySelector('.right2');
const precedent2 = document.querySelector('.left2');
let count2 = 0;

const item3 = document.querySelectorAll('.slider3');
const lenitem3 = item3.length;
const suivant3 = document.querySelector('.right3');
const precedent3 = document.querySelector('.left3');
let count3 = 0;

const item4 = document.querySelectorAll('.slider4');
const lenitem4 = item4.length;
const suivant4 = document.querySelector('.right4');
const precedent4 = document.querySelector('.left4');
let count4 = 0;


function slideSuivant(){
    item[count].classList.remove('active');
    if (count < lenitem-1){
        count++;
    }else{
        count = 0;
    }
    item[count].classList.add('active');
    console.log(count);
}

function slidePrecedent(){
    item[count].classList.remove('active');
    if (count > 0){
        count--;
    }else{
        count = lenitem - 1;
    }
    item[count].classList.add('active');
    console.log(count);
}

suivant.addEventListener('click', slideSuivant);
precedent.addEventListener('click', slidePrecedent);


function slideSuivant2(){
    item2[count2].classList.remove('active');
    if (count2 < lenitem2-1){
        count2++;
    }else{
        count2 = 0;
    }
    item2[count2].classList.add('active');
    console.log(count2);
}

function slidePrecedent2(){
    item2[count2].classList.remove('active');
    if (count2 > 0){
        count2--;
    }else{
        count2 = lenitem2 - 1;
    }
    item2[count2].classList.add('active');
    console.log(count2);
}

suivant2.addEventListener('click', slideSuivant2);
precedent2.addEventListener('click', slidePrecedent2)

function slideSuivant3(){
    item3[count3].classList.remove('active');
    if (count3 < lenitem3-1){
        count3++;
    }else{
        count3 = 0;
    }
    item3[count3].classList.add('active');
    console.log(count3);
}

function slidePrecedent3(){
    item3[count3].classList.remove('active');
    if (count3 > 0){
        count3--;
    }else{
        count3 = lenitem3 - 1;
    }
    item3[count3].classList.add('active');
    console.log(count3);
}

suivant3.addEventListener('click', slideSuivant3);
precedent3.addEventListener('click', slidePrecedent3)

function slideSuivant4(){
    item4[count4].classList.remove('active');
    if (count4 < lenitem4-1){
        count4++;
    }else{
        count4 = 0;
    }
    item4[count4].classList.add('active');
    console.log(count4);
}

function slidePrecedent4(){
    item4[count4].classList.remove('active');
    if (count4 > 0){
        count4--;
    }else{
        count4 = lenitem4 - 1;
    }
    item4[count4].classList.add('active');
    console.log(count4);
}

suivant4.addEventListener('click', slideSuivant4);
precedent4.addEventListener('click', slidePrecedent4)

//slider nouveautés

const sliderN = document.querySelectorAll('.sliderN');
const lenSliderN = sliderN.length;
const suivantN = document.querySelector('.rightNew');
const precedentN = document.querySelector('.leftNew');
let countN = 0;

function slideSuivantN(){
    sliderN[countN].classList.remove('active');
    if (countN < lenSliderN-1){
        countN++;
    }else{
        countN = 0;
    }
    sliderN[countN].classList.add('active');
    console.log(countN);
}

function slidePrecedentN(){
    sliderN[countN].classList.remove('active');
    if (countN > 0){
        countN--;
    }else{
        countN = lenSliderN - 1;
    }
    sliderN[countN].classList.add('active');
    console.log(countN);
}

suivantN.addEventListener('click', slideSuivantN);
precedentN.addEventListener('click', slidePrecedentN);

//slider top lecture

const sliderT = document.querySelectorAll('.sliderT');
const lenSliderT = sliderT.length;
const suivantT = document.querySelector('.rightTop');
const precedentT = document.querySelector('.leftTop');
let countT = 0;

function slideSuivantT(){
    sliderT[countT].classList.remove('active');
    if (countT < lenSliderT-1){
        countT++;
    }else{
        countT = 0;
    }
    sliderT[countT].classList.add('active');
    console.log(countT);
}

function slidePrecedentT(){
    sliderT[countT].classList.remove('active');
    if (countT > 0){
        countT--;
    }else{
        countT = lenSliderT - 1;
    }
    sliderT[countT].classList.add('active');
    console.log(countT);
}

suivantT.addEventListener('click', slideSuivantT);
precedentT.addEventListener('click', slidePrecedentT);