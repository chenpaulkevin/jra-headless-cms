import escapeHTML from 'escape-html'
import Image from 'next/image'
import React, { Fragment, ReactNode } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

export const IS_BOLD = 1
export const IS_ITALIC = 1 << 1
export const IS_STRIKETHROUGH = 1 << 2
export const IS_UNDERLINE = 1 << 3
export const IS_CODE = 1 << 4
export const IS_SUBSCRIPT = 1 << 5
export const IS_SUPERSCRIPT = 1 << 6
export const IS_HIGHLIGHT = 1 << 7

interface Node {
  type: string
  text?: string
  format?: any | number | bigint
  value?: { url: string; alt: string }
  tag?: keyof JSX.IntrinsicElements
  listType?: string
  checked?: boolean
  children?: Node[]
  fields?: { linkType: string; url: string; newTab: boolean }
}

interface SerializeProps {
  children: Node[]
  customClassNames?: Record<string, string>
  parentNode?: Node
}

function generateTextAlign(node: Node): string {
  if (node.format === 'right') return 'text-right'
  if (node.format === 'center') return 'text-center'
  return ''
}

export default function serializeLexicalRichText({
  children,
  customClassNames,
  parentNode = { type: 'default' },
}: SerializeProps): ReactNode[] {
  return children
    ?.map((node, i) => {
      const classNames: Record<string, string> = {
        h1: 'my-6 title-clamp font-bold leading-tight',
        h2: 'my-5 text-2xl font-semibold leading-tight',
        h3: 'my-4 text-xl font-semibold',
        h4: 'my-3 text-lg font-bold',
        h5: 'my-2 text-lg font-semibold',
        h6: 'my-1 text-lg',
        p: 'text-base leading-loose my-8',
        ul: 'list-disc',
        ol: 'list-decimal',
        li: 'list-item',
        blockquote: 'font-bold text-lg text-gray-600',
        a: 'text-blue-500 underline',
      }

      if (node.type === 'text') {
        let text: ReactNode = node.text ? (
          <span className="" key={i}>
            {node.text}
          </span>
        ) : (
          <span className="opacity-0" key={i}>
            &nbsp;
          </span>
        )

        if (node.format & IS_BOLD) {
          text = <strong key={i}>{text}</strong>
        }

        if (node.format & IS_CODE) {
          text = (
            <code className="bg-blackPrimary text-white p-4 rounded-2xl" key={i}>
              {text}
            </code>
          )
        }

        if (node.format & IS_ITALIC) {
          text = <em key={i}>{text}</em>
        }

        if (node.format & IS_UNDERLINE) {
          text = (
            <span className="underline" key={i}>
              {text}
            </span>
          )
        }

        if (node.format & IS_STRIKETHROUGH) {
          text = (
            <span className="line-through" key={i}>
              {text}
            </span>
          )
        }

        return <Fragment key={i}>{text}</Fragment>
      }

      if (!node) {
        return null
      }

      if (node.type === 'upload' && node.value?.url) {
        return (
          <div
            className="relative w-full aspect-video my-16 flex justify-center items-center overflow-hidden rounded-3xl"
            key={i}
          >
            <Image src={node.value.url} fill alt={node.value.alt} priority />
          </div>
        )
      }

      if (node.type === 'heading' && node.tag) {
        return React.createElement(
          node.tag,
          {
            className: `${classNames[node.tag]} ${generateTextAlign(node)}`,
            key: i,
          },
          serializeLexicalRichText({ children: node.children || [] }),
        )
      }

      if (node.type === 'list') {
        const listClass =
          node.listType === 'check'
            ? `${classNames.ul} list-none`
            : `${classNames[node.listType === 'bullet' ? 'ul' : 'ol']}`
        const ListTag = node.listType === 'number' ? 'ol' : 'ul'
        return React.createElement(
          ListTag,
          { className: listClass, key: i },
          serializeLexicalRichText({
            children: node.children || [],
            parentNode: node,
          }),
        )
      }

      if (node.type === 'listitem') {
        const listItemClass = node.checked ? `${classNames.li} flex gap-1` : `${classNames.li}`
        const icon = node.checked ? (
          <MdCheckBox className="w-4 h-4 text-green-500" />
        ) : (
          <MdCheckBoxOutlineBlank className="w-4 h-4 text-green-500" />
        )

        return (
          <li className={listItemClass} key={i}>
            {node.checked !== undefined && <div>{icon}</div>}
            <div className={node.checked ? 'line-through' : ''}>
              {serializeLexicalRichText({ children: node.children || [] })}
            </div>
          </li>
        )
      }

      if (node.type === 'horizontalrule') {
        return (
          <div
            className="bg-lightGray h-[1.5px] w-full border-0 shadow-sm rounded-full my-4"
            key={i}
          ></div>
        )
      }

      switch (node.type) {
        case 'quote':
          return (
            <blockquote className={`${classNames.blockquote}`} key={i}>
              {serializeLexicalRichText({ children: node.children || [] })}
            </blockquote>
          )

        case 'link':
          return (
            <a
              className={`${classNames.a}`}
              href={escapeHTML(node.fields?.linkType === 'custom' ? node.fields.url : '')}
              target={node.fields?.newTab ? '_blank' : '_self'}
              key={i}
            >
              {serializeLexicalRichText({ children: node.children || [] })}
            </a>
          )

        case 'horizontalrule':
          return <hr key={i} className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        default:
          return (
            <div className={`${classNames.p} ${generateTextAlign(node)}`} key={i}>
              {serializeLexicalRichText({ children: node.children || [] })}
            </div>
          )
      }
    })
    .filter((node) => node !== null)
}
