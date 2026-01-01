'use client';

import { useState } from 'react';

const countryCodes = [
  { code: '+507', country: 'Panama', flag: '🇵🇦' },
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
  { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
  { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
  { code: '+504', country: 'Honduras', flag: '🇭🇳' },
  { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
];

interface PhoneInputProps {
  value: string;
  onChange: (fullPhone: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  name?: string;
  id?: string;
}

export default function PhoneInput({
  value,
  onChange,
  onBlur,
  disabled = false,
  error = false,
  placeholder = '6123-4567',
  name,
  id,
}: PhoneInputProps) {
  // Parse initial value to extract country code and number
  const parseValue = (val: string) => {
    for (const country of countryCodes) {
      if (val.startsWith(country.code)) {
        return {
          countryCode: country.code,
          phoneNumber: val.slice(country.code.length).trim(),
        };
      }
    }
    return { countryCode: '+507', phoneNumber: val };
  };

  const parsed = parseValue(value);
  const [selectedCode, setSelectedCode] = useState(parsed.countryCode);
  const [phoneNumber, setPhoneNumber] = useState(parsed.phoneNumber);
  const [isOpen, setIsOpen] = useState(false);

  const selectedCountry = countryCodes.find((c) => c.code === selectedCode) || countryCodes[0];

  const handleCodeChange = (code: string) => {
    setSelectedCode(code);
    setIsOpen(false);
    onChange(`${code}${phoneNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    setPhoneNumber(newNumber);
    onChange(`${selectedCode}${newNumber}`);
  };

  return (
    <div className="relative">
      <div
        className={`
          flex items-center rounded-md border bg-white
          focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0
          ${error ? 'border-red-300 ring-2 ring-red-200' : 'border-input'}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
        `}
      >
        {/* Country Code Dropdown Button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            flex items-center gap-1.5 px-3 h-10 bg-transparent border-r border-gray-200 rounded-l-md
            hover:bg-gray-50 transition-colors text-sm shrink-0
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <span className="text-base">{selectedCountry.flag}</span>
          <span className="text-gray-700 font-medium">{selectedCode}</span>
          <svg
            className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Phone Number Input */}
        <input
          id={id}
          name={name}
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 h-10 px-3 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed rounded-r-md"
        />
      </div>

      {/* Dropdown Menu - Outside the main container */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 z-50 w-56 max-h-64 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200">
            {countryCodes.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCodeChange(country.code)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-gray-50 transition-colors
                  ${selectedCode === country.code ? 'bg-gray-100' : ''}
                `}
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-gray-900 font-medium">{country.country}</span>
                <span className="text-gray-500 ml-auto">{country.code}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
