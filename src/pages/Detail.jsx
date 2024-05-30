import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense, deleteExpense } from '../redux/slices/expenseSlice';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const allItems = useSelector(state => state.expenses.allItems);
    const item = allItems.find(item => item.id === id);

    const dateRef = useRef();
    const itemRef = useRef();
    const amountRef = useRef();
    const descriptionRef = useRef();

    const handleEdit = () => {
        const editItem = {
            ...item,
            date: dateRef.current.value,
            item: itemRef.current.value,
            amount: parseFloat(amountRef.current.value),
            description: descriptionRef.current.value
        };

        dispatch(editExpense(editItem));
        alert('수정되었습니다.');
        navigate('/');
    };

    const handleDelete = () => {
        if (window.confirm('정말로 이 지출 항목을 삭제하시겠습니까?')) {
            dispatch(deleteExpense(item.id));
            alert('항목이 삭제되었습니다');
            navigate('/');
        } else {
            navigate('/');
        }
    };

    const handleBack = () => {
        navigate(-1);
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
                    <EditButton onClick={handleEdit}> 수정 </EditButton>
                    <DeleteButton onClick={handleDelete}> 삭제 </DeleteButton>
                    <Button onClick={handleBack}> 뒤로가기 </Button>
                </AllButton>
            </DetailContainer>
        </div>
    );
};

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