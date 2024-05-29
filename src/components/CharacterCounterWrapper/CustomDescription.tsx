'use client'

import { FieldDescriptionProps } from 'payload/types'
import { FieldDescription } from '@payloadcms/ui/forms/FieldDescription'
import { useFieldProps } from '@payloadcms/ui/forms/FieldPropsProvider'
import { useFormFields } from '@payloadcms/ui/forms/Form'

// Extend the existing FieldDescriptionProps to include maxLength
interface CustomFieldDescriptionProps extends FieldDescriptionProps {
  maxLength: number
}

export function CharacterCounter(props: CustomFieldDescriptionProps) {
  const { path } = useFieldProps()
  const { value } = useFormFields(([fields]) => fields[path])
  const { maxLength } = props // Destructure maxLength prop

  const description = `${
    typeof value === 'string' ? maxLength - value.length : maxLength
  } characters left (field: ${path})`

  return <FieldDescription {...props} description={description} />
}
