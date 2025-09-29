import React from 'react';
const ModalRenderer = ({ type, title, description, onClose, }) => {
    return (<div className="fixed top-0 left-0 inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
            <div className={`bg-white rounded-xl p-6 max-w-md w-full shadow-xl border-l-4 ${type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <button className={`px-4 py-2 rounded text-white font-semibold ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>);
};
export default ModalRenderer;
//# sourceMappingURL=ModalRenderer.jsx.map