import React from 'react'
import { RadioGroup, Radio, Flex } from '@chakra-ui/react'
import { SetLanguageType, LanguageType, Language } from 'store'

const LanguageSelect = ({
  language,
  setLanguage,
}: {
  language: LanguageType
  setLanguage: SetLanguageType
}) => {
  return (
    <RadioGroup
      px={4}
      onChange={(e: Language) => {
        console.log(e)
        setLanguage(() => e)
      }}
      value={language}
    >
      <Flex direction="column" display="flex" flexWrap="wrap">
        <Radio value="non-sense">Non Sense</Radio>
        <Radio value="english">English</Radio>
        <Radio value="french">French</Radio>
      </Flex>
    </RadioGroup>
  )
}

export default LanguageSelect
