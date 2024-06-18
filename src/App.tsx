import React, { useState } from 'react';
import CustomModal from './CustomModal';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Example App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <CustomModal open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
