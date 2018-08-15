<template>
    <div>
        <h3>Edit the User</h3>
        <p>Notice the dynamic query params in the url</p>
        <p>They come from the dynamic query object in the UserDetail component</p>
        <h4>User Locale: {{$route.query.locale}}</h4>
        <h5>User has {{$route.query.q}} coins</h5>
        <hr>    
        <button class="btn btn-warning" @click="confirmed = true">Confirm Edits</button>
        <hr>
        <br>
        <h2>Edits confirmed: {{confirmed}}</h2>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            confirmed: false,

        }
    },
    /*Unlike beforeRouteEnter, which you could put in the global main.js
    you can only add beforeRouteLeave to the component as that's the location you're leaving */
    beforeRouteLeave(to, from, next) {
        /***Unlike beforeRouteEnter, which didn't allow you to access the component's local variables
         * with beforeRouteLeave, you do have access as the user is already there
         * That's why we can use this.confirmed in this case
         */
        if(this.confirmed) {
            console.log("beforeRouteLeave() lifecycle hook in UserEdit.vue");
            next();
        } else {
            if(confirm("Are you sure?")) {
                next();
            } else {
                next(false);
        }
    } 
    
}//End beforeRouteLeave

}
</script>
