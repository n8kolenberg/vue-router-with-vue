<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded with id of {{$route.params.id}}</p>
        <hr>
        <!-- unelegant way of route in the 'to' property <router-link tag="button" class="btn btn-info" :to="'/user/' + $route.params.id + '/edit'">Edit</router-link>-->
        <!-- Using named params in the 'to' property-->
        <!-- Using query params in the 'to' property to have them show up in the url-->

        <router-link 
            tag="button" 
            class="btn btn-info" 
            :to="{ name: 'userEdit', params: $route.params.id, query: {locale: 'en', q: 100 } }">Edit</router-link>
        <router-link tag="button" class="btn btn-info" to="/user">Go to User overview</router-link>

    </div>
    
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        goToUsers() {
            this.$router.push({path: "/user"});
        }
    }
}
</script>
