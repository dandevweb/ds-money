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
        --text-placeholder: #7C7C8A;
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

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--shape);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover {
            filter: brightness(0.8);
        }
    }
`