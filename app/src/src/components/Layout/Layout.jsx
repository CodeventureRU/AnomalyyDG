import React, {useEffect} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();

    useEffect(() => {
        const handleBeforePopState = () => {
            window.location.reload();
            return false;
        };

        // Подписка на событие beforePopState
        router.beforePopState(handleBeforePopState);

        // Отписка от события при размонтировании компонента
        return () => {
            router.beforePopState(() => {});
        };
    }, []);
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;