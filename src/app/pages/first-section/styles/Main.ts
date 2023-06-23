import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9fcff;
`

export const StyledButton = styled.div`
    width: 210px;
    background: #fff;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px 50px 50px 0;
    border: 2px solid #007dff;

    font-size: 14px;
    color: #007dff;
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 600;
`

export const MainText = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HorizontalLine = styled.div`
    width: 50%;
    display: flex;
    height: 1px;
    background: rgba(99, 99, 99, 0.2);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const Text = styled.h5`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 600;
`
