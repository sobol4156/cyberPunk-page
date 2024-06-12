<script setup></script>

<template>
  <section class="buy">
    <div class="buy__container">
      <div class="buy__left-image">
        <img src="/image/main/buy/main.png" alt="" />
      </div>

      <div class="buy__content">
        <h2 class="buy__title">Купить игру Cyberpunk 2077</h2>
        <p>В комплект входит:</p>
        <ul class="buy__list">
          <li class="buy__list-item">
            <img src="/image/main/buy/disk.png" alt="" />
            <span>Футляр с игровыми дисками</span>
          </li>
          <li class="buy__list-item">
            <img src="/image/main/buy/Group.png" alt="" />
            <span>Футляр с кодом для загрузки игры и дисками (pc)</span>
          </li>
          <li class="buy__list-item">
            <img src="/image/main/buy/collections.png" alt="" />
            <span>Справочник с информацией об игровом мире</span>
          </li>
        </ul>
        <p>Выберите платформу:</p>
        <div class="buy-images">
          <div class="buy-image">
            <img src="/image/main/buy/pc.png" alt="" />
            <img src="/image/main/buy/xbox.png" alt="" />
          </div>
          <div class="buy-image">
            <img src="/image/main/buy/stadia.png" alt="" />
            <img src="/image/main/buy/playstation.png" alt="" />
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
  width: 976px;

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
</style>
