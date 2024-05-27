import React from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import fakedata from './FakeData.json';

const Detail = () => {
    const { id } = useParams();
    const allItems = JSON.parse(localStorage.getItem('allItems')) || [];
    const item = [...fakedata, ...allItems].find(item => item.id === id);


    return (
        <div>
            <h2> 상세정보</h2>
            <Date> {item.date} </Date>
            <Item> {item.item} </Item>
            <Amount> {item.amount} </Amount>
            <Des> {item.description} </Des>
        </div>
    )
}

export default Detail;

const Date = styled.div`
    
`;

const Item = styled.div`
    
`;

const Amount = styled.div`
    
`;

const Des = styled.div`
    
`;