<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay, EffectFade} from 'swiper/modules'
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
      :autoplay="{delay:3000, disableOnInteraction: false}"
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
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.swiper {
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
  background-image: url("@public/image/main/hero/11.jpg");
}
.hero-slide-2 {
  background-image: url("@public/image/main/hero/12.jpg");
}
.hero-slide-3 {
  background-image: url("@public/image/main/hero/13.jpg");
}
</style>
