import { defineComponent } from 'vue'
// import StringField from './fields/StringField'
import StringField from './fields/StringField.vue'
// import NumberField from './fields/NumberField'
import NumberField from './fields/NumberField.vue'
import { FieldPropsDefine } from './types'
import { SchemaTypes } from './types'

export default defineComponent({
  name: 'SchemaFormItem',
  props: FieldPropsDefine,
  setup(props, ctx) {
    return () => {
      const { schema } = props
      const type = schema.type
      let Component: any

      // TODO: 如果type不存在我们需要去推断type

      if (type === SchemaTypes.STRING) {
        Component = StringField
      } else if (type === SchemaTypes.NUMBER) {
        Component = NumberField
      }
      return <Component {...props}></Component>
    }
  },
})
