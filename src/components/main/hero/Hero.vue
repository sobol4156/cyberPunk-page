<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
</script>

<template>
  <section class="hero">
    <swiper
      :modules="[Autoplay, EffectFade]"
      :slides-per-view="1"
      :space-between="0"
      effect="fade"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      loop
    >
      <swiper-slide>
        <div class="hero-slide-1 hero-slide"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero-slide-2 hero-slide"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero-slide-3 hero-slide"></div>
      </swiper-slide>
    </swiper>
    <div class="container hero__container">
      <div class="hero-info corner-block">
        <h2>Доступно на всех платформах</h2>
        <button>Узнать больше</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  position: relative;
}

.swiper {
  position: absolute;
  height: 100%;
  width: 100%;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-slide {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}
.hero-slide-1 {
  background-image: url("/image/main/hero/11.jpg");
}
.hero-slide-2 {
  background-image: url("/image/main/hero/12.jpg");
}
.hero-slide-3 {
  background-image: url("/image/main/hero/13.jpg");
}

.hero__container {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.hero-info {
  z-index: 5;
  position: relative;
  max-width: 624px;
  
  background: #f8f200;
  padding: 70px 70px 56px 70px;

  h2 {
    margin: 0;
    margin-bottom: 24px;
    font-family: Archangelsk;
    font-size: 62px;
    font-weight: 400;
    line-height: 63.3px;
    text-align: left;
    max-width: 484px;
  }
  button {
    background: black;
    color: #f8f200;

    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;

    border: none;
    padding: 25px 50px;
  }
}

@media(width<533px){
    .hero__container{
        padding: 0;
    }
}
</style>
