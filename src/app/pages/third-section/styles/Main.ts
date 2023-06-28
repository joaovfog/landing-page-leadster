import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f9fcff;
    gap: 5rem;
    margin-bottom: 40px;
`

export const Text = styled.h2`
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 500;
    line-height: 1.2;
`

export const HorizontalLine = styled.div`
    width: 25rem;
    height: 1px;
    background: rgba(99, 99, 99, 0.2);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #007dff;
    background: #007dff;
    color: #fff;
    padding: 15px;
    font-size: 10px;
    font-family: Plus Jakarta Sans, sans-serif;
    font-weight: 600;
    cursor: pointer;
`
