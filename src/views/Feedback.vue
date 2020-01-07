<template>
    <section>
        <div class="feedback-section" :style="{ backgroundImage: 'url(' + require('../assets/feedback.png') + ')' }">
            <h1>Обратная связь</h1>
            <div class="form-block">
                <div class="name-block">
                    <md-field class="flex-field">
                        <label>Имя</label>
                        <md-input v-model="form.name"></md-input>
                    </md-field>

                    <md-field class="flex-field">
                        <label>Почта</label>
                        <md-input v-model="form.email" readonly></md-input>
                    </md-field>
                </div>

                <md-field :class="messageClass">
                    <label>Текст</label>
                    <md-textarea v-model="form.description" ></md-textarea>
                </md-field>
                <div class="button-block">
                    <md-button class="md-primary md-raised">
                        Отправить
                    </md-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Feedback",
        data() {
            return {
                form: {
                    name:'',
                    email:'',
                    description:''
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .feedback-section {
        height: 70vh;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
        display: flex;
        flex-direction: column;
        text-align: center;
        span {
            text-align: center;
        }
        .name-block {
            display: flex;
            justify-content: space-between;
            input {
                width: 40%;
            }
        }
        .form-block {
            align-self: flex-end;
            width: 70vh;
            margin-right: 10vh;
        }
        .flex-field {
            width: 40% !important;
        }
        .button-block {
            display: flex;
        }
    }
</style>
