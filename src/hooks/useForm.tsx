import {useState, useEffect} from 'react';

interface FieldsErrors {
  email?: string;
  name?: string;
  confirmPassword?: string;
  password?: string;
}

interface StateProperties {
  [key: string]: any;
}

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState<StateProperties>(initState);
  const [errors, setErrors] = useState<FieldsErrors>({});

  const reset = () => {
    setState(initState);
    setErrors({});
  };

  const validateField = (value: string, field: keyof T) => {
    switch (field) {
      case 'name':
        const nameTested = !/^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,})$/.test(
          value,
        );

        if (nameTested) {
          setErrors({
            ...errors,
            name: 'ingrese el nombre si numeros o caracteres especiales',
          });
        } else {
          delete errors.name;
          setErrors({
            ...errors,
          });
        }
        break;
      case 'email':
        const emailTested =
          !/^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/.test(
            value,
          );

        if (emailTested) {
          setErrors({
            ...errors,
            email: 'Email Invalido!',
          });
        } else {
          delete errors.email;
          setErrors({
            ...errors,
          });
        }
        break;
      case 'password':
        if (value.length <= 5) {
          setErrors({
            ...errors,
            [field]: 'El formato de la contraseña es invalido',
          });
        } else if (state.confirmPassword && value !== state.confirmPassword) {
          setErrors({
            ...errors,
            [field]: 'La contraseña no coincide',
          });
        } else {
          delete errors.password;
          setErrors({
            ...errors,
          });
        }
        break;

      case 'confirmPassword':
        if (value.length <= 5) {
          setErrors({
            ...errors,
            [field]: 'El formato de la contraseña es invalido',
          });
        } else if (value !== state.password) {
          setErrors({
            ...errors,
            [field]: 'La contraseña no coincide',
          });
        } else {
          delete errors.confirmPassword;
          setErrors({
            ...errors,
          });
        }
        break;
    }
  };

  const onChange = (value: string, field: keyof T) => {
    validateField(value, field);

    setState({
      ...state,
      [field]: value,
    });
  };

  useEffect(() => {
    const resetForm = () => {
      reset();
    };
    resetForm();
    return () => resetForm();
  }, []);

  return {
    form: state,
    errors,
    onChange,
    reset,
  };
};
