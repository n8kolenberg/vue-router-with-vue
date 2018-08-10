<template>
    <ul class="nav nav-pills">
<!--Confusing mindf&ckery follows -->
<!-- We want to get rid of li and a tag, so we use router-link but give it a tag property to allow it to show up as li in DOM -->
<!-- Then for some freakish reason, we still add an anchor inside of it that contains the word Home and User-->
<!-- We use router-link instead of anchor as anchor would make requests to the server everytime you click on it-->

<!--Also, by default, active class will stay active because of the to="/" property and all other links starting with "/" as well -->
<!-- We therefore add exact property so it looks for the exact match and only keeps the element active when exact match is made-->
        <router-link class="nav-item" to="/" tag="li" active-class="active" exact><a>Home</a></router-link> 
       <!-- <router-link class="nav-item" to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link> -->
       <!-- <router-link class="nav-item" to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link> -->

        <router-link class="nav-item" to="/user/" tag="li" active-class="active"><a>User</a></router-link>


    </ul>
</template>