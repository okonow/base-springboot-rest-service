import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import img from "../../assets/cloud.png";
import { sendGetRequest, sendGetRequestWithId } from "../requests/get";
import { useEffect, useState } from "react";

// Define an interface for the menu items
interface MenuItem {
  key: number;
  label: string;
  onClick?: () => void;
}

interface User {
  id: string;
  title: string;
  description: string;
  IsFinished: boolean;
}

export const Citizens = () => {
  const navigate = useNavigate();
  const gotoMain = () => navigate('/');
  const [users, setUsers] = useState<User[]>([]); 

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await sendGetRequest("https://localhost:8081/citizen");
        console.log('Ответ сервера:', response);
        setUsers(response);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };
  
    // Вызов асинхронной функции для загрузки данных
    getUsers();
  }, []);

  const getUser = async (id: string) => {                                                                  
    try {
      const response = await sendGetRequestWithId("https://localhost:8081/citizen", id);
      console.log('Ответ сервера:', response);
      setUsers(response);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  // Use the MenuItem interface when creating the items array
  const items: MenuItem[] = new Array(2).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));
  
  items[0].label = "Main";
  items[0].onClick = gotoMain;  // Now this is allowed
  items[1].label = "Citizens";
  // You can add onClick for the second item here if needed

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', height: 70 }}>
        <div className="demo-logo" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}>
          <img src={img} alt="Логотип" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0, height: '100%'}}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            marginTop: 24,
            backgroundColor: colorBgContainer,
            minHeight: "75vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}