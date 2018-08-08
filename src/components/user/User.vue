<template>
    <div>
        <h1>The User Page</h1>
        <p>Dynamically loaded id from the URL through dynamic property defined in routes.js: </p>
        <h3 style="color: darkred;"><b>{{id}}</b></h3>
        <br>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go Home</button>
    </div>
    

</template>

<script>
export default {
    props: {
        /*Basically, the component only loads once and so your {{id}} in the template will remain the first query parameter value that was passed in the url. 
        This is the case, even if you switch to example /user/2, when coming from /user/1 - {{id}} will remain 1
        Therefore we have to define props: true in the routes and bind the :id prop to the component. In this case, when we switch from user 1 to user 2 
        the {{id}} in the template changes as well.
        */
        id: {
            type: String,
            default: "CoolUser1"
        }
    },
    data() {
        return {
            id : this.$route.params.id /*the id param comes from the :id that we defined as a dynamic url parameter in routes.js for the user path */
        }
    },
    //watch: {
        /*Get ready for some mindf&ckery again
        Basically, the component only loads once and so your {{id}} in the template will remain the first query parameter value that was passed in the url. 
        This is the case, even if you switch to example /user/2, when coming from /user/1 - {{id}} will remain 1
        You therefore have to 'watch' the $route for changes, and when it does, you have to reset the id parameter to the 'to' property that gets passed to the $route function*/
      //  '$route'(to, from) {
        //    this.id = to.params.id;
        //}
//},
    methods: {
        navigateToHome() {
            //The following is the way we go to the Home route
            this.$router.push({path: "/"}); //We want to push it on the stack of existing routes so that we can use the back and forward browser buttons
        }
    }
}
</script>
