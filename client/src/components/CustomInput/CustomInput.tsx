import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { PiWarningOctagon } from 'react-icons/pi';

const CustomInput = ({ isError, setShowIsError, labelName, idAttribute, nameAttribute,inputMode }) => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const focusOrBlurRef = useRef(null);

  const handleBlur = () => {
    setIsFocused(false);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.(com)$/.test(email);
    setShowIsError(!isValidEmail);
  };

  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <div className="relative flex w-full">
        <TextField
          ref={focusOrBlurRef}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          inputMode={inputMode}
          id={idAttribute}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={labelName}
          variant="filled"
          name={nameAttribute}
          error={isError}
          sx={{
            width: '100%',
            '& .MuiInputBase-root': {
              backgroundColor: 'white',
              border: '1px solid gray',
              borderRadius: '5px',
              transition: 'border-color 0.2s ease-in-out',
              '&:hover': {
                borderColor: 'purple',
              },
              '&.Mui-focused': {
                borderColor: 'purple',
                backgroundColor: 'white',
              },
              '& input': {
                color: 'black',
              },
            },
            '& .MuiInputLabel-root': {
              color: `${isError ? 'red' : 'black'}`,
              fontWeight: 600,
              fontSize: 15,
              '&.Mui-focused': {
                color: isError ? 'red' : 'black',
              },
            },
          }}
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
        />
        {isError && (
          <PiWarningOctagon
            size={18}
            className={`${isFocused ? '' : 'left-14 top-[28%]'} absolute left-12 top-[4px] text-red-600`}
          />
        )}
      </div>
      {isError && <p className="text-red-600">Please enter a valid email address.</p>}
    </div>
  );
};

export default CustomInput;
