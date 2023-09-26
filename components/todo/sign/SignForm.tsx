import authService from '@/api/auth/authApiService';
import { addToken } from '@/features/todo/todoSlicer';
import { checkEmailValid, checkPasswordValid } from '@/util/todo/checkInputValid';
import pathCheck from '@/util/todo/pathCheck';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SignForm() {
  const [email, setEmail] = useState({
    input: '',
    isValid: false,
  });
  const [password, setPassword] = useState({
    input: '',
    isValid: false,
  });
  const [buttonStatus, setButtonStatus] = useState(true);

  const router = useRouter();

  const pathName = usePathname();
  const pageName = pathCheck(pathName);

  const dispatch = useDispatch();

  const handleButtonStatus = useCallback((emailValid: boolean, passwordValid: boolean) => {
    const isButtonActive = !(emailValid && passwordValid);
    setButtonStatus(isButtonActive);
  }, []);

  const handleEmailInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const isEmailValid = checkEmailValid(inputValue);

      handleButtonStatus(isEmailValid, password.isValid);
      setEmail({
        input: inputValue,
        isValid: isEmailValid,
      });
    },
    [handleButtonStatus, password],
  );

  const handlePasswordInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const isPasswordValid = checkPasswordValid(inputValue);

      handleButtonStatus(email.isValid, isPasswordValid);
      setPassword({
        input: inputValue,
        isValid: isPasswordValid,
      });
    },
    [handleButtonStatus, email],
  );

  const handleAuthentication = async (emailValue: string, passwordValue: string, path: string | null) => {
    try {
      const endPoint = path?.split('/')[2];
      const response = await authService({ email: emailValue, password: passwordValue, endPoint });
      const statusCode = response?.status;
      if (statusCode === 201) {
        router.push('/todo/signin');
      }
      if (statusCode === 200) {
        const token = response?.data.access_token;
        localStorage.setItem('access_token', token);
        dispatch(addToken(token));
        router.replace('/todo/mytodo');
      }
    } catch (error) {
      alert('fail to authorize');
    }
  };

  return (
    <div>
      <div>
        <h1>{pageName}</h1>
      </div>
      <form>
        <div>
          <p>아이디</p>
          <input type="email" onChange={(e) => handleEmailInput(e)} value={email.input} />
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" onChange={(e) => handlePasswordInput(e)} value={password.input} />
        </div>
      </form>
      <div>
        <button
          type="button"
          onClick={() => handleAuthentication(email.input, password.input, pathName)}
          disabled={buttonStatus}
        >
          {pageName}
        </button>
      </div>
    </div>
  );
}
