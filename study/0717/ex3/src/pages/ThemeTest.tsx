import ThemeProvider from "../contexts/ThemeContext";
import Header from "../component/Header";
import Content from "../component/Content";
import LanguageProvider from "../contexts/LanguageContext";

export default function ThemeTest() {
    return (
        <div>
            <h2>테마 테스트</h2>
            <LanguageProvider>
            <ThemeProvider>
                <Header/>
                <Content/>
            </ThemeProvider>
            </LanguageProvider>
        </div>
    );
}