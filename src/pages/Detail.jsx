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
            <DetailContainer>
                <Title> 정보</Title>
                <Detailinput>
                    <Label> 날짜 </Label>
                    <Input type="text" defaultValue={item.date} />
                </Detailinput>

                <Detailinput>
                    <Label> 항목 </Label>
                    <Input type="text" defaultValue={item.item} />
                </Detailinput>

                <Detailinput>
                    <Label> 금액 </Label>
                    <Input type="text" defaultValue={item.amount} />
                </Detailinput>

                <Detailinput>
                    <Label> 내용 </Label>
                    <Input type="text" defaultValue={item.description} />
                </Detailinput>

                <AllButton>
                    <EditButton> 수정 </EditButton>
                    <DeleteButton> 삭제 </DeleteButton>
                    <Button> 뒤로가기 </Button>
                </AllButton>
            </DetailContainer>
        </div>
    )
}

export default Detail;
const Title = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 15pxd;
`;
const DetailContainer = styled.div`
    border: 1px solid #333;
    margin: 20px;
    padding: 15px; 
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 80vh;
    background-color: #f9f9f9;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid;
    border-radius:20px;

`;

const Detailinput = styled.div`
    margin-bottom: 15px;
`;

const AllButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
`;
const EditButton = styled.button`
    padding: 10px 20px; 
    background-color: #A3C6C4;
    border: 1px solid #A3C6C4;
    cursor: pointer;
    margin: 0 10px;
`;
const DeleteButton = styled.button`
    padding: 10px 20px;
    border: 1px solid #ffa28e;
    background-color: #ffa28e;
    cursor: pointer;
    margin: 0 10px;
`;
const Button = styled.button`
    padding: 10px 20px; 
    border: 1px solid #89869e;
    background-color: #89869e;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
`;
