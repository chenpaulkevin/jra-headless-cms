import RichTextParser from '@/utilities/RichTextParser'
import React from 'react'
import { SimpleRichTextProps } from './types'

export const SimpleRichText: React.FC<SimpleRichTextProps & { id?: string }> = (props) => {
  const { body } = props
  return (
    <div className="container py-12">
      <RichTextParser content={body}></RichTextParser>
    </div>
  )
}
