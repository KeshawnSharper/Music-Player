import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const InputBoxComponent = ({handleChange,name,value}) => {
    return (
        <Box
        component="form"
        style={{"margin":"70px"}}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
              <TextField
        label={name}
        onChange={handleChange}
        name={name}
        value={value}
      
      />


        </Box> 
    )
}
export default InputBoxComponent