import {useRouter} from "next/router";

export const useTransition = () => {
    const router = useRouter();

    function willChangeAddress(targetPath) {
        let currentPath = window.location.pathname;

        currentPath = currentPath.replace(/^\//, '');
        targetPath = targetPath.replace(/^\//, '');

        return currentPath !== targetPath;
    }

    return ({href, classes=[], time = 1500}) => {
        if (document.body.classList.contains('show') && willChangeAddress(href)) {
            document.body.classList.remove("show");
            classes.forEach(cl => document.body.classList.add(cl));
            setTimeout(() => {
                router.push(href, href, {shallow: true}).then(() => {
                });

            }, time);
        }
    }
}