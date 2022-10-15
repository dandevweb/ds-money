import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --green-dark: #015f43;
        --green: #00875f;
        --green-light: #00b37e;

        --red-dark: #aa2834;
        --red: #f75a68;

        --background: #121214;
        --shape: #202024;
        --shape-secondary: #29292e;
        --shape-thirty: #323238;

        --placeholder: #7c7c8a;
        --text-body: #c4c4cc;
        --text-title: #e1e1e6;
        --white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--shape);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: var(--text-body);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        color: var(--text-title);
    }

    strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`