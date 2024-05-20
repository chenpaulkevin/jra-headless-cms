import type { Page } from '../../../../../payload-types'

export type CenteredTextProps = Extract<Page['layout'], { blockType: 'centeredText' }>
