const fs = require('fs/promises')
const schemaTypeTemplate = require('./schemaTypeTemplate')
const reduxSliceTemplate = require('./reduxSliceTemplate')
const resolveRoot = require('../resolveRoot')

module.exports = async (layer, slice) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, slice, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath())
      await fs.mkdir(resolveModelPath('types'))
      await fs.mkdir(resolveModelPath('slices'))
      await fs.mkdir(resolveModelPath('selectors'))
      await fs.mkdir(resolveModelPath('services'))
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${slice}`, e)
    }
  }

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${slice}Slice.ts`),
        reduxSliceTemplate(slice)
      )
    } catch (e) {
      console.log('Не удалось создать редакс слайс', e)
    }
  }

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${slice}Schema.ts`),
        schemaTypeTemplate(slice)
      )
    } catch (e) {
      console.log('Не удалось создать тип схемы стейта', e)
    }
  }

  await createModelStructure()
  await createSchemaType()
  await createReduxSlice()
}
