import { IonContent, IonHeader, IonPage } from '@ionic/react'
import { useEffect, useState } from 'react'
import { Cell, Flex, List, NavBar, PullRefresh } from 'react-vant'
import { VideoCardFlowColumn } from '../../components/video-card-flow/video-card-flow-column'
import { useRouterBack } from '@/hooks/router'
import { useLogger } from '@/hooks/logger'

interface LikeVideo {
  id: string
  cover: string
  title: string
  time: string
  playCount: number
}

const MyVideos: React.FC = () => {
  const { goBack } = useRouterBack()
  const logger = useLogger('MyVideos')
  const [page, setPage] = useState(0)

  const [finished] = useState(false)
  const [loading, setLoading] = useState(false)

  const [myVideoList, setMyVideoList] = useState<LikeVideo[]>([])
  const fetchMyVideos = async () => {
    if (loading) {
      return
    }
    logger.info('拉取数据')
    setLoading(true)
    const newData: LikeVideo[] = []
    await new Promise(res => setTimeout(res, 1000))
    for (let i = 0; i < 10; i++) {
      newData.push({
        id: `${page * 10 + i + 1}`,
        cover: 'https://fakeimg.pl/1920x1080/2775b6/',
        title: `翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了翻山渡河钻雨林，这趟拍摄南美毒枭遭老罪了${i}`,
        time: '2021-09-01',
        playCount: 100,
      })
    }
    setPage(page + 1)
    setMyVideoList([...myVideoList, ...newData])
    setLoading(false)
  }

  useEffect(() => {
    fetchMyVideos()
  }, [])

  return (
    <IonPage>
      <IonHeader className="!shadow-none">
        <NavBar
          title="我的视频"
          onClickLeft={goBack}
        />
      </IonHeader>
      <IonContent fullscreen>
        <PullRefresh
          successText="刷新成功"
          onRefresh={() => fetchMyVideos()}
          className="h-full !overflow-y-scroll"
          pullDistance={100}
        >
          <List finished={finished} loadingText="加载。。。" offset={100} onLoad={() => fetchMyVideos()}>
            {
              myVideoList.map((item) => {
                return (
                  <Cell
                    key={item.id}
                    title={(
                      <>

                        <VideoCardFlowColumn id={item.id} title={item.title} cover={item.cover} playCount={item.playCount} time={item.time} />

                        <Flex direction="row-reverse">
                          <Flex.Item span={8} className="text-center">修改</Flex.Item>
                          <Flex.Item span={8} className="text-center">视频</Flex.Item>
                          <Flex.Item span={8} className="text-center">刪除</Flex.Item>
                        </Flex>
                      </>
                    )}
                  >
                  </Cell>
                )
              })
            }
          </List>
        </PullRefresh>
      </IonContent>
    </IonPage>
  )
}

export default MyVideos
