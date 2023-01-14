React Native Customisable OTP Input

## Features

- Supports any OTP Length (Defaults to 4)
- Small Package Size
- Auto Navigation back and forth between input fields
- React-Native CLI Support

## Documentation

[Documentation](https://linktodocumentation)

To install - run

```bash
  npm i @imthiyaz.muhd/rnotpinput
```

To Import to your project - run

```bash
  import OTPInput from "@imthiyaz.muhd/rnotpinput";
```

## Props

Keep a state in your Parent Component to make the OTP input a controlled Comoponent

- maxLength : Number of digits in your OTP

- code - getter from the useState hook (entered OTP is in it) -- Required

- setCode - setter from the useState hook -- Required

- error - Error to be shown as a text if any

## Authors

- [@imthiyazmuhammed](https://www.github.com/imthiyazmuhammed)
