import { CharacterCounter } from './CustomDescription'

const CharacterCounterWrapper = (props: any) => {
  const maxLength = props // Define your maxLength here

  return <CharacterCounter {...props} maxLength={maxLength} />
}

export default CharacterCounterWrapper
