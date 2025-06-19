import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Ui/Button';

const HeroButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-4">
      <Button
        text="Explore Career"
        variant="primary"
        onClick={() => navigate('/careers')}
      />
      <Button
        text="Let's Talk Business"
        variant="secondary"
        onClick={() => navigate('/contact')}
      />
    </div>
  );
};

export default HeroButtons;
