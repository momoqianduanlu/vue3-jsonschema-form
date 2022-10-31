import { defineComponent, reactive, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const src = require('./assets/logo.png')

export default defineComponent({
  setup() {
    const msg = ref('hello world')
    const state = reactive({
      name: 'aaa',
    })
    return () => {
      return (
        <div id="app">
          <img src={src} alt="Vue Logo" />
          <input v-model={state.name}></input>
          <HelloWorld msg={msg.value} name={state.name}></HelloWorld>
        </div>
      )
    }
  },
})
