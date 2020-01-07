<template>
    <div class="page-container md-layout-column">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Админ панель</span>

        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">Гран-к</span>
            </md-toolbar>

            <md-list>
                <router-link to="/admin/create">
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Добавление</span>
                    </md-list-item>
                </router-link>


                <router-link to="/admin/delete">
                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Удаление</span>
                    </md-list-item>
                </router-link>

            </md-list>
        </md-drawer>


        <md-content>
            <router-view />
        </md-content>
    </div>
</template>

<script>
    export default {
        name: 'Admin',
        data: () => ({
            showNavigation: false,
            showSidepanel: false
        })
    }
</script>

<style lang="scss" scoped>
    .page-container {
        height: 100vh;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .md-content {
        padding: 16px;
    }
</style>
