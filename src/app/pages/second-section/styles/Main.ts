import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
`

export const StyledButton = styled.button`
  background-color: #FFFFFF;
  border: 1px solid grey;
  border-radius: 100px;
  box-sizing: border-box;
  color: #111827;
  font-family: Plus Jakarta Sans, sans-serif;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1rem;
  padding: .50rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`

export const Text = styled.h5`
    font-family: Plus Jakarta Sans, sans-serif;
    font-size: .875rem;
    text-align: left;
    margin-left: 10px;
    line-height: 1.5rem;
`

export const Select = styled.select`
    height: 35px;
    background-color: #FFFFFF;
    border: 1px solid grey;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111827;
    font-family: Plus Jakarta Sans, sans-serif;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1rem;
    padding: .50rem;
    text-align: center;
    text-decoration: none #D1D5DB solid;
    text-decoration-thickness: auto;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`

export const HorizontalLine = styled.div`
    width: 80%;
    display: flex;
    height: 1px;
    background: rgba(99, 99, 99, 0.2);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 10px 0 50px 0;
`

export const ModalHorizontalLine = styled.div`
  width: 500px;
  display: flex;
  height: 1px;
  margin-left: 15px;
  margin-bottom: 10px;
  background: rgba(99, 99, 99, 0.2);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const CardList = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 40px;
`

export const StyledCard = styled.div`
    width: 330px;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const CardHeader = styled.div`
    
`

export const CardFooter = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: -40px;
  margin-bottom: 50px;
`

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

export const StyledModalWrapper = styled.div`
  width: 500px;
  height: auto;
`

export const ModalBody = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 15px;
  border-top: 0.3rem solid #007dff;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`

export const Description = styled.div`
  max-width: 500px;
  text-align: justify;
  margin: 5px 0 5px 15px;
  font-family: Plus Jakarta Sans, sans-serif;
  font-size: 14px;
`

export const Downloads = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  gap: 0.5rem;
`
