const firstCharUpperCase = require('../firstCharUpperCase')

module.exports = (slice) => {
  const typeName = `${firstCharUpperCase(slice)}Shema`

  return `import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ${typeName} from "../types/${slice}Shema"
  
const initialState: ${typeName} = {

};
    
export const ${slice}Slice = createSlice({
  name: '${slice}',
  initialState,
  reducers: {
      template: (state, action: PayloadAction<string>) => {}
  }
});

export const { actions: ${slice}Actions, reducer: ${slice}Reducer } = ${slice}Slice;`
}
