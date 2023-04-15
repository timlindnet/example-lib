import { HTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={`${props.className} btn`}>
      <span>Welcome to Button!</span>
    </button>
  );
}

export default Button;
