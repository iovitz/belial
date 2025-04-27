import { useIonRouter } from '@ionic/react'

export function useRouterBack() {
  const router = useIonRouter()
  const goBack = () => {
    if (router.canGoBack()) {
      router.goBack()
    }
  }
  return { goBack, router }
}
