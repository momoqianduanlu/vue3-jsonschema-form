<template>
  <input type="text" :value="value" @input="handleOnChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../types'
export default defineComponent({
  name: 'StringField',
  props: FieldPropsDefine,
  setup(props, ctx) {
    const handleOnChange = (v: any) => {
      console.log('v', v.target.value)
      props.onChange(v.target.value)
    }
    return {
      handleOnChange,
    }
  },
})
</script>

<style></style>
