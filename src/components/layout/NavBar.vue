<template>
<div class="navbar container">
    <img src="../../assets/logo.png" alt="">
    <div class="navigation-panel">
        <md-button class="nav-button">Доставка</md-button>
        <md-button class="nav-button">Контакты</md-button>
        <md-button class="nav-button">Галерея</md-button>
        <md-button class="nav-button">О нас</md-button>
    </div>
</div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="scss">
    .navbar {
        justify-content: space-between;
        height: 56px;
        display: flex;
        align-items: center;
        margin-left: 20vh;
        ul {
            display: inline-flex;
            li {
                cursor: pointer;
                list-style: none;
                padding: 30px 16px 25px;
                &:hover {
                    background-color: #a2a2a2;
                }
            }

        }
    }
</style>
