import React from 'react'
import Button from '@mui/material/Button';
import {Link,Outlet} from "react-router-dom"
const PlusBtn = (props) => {
  return (
    <div>
          <Button variant="contained" onClick={props.handleArtan}>+</Button>
          <Link to="text">Text</Link>
          <Link to="/">Home</Link>
          <Outlet />
    </div>

  )
}

export default PlusBtn
