<template>
    <div class="create_product">
        <md-field>
            <label>Название</label>
            <md-input v-model="form.title"></md-input>
        </md-field>

        <md-field :class="messageClass">
            <label>Цена</label>
            <md-input v-model="form.price" ></md-input>
            <span class="md-error">There is an error</span>
        </md-field>

        <md-field :class="messageClass">
            <label>Описание</label>
            <md-textarea v-model="form.description"></md-textarea>
        </md-field>
        <md-button @click.native="createProduct">Отправить</md-button>
    </div>
</template>

<script>
    export default {
        name: 'ErrorsMessages',
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            form:{
                title:'',
                price:'',
                description:''
            },
            hasMessages: false
        }),
        computed: {
            messageClass () {
                return {
                    'md-invalid': this.hasMessages
                }
            }
        },
        methods: {
            createProduct(){

                let {title, description, price} = this.form;

                this.$store.dispatch('products/CREATE_PRODUCT', {title:title, description:description, price:price})
            }
        }
    }
</script>

<style lang="scss">
    .create_product {
        width: 40vh;
    }
</style>
