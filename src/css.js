/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const sectionParent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

export const content = css`
  margin: 64px;
  padding: 48px;
  border: 2px solid #a9a9a9;
  width: 960px;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    color: #a9a9a9;
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
  }
  span {
    color: #ff3a3e;
    font-size: 24px;
  }
`;

export const table = css`
  background-color: #d1f1f2;
  font-family: 'Montserrat', sans-serif;
  color: #a9a9a9;
  font-size: 24px;
`;

export const tableContent = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    font-family: 'Montserrat', sans-serif;
    margin: 2px;
    appearance: none;
    background-color: #fafbfc;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 2px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
      rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: #24292e;
    cursor: pointer;
    display: inline-block;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    vertical-align: middle;
  }
`;

export const name = css`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  padding-right: 12px;
  padding-bottom: 12px;
  color: #ff3a3e;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  input {
    width: 600px;
    font-family: 'Montserrat', sans-serif;
    color: #a9a9a9;
    font-size: 24px;
  }
`;
