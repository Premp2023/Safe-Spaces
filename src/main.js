import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Searchbar from './Searchbar.vue'
import Sidebar from './Sidebar.vue'
import router from './router/router';
import Complaint from './views/Complaint.vue'
import Footer from './Footer.vue'

const app = createApp(App)
app.use(router);
app.component('Sidebar', Sidebar)
app.component('Searchbar', Searchbar)
app.component('Complaint', Complaint)
app.component('Footer', Footer)
app.mount('#app')
