import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:4000/api/items";
const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(API).then(res => setItems(res.data));
  }, []);

  const addItem = async (title) => {
    const res = await axios.post(API, { title });
    setItems([...items, res.data]);
  };

  const updateItem = async (id, title) => {
    const res = await axios.put(`${API}/${id}`, { title });
    setItems(items.map(i => (i.id === id ? res.data : i)));
  };

  const deleteItem = async (id) => {
    await axios.delete(`${API}/${id}`);
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <GlobalContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
