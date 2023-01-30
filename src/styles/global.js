import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --background:#000000;
    --grey-3: #212529;
    --grey-4: #121214;
    --red-primary: #FF577F;
    --red-primary-focus:#FF427F;
    --primary-negative:#59323F;
    --green-sucess: #3FE864;
    --red-negative: #E83F5B;
}

body{
    background: var(--background);
    color: var(--white)
}
body, input, button{
    background: var(--grey-2);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
}
`;
