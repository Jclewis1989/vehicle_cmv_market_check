import Home from './components/Home.vue';
import Admin from './components/Admin.vue';

export const routes = [
    { path: '/results', name: 'Home', component: Home },
    { path: '/admin', name: 'Admin', component: Admin}
]