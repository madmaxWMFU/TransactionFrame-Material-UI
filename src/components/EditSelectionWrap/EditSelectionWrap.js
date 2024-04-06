import { Box, Button, FormControlLabel } from "@mui/material";
import SwitchInput from '../SwichInput';
import { useState } from 'react';

function EditSelectionWrap() {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Box sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                marginRight: '20px'
            }}
        >
            <Button 
                variant="outlined"
                sx={{
                    width: '60px',
                    height: '30px',
                    borderRadius: '4px',
                    border: 'none',
                    padding: '2px 10px',
                    gap: '4px',
                    backgroundColor: '#A3FFBD',
                    color: '#2E2A36',
                    fontWeight: 500,
                    fontSize: '11px',
                    lineHeight: '13.31px',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#1ab61cd6',
                        border: '1px solid #2ed219',
                        color: '#fff'
                    }
                }}
            >
                Save
            </Button>
            <FormControlLabel
                control={<SwitchInput checked={true} onChange={handleChange} />}
                labelPlacement='start'
                label='Edit mode'
                sx={{
                    '& span': {
                        fontWeight: 500,
                        fontSize: '9px',
                        lineHeight: '10.89px',
                        color: '#4723AD'
                    }
                }}
            />
        </Box>
    );
}

export default EditSelectionWrap;
