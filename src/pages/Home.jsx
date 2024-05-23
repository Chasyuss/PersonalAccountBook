import React, { act, useEffect, useState } from 'react';
import styled from 'styled-components';
import fakedata from './FakeData.json';
import GlobalStyle from '../styles/GlobalStyle';


const Home = () => {
    const months = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ];

    const [activeMonth, setActiveMonth] = useState(() => {
        return localStorage.getItem("activeMonth") || "1월";
    });

    useEffect(() => {
        localStorage.setItem("activeMonth", activeMonth);
    }, [activeMonth]);

    const handleTab = (month) => {
        setActiveMonth(month);
    };

    // 원하는 월 필터링 
    const filterdata = fakedata.filter(item => {
        const dataMonth = new Date(item.date).getMonth() + 1; // 0부터 시작이니까 1 더해줘야 안밀림
        return `${dataMonth}월` === activeMonth;
    }); // 문자열을 날짜로 변경후, 해당 열을 가져옴 

    return (
        <Form>
            <GlobalStyle />
            <Container>
                <Tabs>
                    {months.map((month, index) => (
                        <Tab key={index} active={activeMonth === month} //클릭한 박스 확인위해 active prop에 할당할 값
                            onClick={() => handleTab(month)}
                        >
                            {month}
                        </Tab>
                    ))}
                </Tabs>
                <Content>
                    {filterdata.length > 0 ? (
                        filterdata.map((item, index) => (
                            <List key={item.id}>
                                <DateWrapper> {item.date} </DateWrapper>
                                <MoneyWrapper> {item.amount}원 </MoneyWrapper>
                                <Description> {item.item}: {item.description} </Description>
                            </List>
                        ))
                    ) : (
                        '해당 월에 지출 내역이 없습니다.'
                    )}
                </Content>
            </Container>
        </Form>
    );
};

export default Home;

const Form = styled.div`

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  border: 1px solid #ccc;
`;

const Tab = styled.div`
  margin: 5px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: ${props => (props.active ? '#A3C6C4' : '#E0E7E9')}; 
  color: ${props => (props.active ? 'white' : 'black')}; // 글씨 색상 
  border-radius: 4px;

  &:hover {
    background-color: ${props => (props.active ? '#A3C6C4' : '#E0E7E9')}; //클릭시 색상
  }
`;

const Content = styled.div`
  margin-top: 20px;
  width: 70%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const List = styled.div`
    border: 1px solid #E0E7E9;
    margin: 10px;
    padding: 15px;
    border-radius: 20px;
    background-color:#E0E7E9;
`;

const DateWrapper = styled.div`
    font-size: 14px;
    color: grey;
`;

const MoneyWrapper = styled.div`
    text-align: end;
    color: #d47f66;
`;

const Description = styled.div`
    /* 내용이 지정된 영역을 넘어설때 hidden */
    overflow: hidden;
    /* 공백 유지, 강제 한줄 처리 */
    white-space: nowrap;
    /* 한 줄이상의 컨텐츠일 경우 … 표시 */
    text-overflow: ellipsis;  
    color: #1e2945;
    font-size: 16px;
    margin: 4px;
`;