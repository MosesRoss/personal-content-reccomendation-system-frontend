// src/components/Row.jsx
import React from "react";
import ItemCard from "./ItemCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Row({ title, items = [] }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        <AnimatePresence>
          {items.map(item => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}>
              <ItemCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
