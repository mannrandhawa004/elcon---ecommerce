import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, AlertCircle } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems = [], onUpdateQty, onRemoveItem }) => {
    const [itemToDelete, setItemToDelete] = useState(null);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    if (!isOpen) return null;
    const confirmDelete = () => {
        if (itemToDelete) {
            onRemoveItem(itemToDelete);
            setItemToDelete(null);
        }
    };

    return (
        <div className="fixed inset-0 z-[300] overflow-hidden">
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            />
            
            <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 ease-in-out">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#434377]/10 p-2 rounded-lg text-[#434377]">
                            <ShoppingBag size={20} />
                        </div>
                        <h2 className="text-xl font-black text-[#434377] uppercase tracking-tight">Shopping Bag</h2>
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold">
                            {cartItems.length} ITEMS
                        </span>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all hover:rotate-90"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body: Product List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide relative">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 group border-b border-gray-50 pb-6 last:border-0">
                                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                
                                <div className="flex flex-1 flex-col justify-between py-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Electronics</p>
                                        </div>
                                        <p className="text-sm font-black text-[#434377]">${item.price}</p>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center border border-gray-200 rounded-full px-1">
                                            <button onClick={() => onUpdateQty(item.id, -1)} className="p-1.5 hover:text-[#434377] transition-colors"><Minus size={14}/></button>
                                            <span className="px-3 text-xs font-bold text-gray-700">{item.qty}</span>
                                            <button onClick={() => onUpdateQty(item.id, 1)} className="p-1.5 hover:text-[#434377] transition-colors"><Plus size={14}/></button>
                                        </div>
                                        
                                        {/* MODIFIED DELETE BUTTON */}
                                        <button 
                                            onClick={() => setItemToDelete(item.id)} 
                                            className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-1"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <ShoppingBag size={48} className="text-gray-200 mb-4" />
                            <p className="text-gray-500 font-medium">Your bag is empty</p>
                            <button onClick={onClose} className="text-[#434377] text-sm font-bold underline mt-2">Start Shopping</button>
                        </div>
                    )}

                    {/* --- NEW CONFIRMATION POPUP UI --- */}
                    {itemToDelete && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm animate-in fade-in duration-200">
                            <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 w-full max-w-[280px] text-center scale-in-center animate-in zoom-in-95">
                                <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-500 mb-4">
                                    <AlertCircle size={24} />
                                </div>
                                <h4 className="text-gray-900 font-bold mb-1">Remove item?</h4>
                                <p className="text-gray-500 text-xs mb-6">This item will be removed from your shopping bag.</p>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setItemToDelete(null)}
                                        className="flex-1 py-2 text-xs font-bold text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={confirmDelete}
                                        className="flex-1 py-2 text-xs font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer: Summary */}
                <div className="border-t p-6 bg-gray-50/50">
                    <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm text-gray-500 font-medium">
                            <span>Shipping</span>
                            <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
                        </div>
                        <div className="flex justify-between text-lg font-black text-gray-900 border-t border-gray-100 pt-2">
                            <p>Total Amount</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                    </div>
                    
                    <button className="w-full bg-[#434377] text-white py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#34345d] transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;