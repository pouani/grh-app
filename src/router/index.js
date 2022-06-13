import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "@/views/public/Layout.vue";
import Login from "@/views/auth/Login.vue";
const routes = [
    {
        path: "/",
        name: "public",
        component: PublicLayout
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;