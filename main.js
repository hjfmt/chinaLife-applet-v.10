import Vue from 'vue'
import App from './App'
// 引入uview-ui
import uView from "uview-ui";
Vue.use(uView);

// 引入pdfh5代码
import Pdfh5 from "pdfh5"
import "pdfh5/css/pdfh5.css"
// 引入common.js
import common from "static/common/common.js"

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
