import React from "react";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="date"
        value={value ? value.toISOString().substring(0, 10) : ""}
        onChange={(e) => {
          if (onChange) {
            onChange(new Date(e.target.value));
          }
        }}
      />
    </div>
  );
};

export default DatePicker;
