import React, { useState } from "react";
import debounce from "lodash/debounce";

export const debounceTextbox = (Component, timeout = 500) => ({ onChange, value, ...props }) => {
	const [debouncedValue, setValue] = useState(value);
	const sendTextChange = debounce((newValue) => onChange(newValue), timeout);

	const handleTextChange = (e) => {
		setValue(e.target.value);
		sendTextChange(e);
	};

	return <Component {...props} onChange={handleTextChange} value={debouncedValue} />;
};