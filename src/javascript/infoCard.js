const itemOpenImg = document.querySelectorAll('.contentSlider>img')
const itemOpenBlock = document.querySelectorAll('.bookBlock>img')
const itemOpenTop = document.querySelectorAll('.contentTop>img')
const itemOpenProfil = document.querySelectorAll('#favContent>img')
const card = document.querySelector('.card')
const btnFav = document.querySelector('#btnCard>#fav')
const iconFav = document.querySelector('#fav>i')

function closeCard(){
    card.classList.remove('active')
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

itemOpenTop.forEach(item => {
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


/*window.onload = function(){
    var cards = document.getElementById('cards');
    document.onclick = function(e){
      if(e.target.id !== 'cards'){
        card.classList.remove('active')
      }
    };
  };*/

function stateFav(){
    const colorBack = 'var(--fav)';
  if (btnFav.style.backgroundColor == colorBack){
        btnFav.style.backgroundColor = '#f5deb3';
        iconFav.style.visibility = 'hidden'
  }else{
        btnFav.style.backgroundColor = colorBack;
        iconFav.style.visibility = 'visible'
  }
  console.log("function excuter name > stateFav()")
}
