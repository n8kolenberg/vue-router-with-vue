/**Routes.js is used in main.js and set up with VueRouter to be used for routing users within the app */

/** Everything loaded through imports at the top will always be loaded in your bundle whether you use them or not*/
// import User from './components/user/User.vue'
import Home from './components/Home.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
import Header from './components/Header.vue'

//The following syntax is to utilise lazy loading
//I.e. only loading the packages that are needed by the user WHEN they are needed
//Be prepared for some mindfu^&ery in terms of syntax
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    });
}


const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    });
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
}




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
            {
                path: ":id", component: UserDetail, props: true, name: 'userDetail', beforeEnter: (to, from, next) => {
                    console.log("beforeEach() Inside Route Setup: routes.js");
                    next();
                } 
        },
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



