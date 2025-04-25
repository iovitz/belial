import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Video: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Video</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Video</h1>
      </IonContent>
    </IonPage>
  );
};

export default Video;
