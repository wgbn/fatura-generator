import { createRouter, createWebHashHistory } from "vue-router"
import FormView from '@/views/FormView'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), // createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "form",
            component: FormView,
        },
        {
            path: "/neoenergia",
            name: "neoenergia",
            component: () => import("@/views/NeoenergiaView.vue"),
        },
    ],
})

export default router
