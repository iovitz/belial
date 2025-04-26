import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { LikeO, StarO, TvO, UnderwayO, VideoO } from '@react-vant/icons';
import { Link } from 'react-router-dom';
import { Button, Cell, CellGroup, Image, NavBar, Typography } from 'react-vant';

const Avatar = () => <div className="flex">
  <Image src="https://fakeimg.pl/100x100/2775b6/" className='flex-shrink-0' round height="80" width="80" />
  <div className="flex-1 ml-3 flex flex-col justify-center min-w-0">
    <h3 className="font-bold text-lg">
      飞翔的小鸟
    </h3>
    <Typography.Text className="text-sm" ellipsis={{
      rows: 1,
    }}>
      这个人很懒这个人很懒这个人很懒这个人很这个人很懒这个人很懒这个人很懒这个人很这个人很懒这个人很懒这个人很懒这个人很
    </Typography.Text>
  </div>
</div>

const Mine: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBar
          title="我的"
          leftArrow={false}
        />
      </IonHeader>
      <IonContent fullscreen>

        <CellGroup>
          <Cell clickable title={<Avatar />} titleClass='w-full'>
          </Cell>
        </CellGroup>
        <Cell.Group title='系统功能'>

          <Link to="/my-videos">
            <Cell isLink title={
              <div className="flex items-center h-full">
                <TvO fontSize={16} className="mr-1" />
                我的视频
              </div>
            } />
          </Link>
          <Link to="/my-video">
            <Cell isLink title={
              <div className="flex items-center h-full">
                <StarO fontSize={16} className="mr-1" />
                收藏
              </div>
            } />
          </Link>
          <Link to="/my-video">
            <Cell isLink title={
              <div className="flex items-center h-full">
                <LikeO fontSize={16} className="mr-1" />
                关注
              </div>
            } />
          </Link>
          <Link to="/dashboard/users/1">
            <Cell isLink title={
              <div className="flex items-center h-full">
                <UnderwayO fontSize={16} className="mr-1" />
                历史记录
              </div>
            } />
          </Link>

        </Cell.Group>
      </IonContent>
    </IonPage>
  );
};

export default Mine;
