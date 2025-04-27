import { VideoCardFlowColumn } from '@/components/video-card-flow/video-card-flow-column'
import { useRouterBack } from '@/hooks/router'
import { useVantListStatus } from '@/hooks/vant'
import { sleep } from '@/utils/sleep'
import { IonContent, IonHeader, IonPage } from '@ionic/react'
import { Button, Cell, List, NavBar, PullRefresh, SwipeCell } from 'react-vant'

interface LikeVideo {
  id: string
  cover: string
  title: string
  time: string
  playCount: number
}

const LikeVideos: React.FC = () => {
  const { goBack } = useRouterBack()
  const { finished, fetchListData, value } = useVantListStatus<LikeVideo>({
    immediate: true,
    fetchFn: async (page: number) => {
      const data = []
      await sleep(1000)
      for (let i = 0; i < 30; i++) {
        data.push({
          id: `${page * 30 + i + 1}`,
          cover: 'https://fakeimg.pl/1920x1080/2775b6/',
          title: `翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了${i}`,
          time: '2021-09-01',
          playCount: 100,
        })
      }
      return {
        data,
        hasMore: true,
        total: 100,
      }
    },
  })
  return (
    <IonPage>
      <IonHeader className="!shadow-none">
        <NavBar
          title="视频收藏"
          onClickLeft={goBack}
        />
      </IonHeader>
      <IonContent fullscreen>
        <PullRefresh
          successText="刷新成功"
          onRefresh={() => fetchListData(true)}
          className="h-full !overflow-y-scroll"
          pullDistance={100}
        >
          <List finished={finished} offset={100} onLoad={() => fetchListData()}>
            {
              value.map((item) => {
                return (
                  <SwipeCell
                    key={item.id}
                    rightAction={
                      <Button square type="danger" className="!h-full w-24" text="取消收藏" />
                    }
                  >
                    <Cell title={<VideoCardFlowColumn id={item.id} cover={item.cover} title={item.title} time={item.time} playCount={item.playCount} />}>
                    </Cell>
                  </SwipeCell>
                )
              })
            }
          </List>
        </PullRefresh>
      </IonContent>
    </IonPage>
  )
}

export default LikeVideos
