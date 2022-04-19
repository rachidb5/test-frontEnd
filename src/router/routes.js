import Main from '@/views/Main.vue'
import User from '@/views/User.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/usuario',
        name: '',
        component: User,
    },
]

export default routes