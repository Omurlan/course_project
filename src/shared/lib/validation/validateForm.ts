interface NumberField {
  max: number
  min: number
}

export type ValidationForm<Fields extends string = string> = Partial<Record<Fields, boolean>>

export interface ValidationSchema<Fields extends string = string> {
  pattern?: RegExp
  number?: NumberField
  value: string | number | undefined
  field: Fields
}

export const validateForm = <Fields extends string = string>(form: ValidationSchema[]) => {
  const errors: ValidationForm<Fields> = {}

  for (const elem of form) {
    if (!elem.value) {
      errors[elem.field as Fields] = true
      continue
    }

    if (elem.number) {
      if (!(Number(elem.value) >= elem.number.min) || !(Number(elem.value) <= elem.number.max)) {
        errors[elem.field as Fields] = true
      }
      continue
    }

    if (elem.pattern && !elem.pattern.test(String(elem.value) ?? '')) {
      console.log(elem.field)
      errors[elem.field as Fields] = true
    }
  }

  return errors
}
