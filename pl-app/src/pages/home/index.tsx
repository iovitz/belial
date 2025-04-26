import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useSyncExternalStore } from 'react';
import { useAsyncFn } from 'react-use';
import { Button, NavBar, PullRefresh, Search } from 'react-vant';
import { HomeBanner } from './home-banner';
import VideoCardFlowRow from '../../components/video-card-flow/video-card-flow-row';


const Home: React.FC = () => {
  const [searchContent, setSearchContent] = useState("")

  const [{ loading }, doFetch] = useAsyncFn(async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  });

  return (
    <IonPage>
      <IonHeader>
        <Search value={searchContent} onChange={setSearchContent} clearable placeholder="请输入搜索关键词" />
      </IonHeader>
      <IonContent fullscreen>
        <PullRefresh
          successText='刷新成功'
          onRefresh={() => doFetch()}
          disabled={loading}
          className='h-full !overflow-y-scroll'
          pullDistance={100}
        >
          <HomeBanner />
          <VideoCardFlowRow />
        </PullRefresh>
      </IonContent>
    </IonPage>
  );
};

export default Home;
