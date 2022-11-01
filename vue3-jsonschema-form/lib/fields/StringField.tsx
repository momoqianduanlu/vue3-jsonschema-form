import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'StringField',
  props: FieldPropsDefine,
  setup(props, ctx) {
    return () => {
      return <div>111</div>
    }
  },
})
