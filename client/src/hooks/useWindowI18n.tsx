import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useGlobalI18n() {
  const { t } = useTranslation()
  useEffect(() => {
    if (window.t !== t) {
      window.t = t
    }
    return () => {
      console.error('App Unmount')
    }
  }, [])
  return t
}
