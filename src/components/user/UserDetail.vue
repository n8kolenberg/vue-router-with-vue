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
            :to="link">Edit</router-link>

        <router-link tag="button" class="btn btn-info" to="/user">Go to User overview</router-link>

    </div>
    
</template>

<script>
export default {
    data() {
        return {
            link: { 
                name: 'userEdit', 
                params: {id: this.$route.params.id}, 
                query: {locale: 'en', q: 100 },
                hash: '#data'
            }
        }
    },

    methods: {
        goToUsers() {
            this.$router.push({path: "/user"});
        }
    },
    beforeRouteEnter(to, from, next) {
        if(true/*user is authenticated e.g. user.authenticated()*/) {
            console.log("beforeEnter() coming from lifecycle hook beforeRouteEnter(), implemented on component UserDetail.vue");
            /*As long as we don't call next() here, the component you would access through the route leading to the component wouldn't go through
            That would also mean that you can't access any data in this component through e.g. this.link - the component is just not loaded yet 
            and therefore, there's no data :) */
            next();
            /* If you really needed to access link before entering this route, you'd have to do it as follows:
            next(vm => {
                vm.link;
            }) */
    } else {
        next(false);
    }
}
}
</script>
