import * as React from 'react'

export const useLocale = (initialValue: string = navigator.language) => {
  const [locale, setLocale] = React.useState(initialValue)

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocale(e.currentTarget.value)
    },
    [setLocale],
  )

  return [locale, handleChange] as const
}
