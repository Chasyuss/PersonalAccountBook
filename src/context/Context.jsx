import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useExpense = () => {
    return useContext(MyContext);
};

export const Provider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);

    const addItem = (newExpense) => {
        setAllItems(Items => [...Items, newExpense]);
    };

    const editItem = (editedItem) => {
        setAllItems(Items =>
            Items.map(item => (item.id === editedItem.id ? editedItem : item))
        );
    };

    const deleteItem = (id) => {
        setAllItems(Items => Items.filter(item => item.id !== id));
    };

    return (
        <MyContext.Provider value={{ allItems, addItem, editItem, deleteItem }}>
            {children}
        </MyContext.Provider>
    );
};
