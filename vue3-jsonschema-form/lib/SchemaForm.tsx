import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Schema } from '../lib/types'
import SchemaFormItem from './SchemaFormItem'

export default defineComponent({
  name: 'SchemaForm',
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
    // onChange我们不直接向组件传递，因为在当前组件中我们可能会对数据做一些处理，所以在当前情况下我们优先用一个函数去接收，然后再想组件传递，
    const handleOnChange = (v: any) => {
      props.onChange(v)
    }
    return () => {
      const { schema, value } = props
      return (
        <SchemaFormItem
          schema={schema}
          value={value}
          onChange={handleOnChange}
        ></SchemaFormItem>
      )
    }
  },
})
