import styled from 'styled-components';
import { RadioButtonProps } from './types';

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
    display: inline-block;
    margin: 0;
    width: 16px;
    height: 16px;
    min-width: 14px;
    appearance: none;
    position: relative;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.neutral_light_50};
    background-color: ${({ theme }) => theme.colors.neutral_light_00};

    &:checked {
        border-color: ${({ theme }) => theme.colors.blue_secondary_70};
        background-color: ${({ theme }) => theme.colors.neutral_light_00};
        &:before {
            content: '';
            width: 10px;
            height: 10px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            position: absolute;
            background-color: ${({ theme }) => theme.colors.blue_secondary_70};
        }
        &:after {
            content: '';
            width: 6px;
            height: 6px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            position: absolute;
            background-color: ${({ theme }) => theme.colors.neutral_light_00};
        }
    }
`;

export const StyledLabelContainer = styled.label<{ checked: boolean }>`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space[4]};
    border: 1px solid
        ${({ theme, checked }) => (checked ? theme.colors.blue_secondary_70 : theme.colors.neutral_light_50)};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme, checked }) =>
        checked ? theme.colors.blue_secondary_70 : theme.colors.neutral_light_00};
    color: ${({ theme, checked }) => (checked ? theme.colors.neutral_light_00 : theme.colors.neutral_light_80)};
    margin-right: 10px;
    cursor: pointer;
    transition: all 150ms;
`;

export const StyledRadioContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledRadioLabel = styled.span`
    margin-left: 10px;
`;
