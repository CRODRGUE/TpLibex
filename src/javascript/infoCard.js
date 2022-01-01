const itemOpenImg = document.querySelectorAll('.contentSlider>img')
const itemOpenBlock = document.querySelectorAll('.bookBlock>img')
const itemOpenProfil = document.querySelectorAll('#favContent>img')
const card = document.querySelector('.cardInfo')
const btnFav = document.querySelector('#btnCard>#fav')

function closeCard(){
    card.classList.toggle('active')
    console.log("CLose card !")
}

itemOpenBlock.forEach(item => {
    item.addEventListener('click', event => {
        card.classList.add('active')
        console.log("Open card ! (block)") 
    })
})

itemOpenImg.forEach(item => {
    item.addEventListener('click', event => {
        card.classList.add('active')
        console.log("Open card ! (img)") 
    })
})

itemOpenProfil.forEach(item => {
    item.addEventListener('click', event => {
        card.classList.add('active')
        console.log("Open card ! (profil)") 
    })
})

function stateFav(){
    const colorBack = 'var(--fav)';
  if (btnFav.style.backgroundColor == colorBack){
        btnFav.style.backgroundColor = '#f5deb3';
        btnFav.innerHTML = 'Ajouter aux favoris';
  }else{
        btnFav.style.backgroundColor = colorBack;
        btnFav.innerHTML = '<i class="far fa-heart"></i> ' + btnFav.innerHTML;
  }
  console.log("function excuter name > stateFav()")
}
