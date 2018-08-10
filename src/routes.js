/**Routes.js is used in main.js and set up with VueRouter to be used for routing users within the app */


import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Header from './components/Header.vue'

export const routes = [
    
    //{   //Each route needs a path
        //path: "/user/:id" /* example.com/user/10. By using :id, we can use a dynamic id and refer to it as id in our code */,
        //component: User /* what component do we want to load when we visit this path */,
        //props: true /*This allows us to bind the :id prop to the component and allows us to dynamically change the url and have the id also change in the template of the component if we use it*/
    //},
    { 
        path: "", components: 
        {
            default: Home,
            'header-top': Header
        }, 
        name: "Home" 
    },
    
    { 
        path: "/user", components: //Components is an object
        { //And it allows us to define named router views which allow us to load the components wherever we want - see App.vue for the implementation
            default: User, 
            'header-top': Header, 
            'header-bottom': Header
        }, 
        props: true, 
    /*Child components of User ->*/
        children: [
            {path: ""/*This will be appended to /user/ */, component: UserStart},
            {path: ":id", component: UserDetail},
            {path: ":id/edit", component: UserEdit, name: 'userEdit' /*Named Routes*/}
        ]
    },
    {   //This is how you redirect users
        path: "/redirect-me",
        redirect: "/user"
        //redirect: {name: 'userEdit'}
    },
    {   //Catch all route
        path: "*",
        redirect: "/"
    }
];



