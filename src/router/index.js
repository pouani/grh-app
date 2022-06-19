import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "@/views/public/Layout.vue";

import * as Admin from '@/views/admin';

import Login from "@/views/auth/Login.vue";
const routes = [
    {
        path: "/",
        name: "public",
        component: PublicLayout
    },
    {
        path: "/admin",
        name: "public",
        component: Admin.AdminLayout,
        children: [
            {path: "dashboard", name: "dashboard", component: Admin.Dashboard},
            {path: "users/index", component: Admin.userIndex},
            {path: "users/edit/:id", component: Admin.userEdit},
            {path: "users/add", component: Admin.userAdd},

            {path: "docs/index", component: Admin.fileIndex},
            {path: "docs/edit/:id", component: Admin.fileEdit},
            {path: "docs/add", component: Admin.fileAdd}
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/:pathMatch(.*)", redirect: "/"
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;