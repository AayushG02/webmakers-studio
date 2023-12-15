import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { motion } from "framer-motion";
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[80%] md:w-[45%] m-auto flex flex-col gap-[14px] border-b pb-8 last:border-0">
      <div
        className="flex justify-between items-center text-gray-800 font-medium cursor-pointer text-xl"
        onClick={() => setOpen((currentState) => !currentState)}
      >
        <h1>{q}</h1>
        {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
      </div>
      {open && (
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-gray-500 text-base font-medium w-[90%]"
        >
          {a}
        </motion.p>
      )}
    </div>
  );
};

export default FaqItem;
