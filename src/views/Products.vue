<template>
    <div class="products-section">
        <div v-for="item in list">
            <div class="product__item">
                <card :title="item.title" :subtitle="item.subtitle" :description="item.description"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "../reusables/card";
    import {mapState} from "vuex";
    export default {
        name: "Products",
        components: {Card},
        data() {
            return {
            }
        },
        computed: {
            ...mapState("products", {
                list: s => s.list,
            }),
        }
    }
</script>

<style scoped lang="scss">
    .products-section {
        display: flex;
        justify-content: space-between;
        margin: 50px;
        flex-wrap: wrap;
    }
</style>
