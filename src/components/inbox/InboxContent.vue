<template>
    <div class="index-right-content">
        hello html id => {{ $route.params.id }}
        <p>
            {{title}}
            {{creater}}
            {{content}}
        </p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                creater: '',
                content: ''
            }
        },
        mounted: function() {
            var id = this.$route.params.id;
            this.init(id)
            console.log('mounted...' + id)
        },
        updated: function() {
            var id = this.$route.params.id;
            this.init(id)
            console.log('updated...' + id)
        },
        methods: {
            init: function(id) {
                if (id == 123) {
                    this.title ='哈哈哈'
                    this.creater = 'Rick.Xu'
                    this.content = 'xxxxxxxx'
                } else {
                    this.title ='呵呵呵'
                    this.creater = 'Ashley.Zhang'
                    this.content = 'zzzzzz'
                }
            }
        }
    }    
</script>

<style lang="scss" scoped>
    
</style>