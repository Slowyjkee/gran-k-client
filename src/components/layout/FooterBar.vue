<template>
    <section>
        <div class="footer-panel">
            <div class="footer-block">
                <div class="footer-logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="description-block">
                     <span>
                       GreenDay is an organic farm located in California. We offer healthy foods and products to our clients.
                    </span>
                </div>
                <div class="phone-block">
                    <span>
                        <md-icon>phone</md-icon>  89859220809
                    </span>
                </div>
                <div class="phone-block">
                    <span>
                        <md-icon>access_time</md-icon>  89859220809
                    </span>
                </div>
                <div class="location-block">
                    <md-icon>near_me</md-icon>
                    <span>
                         4730 Crystal Springs Dr, Los Angeles, CA 90027
                    </span>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "FooterBar"
    }
</script>

<style scoped lang="scss">

    .footer-panel {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background: #2b2a28;
        .footer-block {
            text-align: left;
            display: flex;
            width: 40vh;
            flex-direction: column;
            justify-content: flex-start;
            .description-block {
                border-bottom: 1px solid #2c3e50;
                padding: 10px 0;
            }
            .phone-block {
                padding: 10px 0;
            }
            .md-icon {
                margin-right: 10px;
            }
            span {
                color:#ffffff;
            }
            .location-block {
                display: flex;
                i {
                    color:#ffffff;
                }
            }
            .footer-logo {
                padding: 10px 0;
            }

            i {
                margin: 0;
            }
        }
    }
</style>
