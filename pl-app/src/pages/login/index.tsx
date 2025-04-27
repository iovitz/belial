import { useRouterBack } from '@/hooks/router'
import { IonContent, IonHeader, IonPage } from '@ionic/react'
import { Button, Form, Input, NavBar } from 'react-vant'

const LoginOrRegister: React.FC = () => {
  const { goBack } = useRouterBack()
  const [form] = Form.useForm()

  const onFinish = (values: unknown) => {
    console.error(values)
  }

  return (
    <IonPage>
      <IonHeader className="!shadow-none">
        <NavBar
          title="登录"
          onClickLeft={goBack}
          rightText={<Button size="small">注册</Button>}
        />
      </IonHeader>
      <IonContent fullscreen>
        <Form
          form={form}
          onFinish={onFinish}
          footer={(
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          )}
        >
          <Form.Item
            rules={[{ required: true, message: '请填写用户名' }]}
            name="username"
            label="用户名"
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写密码' }]}
            name="password"
            label="密码"
          >
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写密码' }]}
            name="repeat"
            label="重复密码"
          >
            <Input type="password" placeholder="请重复密码" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请输入验证码' }]}
            name="code"
            label="验证码"
            suffix={(
              <Button size="small" type="primary">
                ABCD
              </Button>
            )}
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>
        </Form>
      </IonContent>
    </IonPage>
  )
}

export default LoginOrRegister
