import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function Layout({ children }: any) {
    return (<>
        <HeaderComponent />
        <div style={{ minHeight: '71.4vh', marginTop: 70 }}>{children}</div>
        <FooterComponent />
    </>);
}