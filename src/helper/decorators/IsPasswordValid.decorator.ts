import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsPasswordValidConstraint implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    if (typeof value !== 'string') return false; // بررسی نوع داده

    // حداقل طول ۶ کاراکتر
    if (value.length < 6) return false;

    // باید شامل حداقل یک عدد، یک حرف و یک کلمه باشد
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    const hasWord = /\w+/; // برای اطمینان از اینکه حداقل یک کلمه (حروف یا اعداد) در آن وجود دارد

    return hasNumber.test(value) && hasLetter.test(value) && hasWord.test(value);
  }

  defaultMessage(): string {
    return 'Password must contain at least one letter, one number, and one word with a minimum length of 6 characters.';
  }
}

// دکوراتور سفارشی
export function IsPasswordValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPasswordValidConstraint,
    });
  };
}
