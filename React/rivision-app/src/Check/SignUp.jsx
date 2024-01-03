import React, { useState } from 'react';

const SignUp = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');


  console.log({day},{month},{year});


  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <h2>Date of Birth</h2>
      <div>
        <select value={day} onChange={handleDayChange}>
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select value={month} onChange={handleMonthChange}>
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>


        <select value={year} onChange={handleYearChange}>
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <strong>Selected Date of Birth:</strong>{' '}
        {day && month && year ? `${day}-${month}-${year}` : 'Select DOB'}
      </div>
    </div>
  );
};

export default SignUp;
// import React, { useState } from 'react';

// const SignUp = () => {
//   const [gender, setGender] = useState('');
//   console.log('gender',{gender});

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Select Gender</h2>
//       <label>
//         <input
//           type="radio"
//           value="male"
//           checked={gender === 'male'}
//           onChange={handleGenderChange}
//         />
//         Male
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="female"
//           checked={gender === 'female'}
//           onChange={handleGenderChange}
//         />
//         Female
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="other"
//           checked={gender === 'other'}
//           onChange={handleGenderChange}
//         />
//         Other
//       </label>
//       <div>
//         <strong>Selected Gender:</strong> {gender}
//       </div>
//     </div>
//   );
// };

// export default SignUp;