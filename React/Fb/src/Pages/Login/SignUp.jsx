import React, { useState } from 'react';
import { HiQuestionMarkCircle } from "react-icons/hi";
import './Signup.css';
import Model from '../Model/Model';
import { FbSignUpData } from '../API/ApiCall';

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [password, setPassword] = useState('');
  const [combinedinput, setCombinedinput] = useState('');
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Check if combinedinput is a string and not empty
    if (typeof combinedinput === 'string' && combinedinput !== '') {
      // Split the input value by comma to separate mobile number and email address
      const [mobileNumber, email] = combinedinput.split(',');

      // Perform further actions with the mobileNumber and email values
      console.log('First Name:', firstname);
      console.log('Second Name:', secondname);
      console.log('Mobile Number:', mobileNumber);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Dob:',day,'-',month,'-',year);
      console.log('Gender:',gender);
    } else {
      // Handle empty or non-string input
      console.error('Combined input is empty or not a string.');
    }
  };

  //for dob
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

  console.log({day},{month},{year});


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  console.log("gender", { gender });

//for popup
  const [close, setClose] = useState(true)
  const closingHandler = () => {
    setClose(false)
  }

  const display=()=>{
    FbSignUpData({firstname, secondname,combinedinput,gender,day,month,year,password});
  }

  return (
    <div>
      {close && <Model hideHandler={closingHandler}>
        <div className='signup-main'>
          <div className='signup-container'>
            <div className='signup-header'>
              <h5 className='header-main'>Create a new account</h5>
              <p>It's quick and easy.</p>
            </div>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className='signup-contents'>

                <div className='sign-name'>
                  <div className='sign-name-one'>
                    <input
                      type='text'
                      placeholder='First name'
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required />
                  </div>&nbsp;
                  <div className='sign-name-one'>
                    <input
                      type='text'
                      placeholder='Second name'
                      value={secondname}
                      onChange={(e) => setSecondname(e.target.value)}
                      required />
                  </div>
                </div>

                <div className='sign-email'>
                  <input
                    type='text'
                    placeholder='Mobile number or Email address'
                    value={combinedinput}
                    onChange={(e) => setCombinedinput(e.target.value)}
                    required />
                </div>

                <div className='sign-password'>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>

                <div className='sign-dob'>
                  <p>Date of birth<HiQuestionMarkCircle style={{ height: 17, width: 19 }} /></p>
                  <div className='dob'>
                    <div className='dob-data'>
                      <select value={day} onChange={(e)=>setDay(e.target.value)} required >
                        <option value="">Day</option>
                        {days.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className='dob-data'>
                      <select value={month} onChange={(e) => setMonth(e.target.value)} required>
                        <option value="">Month</option>
                        {months.map(date => (
                          <option key={date.value} value={date.value}>
                            {date.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className='dob-data'>
                      <select  value={year} onChange={(e)=>setYear(e.target.value)} required>
                        <option value="">Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className='sign-gender'>
                    <p>Gender <HiQuestionMarkCircle style={{ height: 17, width: 19 }} /></p>
                    <div className='gender'>
                      <form action="">
                        <div className='gender-options'>
                          <label>
                            <input
                              type="radio"
                              value="male"
                              checked={gender === 'male'}
                              onChange={handleGenderChange}
                            />
                            Male
                          </label>
                        </div>

                        <div className='gender-options'>
                          <label>
                            <input
                              type="radio"
                              value="female"
                              checked={gender === 'female'}
                              onChange={handleGenderChange}
                            />
                            Female
                          </label>
                        </div>

                        <div className='gender-options'>
                          <label>
                            <input
                              type="radio"
                              value="other"
                              checked={gender === 'other'}
                              onChange={handleGenderChange}
                            />
                            Other
                          </label>
                        </div>
                      </form>
                    </div>

                  </div>

                </div>
                <p className='para-one'>People who use our services may have uploaded your contact informations to <br /> Facebook.<a href='#' style={{ textDecoration: 'none' }}>Learn More.</a></p>
                <p className='para-one'>By Clicking Sign Up,you agree to our <a href='#' style={{ textDecoration: 'none' }}>Terms , Privacy Policy</a>and <a href='#' style={{ textDecoration: 'none' }}>Cookies Policies</a>.<br />you may recieve SMS notification from us and can opt out at any time.</p>
                <div className='sign-button'>
                  <button type='submit' onClick={display}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Model>}
    </div>
  );
};

export default SignUp;