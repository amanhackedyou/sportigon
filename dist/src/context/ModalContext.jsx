"use client";
import React, { createContext, useContext, useState } from 'react';
import ModalRenderer from './ModalRenderer';
const ModalContext = createContext(undefined);
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context)
        throw new Error('useModal must be used within ModalProvider');
    return context;
};
export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);
    const showModal = (modalData) => setModal(modalData);
    const hideModal = () => setModal(null);
    // useEffect(() => {
    //     const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    //     document.cookie = `userTimezone=${userTimezone}; path=/; max-age=${60 * 60 * 24 * 365}`; // Set a cookie
    // }, []);
    return (<ModalContext.Provider value={{ modal, showModal, hideModal }}>
            {children}
            {modal && <ModalRenderer {...modal} onClose={hideModal}/>}
        </ModalContext.Provider>);
};
//# sourceMappingURL=ModalContext.jsx.map