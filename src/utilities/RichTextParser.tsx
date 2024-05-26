import serializeLexicalRichText from './serializeLexicalRichText'
import React from 'react'

interface Props {
  className?: string
  content: any
  customClassNames?: Record<string, string>
}

const RichTextParser: React.FC<Props> = ({ className, content, customClassNames }) => {
  if (!content?.root?.children) return null

  return (
    <div className={`${[className].filter(Boolean).join(' ')} richText text-blackPrimary`}>
      {serializeLexicalRichText({
        children: content.root.children,
        customClassNames,
      })}
    </div>
  )
}

export default RichTextParser
