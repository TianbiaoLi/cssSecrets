import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { InstallCodemirro } from "codemirror-editor-vue3" 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(InstallCodemirro) 
app.use(ElementPlus)

app.mount('#app')
