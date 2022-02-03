import { FieldValues, UseFormRegister, UseFormTrigger } from 'react-hook-form'

export type StepProps = {
  register: UseFormRegister<FieldValues>
  trigger: UseFormTrigger<FieldValues>
}
