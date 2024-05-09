import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { Container } from '@mui/material';

function List() {


    return (
        <>
        <Container maxWidth="sm">
        <AddTask />
        </Container>
        </>
    );
}

export default List;