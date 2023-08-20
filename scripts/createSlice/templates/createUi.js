const fs = require('fs/promises')
const firstCharUpperCase = require('../firstCharUpperCase')
const componentTemplate = require('./componentTemplate')
const resolveRoot = require('../resolveRoot')

module.exports = async (layer, slice) => {
  const resolveUiPath = (...segments) => resolveRoot('src', layer, slice, 'ui', ...segments)

  const createUiDir = async () => {
    try {
      await fs.mkdir(resolveUiPath())
    } catch (e) {
      console.log('Не удалось создать папку ui')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(slice)
      await fs.mkdir(resolveUiPath(componentName))

      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName))

      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.module.scss`),
        ''
      )
    } catch (e) {
      console.log('Не удалось создать компонент')
    }
  }

  await createUiDir()
  await createComponent()
}
