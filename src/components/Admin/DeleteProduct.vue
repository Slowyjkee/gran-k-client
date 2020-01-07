<template>
    <section>
        <div v-for="item in list">
            <div class="product__item">
                <card :title="item.title" :subtitle="item.price" :description="item.description" image="../../assets/grass-on-golf-backgrounds.jpg"/>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapState} from "vuex";
    import Card from "../../reusables/card";

    export default {
        name: "DeleteProduct",
        components: {Card},
        mounted() {
            this.$store.dispatch('products/GET_PRODUCTS')
        },
        computed: {
            ...mapState("products", {
                list: s => s.list,
            }),
        }
    }
</script>

<style scoped lang="scss">

</style>
