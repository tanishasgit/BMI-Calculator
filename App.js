import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [height, setHeight] = useState(170); // initial height in cm
  const [weight, setWeight] = useState(70); // initial weight in kg

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const getBMICategoryClass = (bmi) => {
    if (bmi < 18.5) return 'underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'normal-weight';
    if (bmi >= 25 && bmi <= 29.9) return 'overweight';
    return 'obese';
  };

  const bmi = calculateBMI();
  const bmiCategoryClass = getBMICategoryClass(bmi);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kgs</p>
        <input 
          className='input-slider' 
          type='range' 
          step='1' 
          min='40' 
          max='200' 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
        <p className='slider-output'>Height: {height} cms</p>
        <input 
          className='input-slider' 
          type='range' 
          step='1' 
          min='140' 
          max='220' 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>
      <div className='output-section'>
        <p>Your Body Mass Index is:</p>
        <p className='output'>{bmi}</p>
        <p className={`bmi-category ${bmiCategoryClass}`}>
          {bmiCategoryClass.replace('-', ' ')}
        </p>
      </div>
    </main>
  );
}

export default App;

