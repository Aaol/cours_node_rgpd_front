import { FormGroup, ValidatorFn } from '@angular/forms';

/** this control value must be equal to given control's value */
export function PasswordMatchValidator(targetKey: string, toMatchKey: string): ValidatorFn {
  return (group: FormGroup): {[key: string]: any} => {
    const target = group.controls[targetKey];
    const toMatch = group.controls[toMatchKey];
    console.log(target);
    console.log(toMatch);
    if (target.touched && toMatch.touched) {
      const isMatch = target.value === toMatch.value;
      console.log(isMatch);
      // set equal value error on dirty controls
      if (!isMatch && target.valid && toMatch.valid) {
        toMatch.setErrors({equalValue: targetKey});
        const message = targetKey + ' != ' + toMatchKey;
        return {'equalValue': message};
      }
      if (isMatch && toMatch.hasError('equalValue')) {
        toMatch.setErrors(null);
      }
    }
    return null;
  };
}
