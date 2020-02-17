import Vue from 'vue';
import {
	MdButton, MdContent, MdTabs, MdMenu, MdList, MdDialog, MdCard,
} from 'vue-material/dist/components';
import App from './App.vue';
import store from './store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdMenu);
Vue.use(MdList);
Vue.use(MdCard);


new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
