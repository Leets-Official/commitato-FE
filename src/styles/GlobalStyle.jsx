import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family:"Staatliches-Regular" ;
        src: url("fonts/Staatliches-Regular.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-ExtraBold" ;
        src: url("/fonts/Pretendard-ExtraBold.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-Regular" ;
        src: url("/fonts/Pretendard-Regular.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-SemiBold" ;
        src: url("/fonts/Pretendard-SemiBold.woff") format("woff");
    }
    @font-face {
        font-family:"Pretendard-Bold" ;
        src: url("/fonts/Pretendard-Bold.woff") format("woff");
    }
   
`;

export default GlobalStyles;
