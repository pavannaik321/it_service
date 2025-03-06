import { useState } from "react";

export default function CustomDropdown({ services, selectedService, setSelectedService }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white shadow-lg cursor-pointer flex justify-between items-center"
      >
        {selectedService}
        <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-blue-600 text-white rounded-lg shadow-xl">
          {Object.keys(services).map((service, index) => (
            <div
              key={index}
              className="px-6 py-3 hover:bg-blue-600 cursor-pointer transition-all"
              onClick={() => {
                setSelectedService(service);
                setIsOpen(false);
              }}
            >
              {service}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
