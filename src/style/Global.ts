import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
  .logo_white {
    background: url('../images/logo.svg');
    background-size: 100% 100%;
    width: 110px;
    height: 45px;
  }
  .logo_dark {
    background: url('../images/logo_dark.svg');
    background-size: 100% 100%;
    width: 110px;
    height: 45px;
  }
  .sc-gsWcmt {
    display: none !important
  }
`

export default GlobalStyle
