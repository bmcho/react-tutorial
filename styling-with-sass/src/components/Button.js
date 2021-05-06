import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
// import classNames from 'classnames';
// import './Button.scss';


const colorStyles = css`
${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
        background: ${color};
        &:hover {
            background: ${lighten(0.1, selected)};
        }
        &:active {
            background: ${darken(0.1, selected)};
        }
        ${props =>
            props.outline &&
            css`
                color: ${selected};
                background: none;
                border: 1px solid ${selected};
                &:hover {
                    background: ${selected};
                    color: white;
                }
            `
        }
    `;
}}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    }
};

const sizeStyles = css`
    ${({size}) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize}; 
    `}
`;

const fullWidthStyle = css`
    ${props => 
        props.fullWidth &&
        css`
            width: 100%;
            justify-content: center;
            &:not(:first-child) {
                margin-left: 0;
                margin-top: 1rem;
            }
        `
    }
`;

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    height:2.25rem;
    font-size: 1rem;

    &:not(:first-child) {
        margin-left: 1rem;
    }

    ${colorStyles}
    ${sizeStyles}
    ${fullWidthStyle}

    // background: ${props => props.theme.palette[props.color]};
    // &:hover {
    //     background: ${props => lighten(0.1, props.theme.palette[props.color])};
    // }
    // &:active {
    //     background: ${props => darken(0.1, props.theme.palette[props.color])};
    //     // background: #1c7ed6;
    // }

`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
    return (
        <StyledButton color={color} size={size} 
                      outline={outline} fullWidth={fullWidth} {...rest}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
    fullWidth: false
};

// function Button({ children, size, color, outline, fullWidth}) {
//     return <button className={classNames('Button', size, color, {
//         outline,
//         fullWidth
//     })}>{children}</button>
// }

// Button.defaultProps = {
//     size: 'medium',
//     color: 'blue'
// };

export default Button;