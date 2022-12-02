import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const InputBoxComponent = () => {
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
        <h2>Search Music </h2>
              <TextField
        label="Standard warning"
      
      />
           <TextField
        label="Standard warning"
      
      />
           <TextField
        label="Standard warning"
      
      />
           <TextField
        label="Standard warning"
      
      />
            <Button 
            variant="outlined"
            >
                Search
                </Button>

        </Box> 
    )
}
export default InputBoxComponent