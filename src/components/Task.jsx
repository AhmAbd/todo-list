import React, { useState } from 'react';
import { Checkbox, TextField } from '@mui/material';

function Task({ onDelete, taskName }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleCheckBoxClick = () => {
        setIsVisible(false);
        onDelete();
    };

    return (
        <>
            {isVisible && (
                <div className="flex flex-row justify-center">
                    <TextField id="taskName" label="" variant="filled" value={taskName}/>
                    <Checkbox onChange={handleCheckBoxClick} />
                </div>
            )}
        </>
    );
}

export default Task;
