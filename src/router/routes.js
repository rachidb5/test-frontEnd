import Main from '@/views/Main.vue'
import User from '@/views/User.vue'
import EditUser from '@/views/EditUser.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/usuario',
        name: 'Usuario',
        component: User,
    },
    {
        path: '/usuario/:id',
        name: 'EditarUsuario',
        component:EditUser,
    },
]

export default routes