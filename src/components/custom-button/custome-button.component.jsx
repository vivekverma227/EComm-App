import React from 'react';

import './custome-button.styles.scss';

const CustomeButton = ({children, ...otherProps}) => (
<button className = 'custom-button'>
{children}
</button>
);


export default CustomeButton;