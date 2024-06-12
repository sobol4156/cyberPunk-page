<script setup>

import Buy from './components/main/buy/Buy.vue';
import Hp from './components/main/hp/Hp.vue';
import Header from './components/header/Header.vue';
import About from './components/main/about/About.vue';
import Game from './components/main/game/Game.vue';
import Hero from './components/main/hero/Hero.vue';
import Footer from './components/footer/Footer.vue';

</script>

<template>
  
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Game/>
      <Hp/>
      <Buy/>
    </main>
    <Footer/>
</template>

<style scoped>

</style>
