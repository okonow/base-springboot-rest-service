import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import img from "../../assets/cloud.png";
import { useNavigate } from 'react-router-dom';
import { Citizens } from '../Citizens/Citizens';
import {MonthGraph, YearGraph, AgeGraph } from "./tabs"
import '@mantine/charts/styles.css';
import { sendGetRequest, sendGetRequestWithId } from '../requests/get';

const { Header, Content, Footer } = Layout;

interface MenuItem {
  key: number;
  label: string;
  onClick?: () => void;
}



  


export const Main = () => {

    const items: MenuItem[] = new Array(2).fill(null).map((_, index) => ({
      key: index + 1,
      label: `nav ${index + 1}`,
    }));

    
    const navigate = useNavigate();
    
    const gotoCitizens = () => navigate('/citizens');

    items[0].label = "Main";
    items[1].label = "Citizens";
    items[1].onClick = gotoCitizens;

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    

      const [activeTab, setActiveTab] = useState('month');

      



    const renderComponent = () => {
    switch (activeTab) {
      case 'month':
        return <MonthGraph />;
      case 'year':
        return <YearGraph />;
      case 'age':
        return <AgeGraph />;
      default:
        return <MonthGraph />;
    }
  };


    return <>
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', height: 70,}}>
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
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0, height: '100%'}}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}
    items={[
      {
        title: <a onClick={() => setActiveTab('month')}>По месяцам</a>,
      },
      {
        title: <a onClick={() => setActiveTab('year')}>По годам</a>,
      },
      {
        title: <a onClick={() => setActiveTab('age')}>По возрасту</a>,
      },
    ]}
  />
    
        <div
          style={{
            background: colorBgContainer,
            minHeight: "75vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderComponent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
    </>
}