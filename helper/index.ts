export const calculateBMI = (
  weightInKg: number,
  heightInMeters: number,
  age: number,
  gender: string
) => {
  if (weightInKg <= 0 || heightInMeters <= 0 || age <= 0) {
    throw new Error('Weight, height, and age must be positive numbers');
  }

  let bmi: number;
  if (gender === 'Male' && age >= 18) {
    bmi = weightInKg / (heightInMeters * heightInMeters);
  } else if (gender === 'Female' && age >= 18) {
    bmi = weightInKg / (heightInMeters * heightInMeters);
  } else if (age < 18) {
    // For individuals under 18, use age-specific BMI calculation
    bmi = weightInKg / (heightInMeters * heightInMeters);
  } else {
    throw new Error('Invalid age or gender');
  }

  const result = Math.round(bmi * 10) / 10

  return result;
};

interface IBmiCategoryData {
  type: string;
  background: string;
  textColor: string;
}

export const getBmiCategoryData = (bmi: number): IBmiCategoryData => {
  if (bmi <= 18.5) {
    return { type: 'Underweight', background: '#2db7c3', textColor: 'white' };
  } else if (bmi <= 24.9) {
    return { type: 'Healthy Weight', background: '#00bb6e', textColor: 'white' };
  } else if (bmi <= 29.9) {
    return { type: 'Overweight', background: '#ffc800', textColor: '#666' };
  } else {
    return { type: 'Obesity', background: '#f65858', textColor: 'white' };
  }
};

export const validateInputs = (age: number, weight: number, height: number) => {
  let errorMessage = ''
  if (!(age && height && weight)) {
    errorMessage = 'Please enter all the details.';
  }
  if (isNaN(age)) {
    errorMessage = 'The age you entered is not valid.';
  }
  if (isNaN(height)) {
    errorMessage = 'The height you entered is not valid.';
  }
  if (isNaN(weight)) {
    errorMessage = 'The weight you entered is not valid.';
  }
  return errorMessage;
}