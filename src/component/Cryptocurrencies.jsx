import React, {useEffect, useState} from 'react';
import millify from "millify";
import {useGetCryptosQuery} from "../servies/cryptoAPI";
import {Card, Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
import Loader from "./Loader";


const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const _coins = cryptosList?.data?.coins

    useEffect(() => {
        const filteredData = _coins?.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [_coins, searchTerm])

    if (isFetching) return <Loader/>
    return (
        <>
            {!simplified &&
                <div className='search-crypto'>
                    <Input placeholder='search cryptocurreny' onChange={e => setSearchTerm(e.target.value)}/>
                </div>
            }
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {_coins && cryptos?.map(currency =>
                    <Col key={currency.uuid} xs={24} sm={12} lg={6} className='crypto-card'>
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                hoverable
                                extra={<img className='crypto-image' src={currency.iconUrl} alt=""/>}
                                title={`${currency.rank}. ${currency.name}`}
                            >
                                <p>                        {currency.id}</p>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                )}
            </Row>
        </>
    );
};

export default Cryptocurrencies;