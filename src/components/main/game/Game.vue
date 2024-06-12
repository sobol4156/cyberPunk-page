<script setup>
import {ref} from 'vue'

const isChecked = ref(false)

function toggleCheck() {
    isChecked.value = !isChecked.value
}
</script>

<template>
  <section class="game">
    <div class="container game__container">
      <div class="game__title">
        <img src="/image/main/game/promo.png" alt="" />
        <h2>Играй и выигрывай!</h2>
      </div>
      <p class="game__instruction">
        Играй в <a href="#">Cyberpunk 2077</a> и получи возможность выиграть
        консоль <a href="#">Xbox Series X</a> или
        <a href="#"> Sony PlayStation 5!</a> Заполни форму ниже и приложи
        скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля.
        Удачи! &#59;&#41;
      </p>
      <div class="game__content">
        <form class="game__form">
          <input
            class="form-name form-input"
            type="name"
            placeholder="Как тебя зовут?"
          />
          <input
            class="form-email form-input"
            type="email"
            placeholder="Твой е-mail"
          />
          <label class="form__file-label">
            <input type="file" />
            <span class="form__file-text">Прикрепить скриншот</span>
            <span class="form__file-format">.png / .jpg / .pdf</span>
          </label>
          <button class="form-btn">Отправить</button>
          <span @click="toggleCheck" class="form__agree" :class="{checked: isChecked}">
            Согласен на обработку персональных данных
          </span>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.game {
  background-color: black;
  color: white;
}
.game__container {
  padding: 20px 20px 80px 20px;
}
.game__title {
  display: flex;
  align-items: center;
  gap: 20px;
  h2 {
    margin: 0;
    margin-top: 40px;
    font-family: Archangelsk;
    font-size: 62px;
    font-weight: 400;
    line-height: 63.3px;
    text-align: left;
  }
}
.game__instruction {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  text-align: left;
  max-width: 952px;
  a {
    font-weight: 700;
    color: #52bedc;
    text-decoration: none;
  }
}
.game__form {
  max-width: 460px;
  padding-top: 63px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.form-input {
  background-color: black;
  border: none;
  border-bottom: 1px solid #777;
  padding: 11px;
  color: #777;

  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  line-height: 21.09px;
  text-align: left;
}
.form-input::placeholder {
  color: #777;
}
.form-input:focus {
  outline: none;
  outline-offset: none;
}
.form__file-label {
  position: relative;
  cursor: pointer;
  max-width: 460px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px dashed #777777;
  gap: 5px;

  input {
    position: absolute;
    opacity: 0;
  }

  .form__file-text {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    text-align: left;
    border-bottom: 1px solid white;
  }
  .form__file-format {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.06px;
    text-align: left;
  }
}
.form-btn {
  width: 192px;
  padding: 15px 50px;
  background-color: #f8f200;
  color: black;
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: left;
}

.form__agree {
  position: relative;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  text-align: left;
  color: #777;
  cursor: pointer;
}
.form__agree::before {
  content: "";
  margin-right: 11px;
  width: 14px;
  height: 14px;
  padding: 0 7px;
  box-sizing: border-box;
  border: 1px solid #777777;
  background-position: center;
  background-repeat: no-repeat;
}
.form__agree::after {
  display: none;
  content: "";
  position: absolute;
  width: 10px;
  height: 7px;
  z-index: 6;
  left: 3px;
  top: 3px;
  background-image: url("/image/main/game/ok.svg");
}
.form__agree.checked::after {
  display: block;
}
</style>
