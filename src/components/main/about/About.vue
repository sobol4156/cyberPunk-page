<script setup></script>
<template>
  <section class="about">
    <div class="container about__container">
      <h2 class="about__title">Найт-Сити изменит тебя навсегда!</h2>
      <p class="about__description">
        <a href="#">Cyberpunk 2077</a> — приключенческая ролевая игра, действие
        которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
        модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках
        устройства, позволяющего обрести бессмертие. Ты сможешь менять
        киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый
        мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
      </p>
      <div class="about__images">
        <div class="about__image-two">
          <div>
            <img
              class="about__image-1"
              src="/image/main/about/about1.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="about__image-2"
              src="/image/main/about/about2.png"
              alt=""
            />
          </div>
        </div>
        <div class="about__image-last">
          <img
            class="about__image-3"
            src="/image/main/about/about3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about__container {
  margin-top: 80px;
  margin-bottom: 60px;
}
.about__title {
  font-family: Archangelsk;
  font-size: 62px;
  font-weight: 400;
  line-height: 63.3px;
  text-align: left;
}
.about__description {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  text-align: left;
  color: #777;

  a {
    text-decoration: none;
    color: #52bedc;
    font-weight: 700;
  }
}
.about__image-two {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 32px;

  img {
    width: 100%;
    height: 100%;
  }
}
.about__image-last {
  img {
    width: 100%;
    height: 100%;
  }
}
.about__images {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 32px;
}

.crossing {
  background-image: url("/image/main/about/crossing.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 70px;
}

@media (width<1024px) {
  .about__images {
    flex-direction: column;
  }

  .about__image-two {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .about__image-last {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (width<763px) {
  .about__title{
    margin-top: 0;
    
  }
  .about__container{
    margin-top: 40px;
  }
}

@media (width<550px) {
  .about__image-two {
    flex-direction: column;
  }
  .about__container {
    padding: 0;
  }
  .about__description,
  .about__title {
    padding: 0 20px;
  }
  .about__image-last {
    overflow: hidden;
    img {
      height: 424px;
      object-fit: cover;
      clip-path: polygon(
        17% 0,
        100% 0,
        100% 87%,
        85% 100%,
        25% 100%,
        0 100%,
        0 13%
      );
    }
  }
}
@media (width<448px) {
  .about__container{
    margin-top: 30px;
  }
  .about__title {
    font-size: 48px;
    line-height: 48px;
    margin-top: 0;
  }
}
</style>
