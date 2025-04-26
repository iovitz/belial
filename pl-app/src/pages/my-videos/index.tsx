import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import clsx from 'clsx';
import { useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { Button, NavBar, PullRefresh, Search } from 'react-vant';
import { Toast, } from 'react-vant'
import VideoCardFlowRow from '../../components/video-card-flow/video-card-flow-row';


const MyVideos: React.FC = () => {
  const [searchContent, setSearchContent] = useState("")

  const [{ loading }, doFetch] = useAsyncFn(async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  });

  return (
    <IonPage>
      <IonHeader>
        <NavBar
          title="我的视频"
          leftArrow={false}
        />
      </IonHeader>
      <IonContent fullscreen>
        <PullRefresh
          successText='刷新成功'
          onRefresh={() => doFetch()}
          disabled={loading}
          className='h-full !overflow-y-scroll'
          pullDistance={100}
        >
          <VideoCardFlowRow />
        </PullRefresh>
      </IonContent>
    </IonPage>
  );
};

export default MyVideos;
