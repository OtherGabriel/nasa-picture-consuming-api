import { FormTemplate, FormDivTemplate, InputTemplate, ButtonTemplate } from "../style"

export const Form = ({ children }) =>
  <FormTemplate>
    { children }
  </FormTemplate>

export const FormDiv = ({ children, margin }) =>
  <FormDivTemplate
    margin={ margin }
  >
    { children }
  </FormDivTemplate>

export const Input = ({ value, placeholder, onChange, align, width, height, margin }) =>
  <InputTemplate
    value={ value }
    placeholder={ placeholder }
    onChange={ onChange }
    align={ align }
    width={ width }
    height={ height }
    margin={ margin }
  />

export const Button = ({ children, onClick, margin }) =>
  <ButtonTemplate
    onClick={ onClick }
    margin={ margin }
  >
    { children }
  </ButtonTemplate>
