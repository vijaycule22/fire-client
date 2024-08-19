

import { z } from 'zod';

const RetirementDetailsSchema = z.object({
  current_monthly_expenses: z.number({
    required_error: "Current monthly expenses must be provided.",
    invalid_type_error: "Current monthly expenses must be a number.",
  }),
  current_age: z
    .number({
      required_error: "Current age must be provided.",
      invalid_type_error: "Current age must be a number.",
    })
    .max(120, "Current age must be less than or equal to 120."),
  retirement_age: z.number({
    required_error: "Retirement age must be provided.",
    invalid_type_error: "Retirement age must be a number.",
  }),
  expected_life_span: z.number({
    required_error: "Expected life span must be provided.",
    invalid_type_error: "Expected life span must be a number.",
  }),
  current_investments: z.number({
    required_error: "Current investments must be provided.",
    invalid_type_error: "Current investments must be a number.",
  }),
  expected_inflation: z
    .number({
      required_error: "Expected inflation must be provided.",
      invalid_type_error: "Expected inflation must be a number.",
    })
    .min(0, "Expected inflation must be at least 0.")
    .max(10, "Expected inflation must be at most 1."),
  post_retirement_return: z
    .number({
      required_error: "Post-retirement return must be provided.",
      invalid_type_error: "Post-retirement return must be a number.",
    })
    .min(0, "Post-retirement return must be at least 0.")
    .max(20, "Post-retirement return must be at most 1."),
  pre_retirement_return: z
    .number({
      required_error: "Pre-retirement return must be provided.",
      invalid_type_error: "Pre-retirement return must be a number.",
    })
    .min(0, "Pre-retirement return must be at least 0.")
    .max(20, "Pre-retirement return must be at most 1."),
});

export default RetirementDetailsSchema;
