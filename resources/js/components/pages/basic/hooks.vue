<template>
    <div>
        hooks
        <p ref="myref">My name {{name}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Elmeddin'
        }
    },

    created(){
        console.log("data available but not html", this.name);
    },

    beforeCreate(){
        console.log(this.name);
    },

    mounted(){
        console.log(this.$refs.myref);
    }
}
</script>