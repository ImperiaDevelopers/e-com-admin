export default {
    path:'/:pathMatch(.*)*',
    name:'notfound',
    component: ()=>import("../pages/not-found/NotFound.vue")
}