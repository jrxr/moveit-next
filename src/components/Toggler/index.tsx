import React from 'react';
import { func, string } from 'prop-types';
import { TogglerContainer, Container } from './styles';

interface ToggleProps {
  theme: string | boolean | (() => void);
  toggleTheme: string | boolean | (() => void);
}

const Toggle = ({ theme, toggleTheme }: ToggleProps) => (
  <Container>
    <div>
      <TogglerContainer>
        <input
          type="checkbox"
          onClick={toggleTheme}
          checked={theme === 'dark'}
        />
        <div>
          <span />
        </div>
      </TogglerContainer>
    </div>
  </Container>
);
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};
export default Toggle;
