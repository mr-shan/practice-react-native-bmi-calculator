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

  return parseFloat(bmi.toFixed(2));
};
