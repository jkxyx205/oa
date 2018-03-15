<template>
    <div class="body">
        <left-menu></left-menu>
        <right-content></right-content>
    </div>
</template>

<script>
    import Menu from '@/components/Menu.vue'
    import Content from '@/components/Content.vue'

    export default {
        components: {
            leftMenu: Menu,
            rightContent: Content
        }
    }
</script>

<style lang="scss" scoped>
    div.body {
        height: calc(100% - 50px);
    }
</style>
