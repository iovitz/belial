import VideoIntroduction from '@/components/video-introduction'
import VideoPlayer from '@/components/video-player'
import { useRouterBack } from '@/hooks/router'
import { IonContent, IonHeader, IonPage } from '@ionic/react'
import { Button, Cell, Input, NavBar, Tabs } from 'react-vant'

const Play: React.FC = () => {
  const { goBack } = useRouterBack()
  return (
    <IonPage>
      <IonHeader className="!shadow-none">
        <NavBar
          title="视频标题"
          onClickLeft={goBack}
        />
      </IonHeader>
      <IonContent fullscreen>
        <VideoPlayer type="video/mp4" url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" />
        <Cell>
          <Input
            suffix={<Button size="small" type="primary">^_^</Button>}
            placeholder="发个弹幕^_^"
          />
        </Cell>
        <Tabs active="c">
          <Tabs.TabPane key="1" title="简介">
            <VideoIntroduction avatar="https://fakeimg.pl/100x100/2775b6/" description="发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发哇额发发我额发我额发我额发我额发" title="搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机搞什么飞机!!!" time={Date.now()} comment={0} watch={0} />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" title="评论(200)">
            内容
          </Tabs.TabPane>
        </Tabs>
      </IonContent>
    </IonPage>
  )
}

export default Play
