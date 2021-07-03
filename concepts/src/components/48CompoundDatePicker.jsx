import React, { createContext, useContext,useState } from 'react'

// Utils
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

// Sub Components

const DateFieldsContext = createContext();

const DayField = (props) => {
    const { date, onChange } = useContext(DateFieldsContext);
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = Array.from({
        length: daysInMonth(month, year)
    });
    const value = date.getDate();
    const handleChange = event => {
        const  newDate = new Date(date.getTime());
        newDate.setDate(parseInt(event.target.value));
        onChange(newDate);
    }

    return (
        <select value={value} onChange={handleChange} {...props}>
            {days.map((_, index) => (
                <option key={index} value={index +  1}>
                    {index < 9 ? "0" : ""}
                    {index + 1}
                </option>
            ))}
        </select>
    )
}

const MonthField = (props) => {
    const { date, onChange } = useContext(DateFieldsContext);
    const month = date.getMonth();
    const handleChange = event => {
        const  newDate = new Date(date.getTime());
        newDate.setDate(parseInt(event.target.value));
        onChange(newDate);
    }

    return (
        <select value={month} onChange={handleChange} {...props}>
            <option value="0">01</option>
            <option value="1">02</option>
            <option value="2">03</option>
            <option value="3">04</option>
            <option value="4">05</option>
            <option value="5">06</option>
            <option value="6">07</option>
            <option value="7">08</option>
            <option value="8">09</option>
            <option value="9">10</option>
            <option value="10">11</option>
            <option value="11">12</option>
        </select>
    )
}

const YearField = (props) => {
    const { date, onChange } = useContext(DateFieldsContext);
    const { start, end, ...rest } = props;

    const difference = end - start + 1;
    const years = Array.from({ length: difference }).map(
        (_, index) => index + start
    )
    const handleChange = event => {
        const  newDate = new Date(date.getTime());
        newDate.setYear(parseInt(event.target.value), 1);
        onChange(newDate);
    }

    return (
        <select value={date.getFullYear()} onChange={handleChange} {...rest}>
            {years.map((_, index) => (
                <option key={index} value={index +  1}>
                    {index < 9 ? "0" : ""}
                    {index + 1}
                </option>
            ))}
        </select>
    )
}

const DateFields = ({ children, defaultValue, start, end, value: controlledValue, onChange }) => {
    const date = controlledValue || defaultValue;
    return (
        <DateFieldsContext.Provider value={{ date, onChange }}>
            {children}
        </DateFieldsContext.Provider>
    )
}

// Main Component
function CompoundDatePicker() {
    const [startDate, setStartDate] = useState(new Date("March 1, 2021"));

    return (
        <div>
            <h3>48 Compound Date Picker</h3>
            <DateFields value={startDate} onChange={setStartDate}>
                <MonthField />
                <DayField />
                {/* Start and year ends are passed as props and not values because it's not needed by other sub components */}
                <YearField start={2018} end={2019} />
            </DateFields>
        </div>
    )
}

export default CompoundDatePicker
