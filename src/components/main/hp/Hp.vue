<script setup></script>

<template>
  <section class="hp">
    <div class="container hp__container">
      <div class="hp__content">
        <div class="hp__images">
          <picture class="hp__monitor">
            <img src="/image/main/hp/monitor.png" alt="" />
          </picture>
          <div class="hp__small-img">
            <div>
              <img
                class="hp__image-item"
                src="/image/main/hp/logo.svg"
                alt=""
              />
            </div>
            <div>
              <img
                class="hp__image-item"
                src="https://live.verstaem.online/cyberpunk/img/separator.svg"
                alt=""
              />
            </div>
            <div>
              <img
                class="hp__image-item"
                src="/image/main/hp/cyberlogo.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="hp__text">
          <h2 class="hp__title">Полное погружение вместе с HP</h2>
          <p>
            Погрузись в современные экшен-игры с реалистичным изображением с
            помощью монитора с диагональю 23,8 дюйма, созданном для отображения
            максимально насыщенных цветов. Успевай реагировать на любые события
            с временем отклика 1 мс и частотой в 144 Гц!
          </p>
          <ul class="hp__list">
            <li class="hp__list-item">
              <img src="/image/main/hp/img1.svg" alt="" />
              <span>Яркие насыщенные цвета</span>
            </li>
            <li class="hp__list-item">
              <img src="/image/main/hp/img2.svg" alt="" />
              <span>Кристальная четкость изображения</span>
            </li>
            <li class="hp__list-item">
              <img src="/image/main/hp/img3.svg" alt="" />
              <span>Быстрые движения и плавный геймплей</span>
            </li>
          </ul>
          <button class="hp-btn">Подробнее</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hp {
  padding: 75px 0 65px;
  background-color: #f8f200;
}
.hp__container{
    padding: 0 20px;
}
.hp__content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.hp__images {
  display: flex;
  flex-direction: column;
  max-width: 624px;
}
.hp__monitor {
  margin-bottom: 32px;
  max-width: 624px;
  img {
   width: 100%;
  }
}
.hp__small-img {
  display: flex;
  justify-content: center;
  gap: 32px;
  max-width: 100%;
  div{
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
}

.hp__text {
    max-width: 624px;
  p {
    margin-top: 0;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    text-align: left;
    max-width: 624px;
  }
}
.hp__title {
  font-family: Archangelsk;
  font-size: 62px;
  font-weight: 400;
  line-height: 63.3px;
  text-align: left;
  margin: 0 0 35px;
}
.hp__list {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 0 40px;
}
.hp__list-item {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 15px;

  img{
    width: 24px;
    height: 24px;
  }
}
.hp-btn {
  background: black;
  color: #f8f200;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  border: none;
  padding: 15px 50px;
  cursor: pointer;
}


@media(width < 1255px){
    .hp__small-img{
        flex-direction: column;

        div{
            justify-content: center;
        }
        img{
            width: auto;
        }
    }
}
@media(width<844px){
    .hp__content{
        flex-direction: column;
    }
    .hp__small-img{
        flex-direction: row;
        img{
            max-width: 100%;
        }
    }
}
@media(width<650px){
    .hp__title{
        font-size: 42px;
        line-height: 42px;
        margin-bottom: 20px;
    }
    .hp__text{
        p{
            font-size: 16px;
            line-height: 32px;
            margin-bottom: 25px;
        }
    }
    .hp__list{
        span{
            font-size: 16px;

        }
    }
    .hp-btn{
        padding: 15px 45px;
        font-size: 16px;
        line-height: 18.75px;
    }
}
@media(width<435px){
    .hp__title{
        font-size: 32px;
        line-height: 32px;
    }
}
@media(width<342px){
    .hp__title{
        font-size: 28px;
        line-height: 28px;
    }
}
</style>
