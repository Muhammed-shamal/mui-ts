import React, { useState } from 'react';
import { Modal, TextField, Button, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Paper = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  maxWidth: 600,
  minWidth: 500,
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #ccc',
}));

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const FormRow = styled('div')({
  display: 'flex',
  gap: '16px',
});

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    departmentName: '',
    departmentCode: '',
    description: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Or perform your submission logic here
    onClose();
  };

  return (
    <StyledModal open={open} onClose={onClose}>
      <Paper>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          New Department
        </Typography>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <TextField
              label="Department Name"
              name="departmentName"
              value={formData.departmentName}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Department Code"
              name="departmentCode"
              value={formData.departmentCode}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </FormRow>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            variant="outlined"
            required
            multiline
            rows={4}
            inputProps={{ maxLength: 250 }}
            helperText="Max 250 characters"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <Box display="flex" justifyContent="flex-start" gap="8px">
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </Form>
        <Typography variant="caption" color="error" display="block" marginTop="8px">
          * indicates mandatory fields
        </Typography>
      </Paper>
    </StyledModal>
  );
};

export default CustomModal;
