interface regType {
  email: string,
  password: string,
  passwordConfirm: string,
  tcChecked: boolean,
}

interface regErrType {
  isError: boolean,
  message: string[]
}