<script setup>

</script>

<template>
    <header class="header">
        <div class=" header__container container">
            <img class="header__logo" src="https://live.verstaem.online/cyberpunk/img/cyberpunk.svg" alt="">
            <div class="header__social">
                <ul class="header__list">
                    <li class="header__item">
                        <a class="header__item-link" href="#">
                            <img class="header__item-img img-youtube" src="/image/header/social/youtube.svg" alt="">
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item-link" href="#">
                            <img class="header__item-img" src="/image/header/social/vk.svg" alt="">
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item-link" href="#">
                            <img class="header__item-img" src="/image/header/social/facebook.svg" alt="">
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item-link" href="#">
                            <img class="header__item-img" src="/image/header/social/twitter.svg" alt="">
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item-link" href="#">
                            <img class="header__item-img" src="/image/header/social/twitch.svg" alt="">
                        </a>
                    </li>
                    <li class="header__item">
                        <a class="header__item-link" href="#">
                            <img class="header__item-img" src="/image/header/social/instagram.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    
    position: absolute;
    width: 100%;
    z-index: 2;

}
.header__logo{
    width: 296px;
    height: 74px;
}
.header__container{
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
}
.header__social{
    display: flex;
    align-items: center;
}


.header__list{
    display: flex;
    gap: 32px;
    padding: 0;
    .header__item{
        list-style-type: none;
    }
}
.img-youtube{
    border: 1px solid black;
    border-radius: 5px;
    width: 28px;
    height: 28px;
}
@media(width<760px){
    .header__container{
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
    .header__logo{
        width: 200px;
        height: 50px;
    }
    .header__item-img{
        width: 23px;
        height: 23px;
    }
    .img-youtube{
    width: 21px;
    height: 21px;
}
    .header__list{
        margin-top: 8px;
        gap: 25px;
    }
}
@media(width<315px){
    .header__item-img{
        width: 19px;
        height: 19px;
    }
    .header__logo{
        width: 250px;
        height: 65px;
    }
}
</style>