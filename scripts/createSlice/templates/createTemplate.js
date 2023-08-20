const fs = require('fs/promises')
const createModel = require('./createModel')
const resolveRoot = require('../resolveRoot')
const createUi = require('./createUi')
const firstCharUpperCase = require('../firstCharUpperCase')
const createPublicApi = require('./createPublicApi')

module.exports = async (layer, slice) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, firstCharUpperCase(slice)))
  } catch (e) {
    console.log(`Не удалось создать директорию для слайса ${slice}`)
  }

  await createModel(layer, slice)
  await createUi(layer, slice)
  await createPublicApi(layer, slice)
}
