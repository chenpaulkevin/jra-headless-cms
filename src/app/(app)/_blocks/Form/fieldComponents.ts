// Import necessary interfaces and components
import { FC } from 'react'
import { Text, TextProps } from './Text'
import { Email, EmailProps } from './Email'
import { TextArea, TextAreaProps } from './Textarea'
import { Number, NumberProps } from './Number'
import { Select, SelectProps } from './Select'

// Define a type for the field components
type FieldComponentType = {
  [key: string]: any
}

export const fieldComponents: FieldComponentType = {
  text: Text,
  email: Email,
  select: Select,
  textarea: TextArea,
  number: Number,
}
