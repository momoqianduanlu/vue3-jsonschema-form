const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const localize = require('ajv-i18n')

const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv /*, {singleError: true} */)
addFormats(ajv)

// 自定义format
ajv.addFormat('test', (data) => {
  console.log('data')
  return data === 'sabo'
})

// 自定义关键字
ajv.addKeyword('test1', {
  // validate: (schema, data) => {
  //   console.log('schema', schema, 'data', data)
  //   return true
  // },

  // compile: (schema, parentSchema) => {
  //   console.log(schema, parentSchema)
  //   return () => true
  // },
  // // metaSchema的type定义了test1返回的schema的值(在这里test1的值是布尔)
  // metaSchema: {
  //   type: 'boolean',
  // },

  macro: (schema, parentSchema) => {
    console.log(schema, '---', parentSchema)
    return {
      minLength: 6,
    }
  },
})

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // minLength: 6,
      // format: 'email',
      format: 'test',
      // test1: true,
      errorMessage: '这是不对的',
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['name', 'age'],
}

const validate = ajv.compile(schema)

const data = {
  name: 'sabo@qq',
  age: 26,
  pet: ['lala'],
  isWorker: true,
}

const valid = validate(data)
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
