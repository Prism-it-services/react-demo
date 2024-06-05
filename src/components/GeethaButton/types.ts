import { ComponentPropsWithoutRef } from 'react';

export interface RadioButtonOptions {
    label: string;
    value: string | number;
    checked: boolean; 
}

export type RadioButtonProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & RadioButtonOptions;