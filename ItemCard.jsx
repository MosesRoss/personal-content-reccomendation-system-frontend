import { motion } from "framer-motion";
import { useGlobal } from "../context/GlobalState";

export default function ItemCard({ item }) {
  const { deleteItem, updateItem } = useGlobal();

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.15, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="card-title">{item.title}</div>
      <div className="card-actions">
        <button onClick={() => updateItem(item.id, item.title + " ✅")}>
          Edit
        </button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </motion.div>
  );
}
