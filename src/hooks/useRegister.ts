import { useState, useEffect, useRef } from 'react';

const useRegister = () => {
  const [regData, setRegData] = useState<regType>({
    email: '',
    password: '',
    passwordConfirm: '',
    tcChecked: false,
  });
  const [errors, setErrors] = useState<string[]>(['']);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertContent, setAlertContent] = useState({
    header: '',
    subheader: '',
    message: '',
  });

  const handleRegChange = (event: any) => {
    const { name, value, checked } = event.target;
    setRegData((prev) => ({
      ...prev,
      [name]: name === 'tcChecked' ? checked : value,
    }));
  };

  const handleRegSubmit = (event: any) => {
    event.preventDefault();
    setErrors([]);
    setAlertContent({
      header: '',
      subheader: '',
      message: '',
    });
    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (emailRegex.test(regData.email) === false) {
      setErrors((prev) => ([...prev, 'Invalid email!']));
    }
    if (regData.password.length < 8 || regData.passwordConfirm.length < 8) {
      setErrors((prev) => ([...prev, 'Passwords must be 8 characters or longer!']));
    }
    if (regData.password !== regData.passwordConfirm) {
      setErrors((prev) => ([...prev, 'Passwords didn\'t match!']));
    }
    if (regData.tcChecked === false) {
      setErrors((prev) => ([...prev, 'Please check the box!']));
    }
  };

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current === true) {
      isFirstRun.current = false;
      return;
    }

    if (errors.length > 0) {
      setAlertContent({
        header: 'Error',
        subheader: 'Form validation failed!',
        message: errors.join('<br/>'),
      });
    } else {
      setAlertContent({
        header: 'Success',
        subheader: 'Form validation passed!',
        message: `Welcome tho the club, ${regData.email}!`,
      });
    }
    setShowAlert(true);
    // eslint-disable-next-line
  }, [errors]);

  return {
    regData,
    handleRegChange,
    handleRegSubmit,
    showAlert,
    setShowAlert,
    alertContent,
  }

}

export default useRegister;