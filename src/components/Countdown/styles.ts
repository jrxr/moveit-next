import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.title};
  transition: all 0.5s linear;
  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.card};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 6.5rem;
    }
    @media (max-width: 370px) {
      font-size: 4.5rem;
    }
  }
  & > div span {
    flex: 1;
  }
  & > div span:first-child {
    border-right: 1px solid ${({ theme }) => theme.border};
  }
  & > div span:last-child {
    border-left: 1px solid ${({ theme }) => theme.border};
  }
  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
    @media (max-width: 370px) {
      font-size: 3rem;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.blueOne};
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;
  &:not(:disabled):hover {
    background: var(--blue-dark);
  }
  &.countdownActive {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    position: relative;
    border-bottom: 5px solid #dcdde0;

    & svg {
      & path {
        fill: ${({ theme }) => theme.text};
      }
    }
    &:not(:disabled):hover {
      background: var(--red);
      color: var(--white);
      border-color: var(--red);
      &:before {
        background: var(--red);
      }
    }
    &:before {
      content: '';
      width: 100%;
      transform: scaleX(0);
      display: block;
      margin: 0;
      position: absolute;
      height: 5px;
      background: var(--green);
      bottom: -5px;
      left: 0;
      border-radius: 0 0 5px 5px;
      animation: roundtime calc(6 * 1s) linear forwards;
      transform-origin: left center;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    cursor: not-allowed;
    border-bottom: 5px solid var(--green);
    display: flex;
    align-items: center;
    & img {
      margin-left: 0.5rem;
    }
  }

  & svg {
    margin-left: 0.8rem;
  }
`;
