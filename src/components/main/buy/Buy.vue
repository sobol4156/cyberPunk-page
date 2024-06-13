<script setup></script>

<template>
  <section class="buy">
    <div class="buy__container">
      <div class="buy__left-image">
        <img src="/image/main/buy/main.webp" alt="" />
      </div>

      <div class="buy__content">
        <h2 class="buy__title">Купить игру Cyberpunk 2077</h2>
        <p>В комплект входит:</p>
        <ul class="buy__list">
          <li class="buy__list-item">
            <img src="/image/main/buy/disk.webp" alt="" />
            <span>Футляр с игровыми дисками</span>
          </li>
          <li class="buy__list-item">
            <img src="/image/main/buy/Group.webp" alt="" />
            <span>Футляр с кодом для загрузки игры и дисками (pc)</span>
          </li>
          <li class="buy__list-item">
            <img src="/image/main/buy/collections.webp" alt="" />
            <span>Справочник с информацией об игровом мире</span>
          </li>
        </ul>
        <p>Выберите платформу:</p>
        <div class="buy-images">
          <div class="buy-image">
            <img  src="/image/main/buy/pc.webp" alt="" />
            <img  src="/image/main/buy/xbox.webp" alt="" />
          </div>
          <div class="buy-image">
            <img  src="/image/main/buy/stadia.webp" alt="" />
            <img  src="/image/main/buy/playstation.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buy__container {
  display: flex;
  background-color: black;
  gap: 25px;
}
.buy__left-image {
  width: 900px;
  overflow: hidden;
  height: 717px;
}
.buy__content {
  width: 936px;
    
  p {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.13px;
    text-align: left;
    color: #52bedc;
    margin: 0 0 15px;
  }
}
.buy__title {
    margin: 70px 0 20px;
    
  font-family: Archangelsk;
  font-size: 62px;
  font-weight: 400;
  line-height: 63.3px;
  text-align: left;
  color: #fff;
  max-width: 624px;
}

.buy__list {
    margin: 0 0 72px;
  list-style-type: none;
  padding: 0;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.buy__list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
}
.buy-images{
    max-width: 319px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .buy-image{
        display: flex;
        justify-content: space-between;
    }
}
@media(width<1345px){
    .buy__content{
        width: 672px;
        flex-shrink: 0;
    }
}
@media(width<1000px){

    .buy__content{
        width: 1972px;
        flex-shrink: 1;
    }

}
@media(width<763px){
    .buy__container{
        flex-direction: column;
    }
    .buy__content{
        padding: 0 20px 60px;
        width: auto;
        flex-shrink: 1;
    }
    .buy__left-image{
        overflow: hidden;
        width: auto;
        height: 400px;
        img{
            width: auto;
            height: auto;
        }
    }
    .buy__title{
        margin-top: 0;
    }
    
}
@media(width<550px){
 .buy__left-image{
    width: 100%;
    height: 100%;
    overflow: visible;
    img{
        width: 100%;
    }
 }   
 .buy__title{
    font-size: 52px;
    line-height: 52px;
 }
 .buy__content{
    p{
        font-size: 20px;
    }
    .buy__list-item{
        font-size: 16px;
    }
 }
}
@media(width<475px){
    .buy__title{
    font-size: 40px;
    line-height: 40px;
 }
 .buy-image{

 }
}
@media(width<370px){
    .buy__title{
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 10px;
 }
 .buy-images{
    gap: 30px;
 }
}
</style>
