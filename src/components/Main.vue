<template>
    <div class="main-layout">
        <NavBar />
        <Home />
        <Products />
        <Feedback />
        <FooterBar />
    </div>
</template>
s
<script>
    import NavBar from "./layout/NavBar";
    import Home from "../views/Home";
    import Products from "../views/Products";
    import FooterBar from "./layout/FooterBar";
    import Feedback from "../views/Feedback";
    import {api} from "../utils/api";
    export default {
        name: "Main",
        components: {Feedback, FooterBar, Products, Home, NavBar},
        mounted() {
            this.$store.dispatch('products/GET_PRODUCTS')
        }
    }
</script>

<style scoped>

</style>
