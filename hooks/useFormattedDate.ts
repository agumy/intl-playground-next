import * as React from 'react'
import { useOption } from './useOption'
import { useLocale } from './useLocale'

export const useFormattedDate = () => {
  const [options] = useOption()
  const [locale] = useLocale()

  const formattedDate = React.useMemo(() => {
    let filteredOptions = {}
    for (const [key, val] of Object.entries(options)) {
      if (val !== 'none') {
        filteredOptions = {
          ...filteredOptions,
          [key]: val,
        }
      }
    }

    const formatter = new Intl.DateTimeFormat(locale, filteredOptions)

    return formatter.format(new Date())
  }, [locale, options])

  return formattedDate
}
