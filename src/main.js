import { createApp } from 'vue'
import App from './App'
import components from '@/Components/UI';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
    })

app.mount('#app')
