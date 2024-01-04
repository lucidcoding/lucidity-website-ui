import "../styles/global.scss";
import "gridstack/dist/gridstack.css";
import localFont from "next/font/local";

const openSans = localFont({
    src: [
        {
            path: "../public/fonts/OpenSans-Light.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/fonts/OpenSans-LightItalic.ttf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../public/fonts/OpenSans-Regular.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/OpenSans-Italic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../public/fonts/OpenSans-Semibold.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/OpenSans-SemiboldItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/OpenSans-Bold.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/OpenSans-BoldItalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../public/fonts/OpenSans-ExtraBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/OpenSans-ExtraBoldItalic.ttf",
            weight: "600",
            style: "italic",
        },
    ],
});

export default function App({ Component, pageProps }) {
    return <>
        <style jsx global>{`
            :root {
                --open-sans-font: ${openSans.style.fontFamily};
            }
        `}</style>
        <Component {...pageProps} />
    </>;
}