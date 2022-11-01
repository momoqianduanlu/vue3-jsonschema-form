import { defineComponent, PropType } from 'vue'
import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
import { Schema, SchemaTypes } from './types'

export default defineComponent({
  name: 'SchemaFormItem',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
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
