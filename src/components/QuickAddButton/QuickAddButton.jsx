import React from 'react';
import { ShoppingCart } from 'lucide-react';

const QuickAddButton = ({ product, onAdd, className = "" }) => {
    return (
        <button 
            onClick={(e) => {
                e.preventDefault();
                onAdd(product);
            }}
            className={`w-full py-3 md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 bg-[#434377] text-white transition-all hover:bg-[#34345d] active:scale-95 ${className}`}
        >
            <ShoppingCart size={14} /> Quick Add
        </button>
    );
};

export default QuickAddButton;