import React, { createContext, useState, useEffect } from 'react';
import fakeData from '../pages/FakeData';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [allItems, setAllItems] = useState(() => {
    const storedItems = localStorage.getItem('allItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [activeMonth, setActiveMonth] = useState(() => {
    return localStorage.getItem("activeMonth") || "1월";
  });

  useEffect(() => {
    const storedItems = localStorage.getItem('allItems');
    const allItems = storedItems ? JSON.parse(storedItems) : [];
    const combinedItems = [...fakeData, ...allItems];
    if (allItems.length === 0) {
      localStorage.setItem('allItems', JSON.stringify(combinedItems));
      setAllItems(combinedItems);
    } else {
      setAllItems(allItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeMonth", activeMonth);
  }, [activeMonth]);

  const handleSubmit = (newItem) => {
    const updatedItems = [...allItems, newItem];
    setAllItems(updatedItems);
    localStorage.setItem("allItems", JSON.stringify(updatedItems));
  };

  const handleTab = (month) => {
    setActiveMonth(month);
  };

  return (
    <ExpenseContext.Provider
      value={{
        allItems,
        activeMonth,
        setActiveMonth,
        handleSubmit,
        handleTab
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};