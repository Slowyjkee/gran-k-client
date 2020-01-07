<template>
    <div class="card-expansion">
        <md-card>
            <md-card-media @click.native="showDialog = true">
                <md-dialog :md-active.sync="showDialog">
                    <img src="../assets/grass-on-golf-backgrounds.jpg" alt="People">
                </md-dialog>
                <img src="../assets/grass-on-golf-backgrounds.jpg" alt="People">
            </md-card-media>

            <md-card-header>
                <div class="md-title">{{title}}</div>
                <div class="md-subhead">{{subtitle}} рублей</div>
            </md-card-header>

            <md-card-expand>
                <md-card-actions md-alignment="space-between">
                    <div>
                        <md-button>Заказать</md-button>
                    </div>

                    <md-card-expand-trigger>
                        <md-button>Подробнее</md-button>
                    </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                    <md-card-content>
                        {{description}}
                    </md-card-content>
                </md-card-expand-content>
            </md-card-expand>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "card",
        data() {
            return {
                showDialog: false
            }
        },
        props: {
            title: String,
            price: Number,
            subtitle:String,
            description:String
        }
    }
</script>

<style scoped lang="scss">
    .card-expansion {
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>
