import { useRouterBack } from '@/hooks/router'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { NavBar } from 'react-vant'

const NotFound: React.FC = () => {
  const { goBack } = useRouterBack()
  return (
    <IonPage>
      <IonHeader className="!shadow-none">
        <NavBar
          title="页面不存在"
          onClickLeft={goBack}
        />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NotFound</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>NotFound</h1>
      </IonContent>
    </IonPage>
  )
}

export default NotFound
