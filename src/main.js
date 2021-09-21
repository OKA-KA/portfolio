// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import App from './vue/App.vue';

Vue.config.productionTip = false;

// 外部アプリケーション用表示の読み込み
new Vue({
  render: (h) => h(App),
}).$mount('#app');
