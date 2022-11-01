import { PropType } from 'vue'

export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean',
}

export interface VueJsonSchemaConfig {
  title?: string
  descrription?: string
  component?: string
  options?: {
    [key: string]: any
  }
  withFormItem?: boolean
  widget?: 'checkbox' | 'textarea' | 'select' | 'radio' | 'range' | string
  items?: UISchema | UISchema[]
  propertiesOrder?: string[]
  controls?: {
    sortable?: boolean
    removeable?: boolean
    addable?: boolean
  }
}

export interface UISchema extends VueJsonSchemaConfig {
  properties?: {
    [property: string]: UISchema
  }
}

type SchemaRef = { $ref: string }

export interface Schema {
  type?: SchemaTypes | string
  const?: any
  format?: string

  title?: string
  default?: any

  properties?: {
    [key: string]: Schema | { $ref: string }
  }
  items?: Schema | Schema[] | SchemaRef
  uniqueItems?: any
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  anyOf?: Schema[]
  allOf?: Schema[]
  vjsf?: VueJsonSchemaConfig
  required?: string[]
  enum?: any[]
  enumNames?: any[]
  enumKeyValue?: any[]
  additionalProperties?: any
  additionalItems?: Schema

  minLength?: number
  maxLength?: number
  minimun?: number
  maximum?: number
  multipleOf?: number
  exclusiveMaximum?: number
  exclusiveMinimum?: number
}

// export interface Schema {
//   type?: SchemaTypes | string
//   const?: any
//   format?: string

//   title?: string
//   default?: any

//   properties?: {
//     [key: string]: Schema | { $ref: string }
//   }
//   items?: Schema | Schema[] | SchemaRef
//   dependencies?: {
//     [key: string]: string[] | Schema | SchemaRef
//   }
//   oneOf?: Schema[]
//   // vjsf?: VueJsonSchemaConfig
//   required?: string[]
//   enum?: any[]
//   enumKeyValue?: any[]
//   additionalProperties?: any
//   additionalItems?: Schema

//   minLength?: number
//   maxLength?: number
//   minimun?: number
//   maximum?: number
//   multipleOf?: number
//   exclusiveMaximum?: number
//   exclusiveMinimum?: number
// }

// export interface UISchemaNest {
//   [property: string]: UISchema
// }

// 抽离公共的props定义
export const FieldPropsDefine = {
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
} as const
