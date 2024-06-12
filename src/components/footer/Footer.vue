<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-up">
      <div class="footer__container container">
        <div class="footer__logos">
          <img class="footer__logo-first" src="/image/footer/first.png" alt="" />
          <img class="footer__logo-second" src="/image/footer/second.png" alt="" />
        </div>
        <div class="footer__nav">
          <ul class="footer__list">
            <li>
              <span>Лицензия</span>
            </li>
            <li>
              <span>Политика конфиденциальности</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-down">
      <span>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer__container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.footer__logos {
  display: flex;
  gap: 32px;
}
.footer__nav {
  display: flex;
  align-items: center;
}
.footer__list {
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 32px;
}
.footer__list {
  span {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-align: left;
    cursor: pointer;
  }
}
.footer-down {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  text-align: center;
}
@media(width<967px){
    .footer__container{
        flex-direction: column;

    }
    .footer__logos{
        flex-direction: column;
        align-items: center;
        gap: 12px;
        .footer__logo-first{
            width: 296px;
            
        }
        .footer__logo-second{
            width: 116px;
        }
    }
    .footer__list{
        flex-direction: column;
       align-items: center;
       gap: 15px;
    }
    .footer__nav{
        margin-top: 20px;
        justify-content: center;
    }
}
</style>
