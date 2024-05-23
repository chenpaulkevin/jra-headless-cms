import type { Page } from '../../../../../payload-types'
export type HeaderAndDescriptionProps = Extract<
  Page['layout'],
  { blockType: 'headerAndDescription' }
>
