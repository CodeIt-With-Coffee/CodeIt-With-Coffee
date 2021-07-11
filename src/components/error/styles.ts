import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #fff0df;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div`
    color: #ffffff;
    font-size: clamp(5rem, 50vw, 15rem);
    -webkit-text-stroke: 2px #60473d;
    -ms-text-stroke: 2px #60473d;
    & > span {
        color: #60473d;
    }
`;

export const Button = styled.button`
    background: #60473d;
    color: #ffffff;
    margin: 5px;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: all 0.3s;
    border: solid 2px #60473d;
    font-size: 20px;
    &:hover {
        background: #fff0df;
        color: #60473d;
    }
`;
