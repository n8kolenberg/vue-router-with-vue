<template>
    <div>
        <h3>Edit the User</h3>
        <p>Notice the dynamic query params in the url</p>
        <p>They come from the dynamic query object in the UserDetail component</p>
        <h4>User Locale: {{$route.query.locale}}</h4>
        <h5>User has {{$route.query.q}} coins</h5>
    </div>
    
</template>