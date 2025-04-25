import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Mine: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Mine</h1>
      </IonContent>
    </IonPage>
  );
};

export default Mine;
