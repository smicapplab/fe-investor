import { z } from 'zod';

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
const mobileRegex = /^\d{10,}$/;

const password = z
	.string()
	.min(8, 'Password must be at least 8 characters long')
	.max(50, 'Password must be less than 50 characters long')
	.refine((val) => passwordRegex.test(val), {
		message:
			'Password must include at least 1 upper case letter, 1 lower case letter, 1 number, and 1 special character'
	});

const mobile = z.string().refine((val) => mobileRegex.test(val), {
	message: 'Mobile number must be at least 10 numeric digits'
});

export const loginFormSchema = z.object({
	email: z.string().email('Please enter a valid email address so we can reach you.').min(2).max(50),
	password
});

export const registrationFormSchema = z.object({
	firstName: z.string().min(2, 'Please enter your first name'),
	lastName: z.string().min(2, 'Please enter your last name'),
	email: z.string().email('Please enter a valid email address so we can reach you.').min(2).max(50),
	password,
	mobile
});
