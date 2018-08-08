import User from './components/user/User.vue'
import Home from './components/Home.vue'

export const routes = [
    
    {   //Each route needs a path
        path: "/user/:id" /*example.com/user/10. By using :id, we can use a dynamic id and refer to it as id in our code */,
        component: User /*what component do we want to load when we visit this path */,
        props: true //This allows us to bind the :id prop to the component and allows us to dynamically change the url and have the id also change in the template of the component if we use it
    },
    { path: "", component: Home }
];



