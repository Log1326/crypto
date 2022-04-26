import React from 'react';
import {Layout, Space, Typography} from "antd";
import {Routes, Route, Link} from 'react-router-dom'
import {Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar} from './component';
import {EXCHANGES, HOME, NEWS} from "./utils";

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path={'/'} element={<Homepage/>}/>
                            <Route path={'/cryptocurrencies'} element={<Cryptocurrencies/>}/>
                            <Route path={'/exchanges'} element={<Exchanges/>}/>
                            <Route path={'/crypto/:coinId'} element={<CryptoDetails/>}/>
                            <Route path={'/news'} element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Cryptoverse
                        <br/>
                        All rights reserverd
                    </Typography.Title>
                    <Space>
                        <Link to={HOME}>Home</Link>
                        <Link to={EXCHANGES}>Exchanges</Link>
                        <Link to={NEWS}>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default App;