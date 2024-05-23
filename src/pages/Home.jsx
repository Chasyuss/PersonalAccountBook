import React, { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
    const [activeMonth, setActiveMonth] = useState(0);
    const months = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ];

    const handleTab = (month) => {
        setActiveMonth(month);
    };

    return (
        <form>
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
                    {activeMonth ? `${activeMonth} 총 지출` : '월을 선택해 주세요.'}
                </Content>
            </Container>
        </form>
    );
};

export default Home;

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
  background-color: ${props => (props.active ? '#A3C6C4' : '#f1f1f1')}; 
  color: ${props => (props.active ? 'white' : 'black')}; // 글씨 색상 
  border-radius: 4px;

  &:hover {
    background-color: ${props => (props.active ? '#A3C6C4' : '#ddd')}; //클릭시 색상
  }
`;

const Content = styled.div`
  margin-top: 20px;
  width: 80%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;
