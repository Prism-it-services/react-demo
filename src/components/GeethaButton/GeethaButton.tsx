import { RadioButtonProps } from './types';
import { StyledLabelContainer, StyledRadioLabel, StyledRadioContainer, StyledRadio } from './styles';
import { ComponentPropsWithoutRef } from 'react';

export const RadioButton = ({ id, label, value, checked, ...otherProps }: RadioButtonProps) => {
    return (
        <StyledLabelContainer htmlFor={id} aria-label={label} checked={checked}>
            <StyledRadioContainer>
                <StyledRadio 
                    id={id}
                    {...otherProps} 
                    checked={checked}
                />
                <StyledRadioLabel>{label}</StyledRadioLabel>
            </StyledRadioContainer>
        </StyledLabelContainer>
    );
};
