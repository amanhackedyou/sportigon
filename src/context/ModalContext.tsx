"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import ModalRenderer from './ModalRenderer';

type ModalType = 'success' | 'error';

interface ModalData {
    type: ModalType;
    title: string;
    description: string;
}

interface ModalContextType {
    modal: ModalData | null;
    showModal: (modal: ModalData) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within ModalProvider');
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<ModalData | null>(null);

    const showModal = (modalData: ModalData) => setModal(modalData);
    const hideModal = () => setModal(null);


    // useEffect(() => {
    //     const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    //     document.cookie = `userTimezone=${userTimezone}; path=/; max-age=${60 * 60 * 24 * 365}`; // Set a cookie
    // }, []);

    return (
        <ModalContext.Provider value={{ modal, showModal, hideModal }}>
            {children}
            {modal && <ModalRenderer {...modal} onClose={hideModal} />}
        </ModalContext.Provider>
    );
};
