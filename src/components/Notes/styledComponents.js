/*
Hex: #4c63b6
Hex: #475569
Hex: #1e293b
Hex: #ffffff
Hex: #334155
Hex: #d8d8d8
Hex: #aab8c8
Hex: #cbd5e1
*/

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const NotesH1 = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 40px;
  font-weight: 500;
`
export const NotesInputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 3px 3px 3px 3px #d8d8d8;
  width: 700px;
  height: 250px;
  padding: 30px;
`

export const TitleInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 40%;
  height: 36px;
  border: none;
  margin-bottom: 20px;
  outline: none;
`

export const CommentTextInput = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 11px;
  width: 100%;
  height: 80px;
  border: none;
  margin-bottom: 20px;
  outline: none;
`

export const AddButton = styled.button`
  align-self: flex-end;
  color: #ffffff;
  background-color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const CommentsList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`
