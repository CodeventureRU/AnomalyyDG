import React from 'react';
import {useTransition} from "@/hooks/useTransition";

const MyLink = ({href, children, time=1500, ...props}) => {

    const transition = useTransition();

    return (
        <a onClick={_ => {transition({href, time})}} {...props}>{children}</a>
    );
};

export default MyLink;