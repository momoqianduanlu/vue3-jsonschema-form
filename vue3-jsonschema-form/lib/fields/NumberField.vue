<template>
  <input type="number" :value="value" @input="handleOnChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../types'
export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props, ctx) {
    const handleOnChange = (v: any) => {
      console.log('v', v.target.value)
      props.onChange(Number(v.target.value))
    }
    return {
      handleOnChange,
    }
  },
})
</script>

<style></style>
