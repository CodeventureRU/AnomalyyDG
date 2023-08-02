import {useEffect} from "react";

export const useShow = (delay=0, rmClasses=[]) => {
    useEffect(() => {
        rmClasses.forEach(cl => {
            document.body.classList.remove(cl);
        })
        if (!document.body.classList.contains('show')) {
            setTimeout(() => {
                document.body.classList.add('show');
            }, delay);
        }
    }, []);
}