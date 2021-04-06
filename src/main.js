import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './styles/style.css';

Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('#message_create_client_block').style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  window.scrollTo(0, 0);
});

document.querySelector('#message_create_client_block').addEventListener('click', () => {
  document.querySelector('#message_create_client_block').style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
});
