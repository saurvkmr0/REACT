import React from 'react';
import Button from './Button';

const NavBtn = () => {
  return (
    <div>
            <Button btnName="All"/>
            <Button btnName="Breakfast"/>
            <Button btnName="Lunch"/>
            <Button btnName="Dinner"/>
    </div>
  )
}

export default NavBtn;