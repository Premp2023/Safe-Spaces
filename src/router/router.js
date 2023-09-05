import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ReportDetails from '../views/ReportDetails.vue';
import Subpage from '../views/Subpage.vue';
import Complaint from '../views/Complaint.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
        path:'/report-details',
        name:'Report Details',
        component: ReportDetails
    },
    {
        path:'/subpage',
        name:'Send to Subpage',
        component: Subpage
    },
    {
      path:'/complaint',
      name:'Complaint',
      component: Complaint
  },
  ]
});

export default router;
