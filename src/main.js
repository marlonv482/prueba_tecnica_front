import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
createApp(App)
.use(store)
.component('EasyDataTable', Vue3EasyDataTable)
.mount('#app')
