<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class="list-group-item" to="/user/1" tag="li" style="cursor: pointer"><a>User 1</a></router-link>
            <router-link class="list-group-item" to="/user/2" tag="li" style="cursor: pointer"><a>User 2</a></router-link>
            <router-link class="list-group-item" to="/user/3" tag="li" style="cursor: pointer"><a>User 3</a></router-link>
        </ul>
    </div>
</template>