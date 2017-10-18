<template>
    <v-app>
        <main>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </main>
    </v-app>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss"></style>