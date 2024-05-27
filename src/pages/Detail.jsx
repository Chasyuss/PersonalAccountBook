import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import fakedata from './FakeData.json';

const Detail = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [allItems, setAllItems] = useState(JSON.parse(localStorage.getItem('allItems')) || []);
    const item = [...fakedata, ...allItems].find(item => item.id === id);

    const dateRef = useRef();
    const itemRef = useRef();
    const amountRef = useRef();
    const descriptionRef = useRef();

    //수정 
    const HandleEdit = () => {
        const editItem = {
            ...item,
            date: dateRef.current.value,
            item: itemRef.current.value,
            amount: parseFloat(amountRef.current.value),
            description: descriptionRef.current.value
        };

        const updateItems = [...fakedata, ...allItems].map(i => (i.id === item.id ? editItem : i));

        if (updateItems.length > fakedata.length) {
            const localItems = updateItems.slice(fakedata.length);
            localStorage.setItem('allItems', JSON.stringify(localItems));
            setAllItems(localItems);
        }
        else {
            const localItems = updateItems.slice(fakedata.length);
            setAllItems(localItems);
        }

        alert('수정되었습니다.');
        navigate('/'); // 홈으로 이동 
    };

    //삭제 
    const HandleDelete = () => {
        if (window.confirm('정말로 이 지출 항목을 삭제하시겠습니까?')) { // confirm 사용해서 사용자에게 확인받기
            //fakedata와 allitem에서 id가 일치하지 않은것만 필터링하고 새로운 배열 만듬
            const filterItems = [...fakedata, ...allItems].filter(i => i.id !== item.id);

            //filterItems 배열에서 fakedata 길이 이후의 항목들만 localItems 배열에 저장
            const localItems = filterItems.slice(fakedata.length);

            //로컬스토리지에 업뎉이트
            localStorage.setItem('allItems', JSON.stringify(localItems));
            alert('항목이 삭제되었습니다');
            navigate('/'); // 홈 이동 


        } else { //사용자가 취소 선택시, 다시 home page로 전환 
            return navigate('/')
        }

    };


    //되돌아가기 버튼 
    const HandleBack = () => {
        navigate(-1); // 이전단계로 되돌리기 
    };

    return (
        <div>
            <DetailContainer>
                <Title> 정보</Title>
                <Detailinput>
                    <Label> 날짜 </Label>
                    <Input type="text" defaultValue={item.date} ref={dateRef} />
                </Detailinput>

                <Detailinput>
                    <Label> 항목 </Label>
                    <Input type="text" defaultValue={item.item} ref={itemRef} />
                </Detailinput>

                <Detailinput>
                    <Label> 금액 </Label>
                    <Input type="text" defaultValue={item.amount} ref={amountRef} />
                </Detailinput>

                <Detailinput>
                    <Label> 내용 </Label>
                    <Input type="text" defaultValue={item.description} ref={descriptionRef} />
                </Detailinput>

                <AllButton>
                    <EditButton onClick={HandleEdit}> 수정 </EditButton>
                    <DeleteButton onClick={HandleDelete}> 삭제 </DeleteButton>
                    <Button onClick={HandleBack}> 뒤로가기 </Button>
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