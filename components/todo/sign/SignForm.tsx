import { checkEmailValid, checkPasswordValid } from '@/util/todo/checkInputValid';
import pathCheck from '@/util/todo/pathCheck';
import { usePathname } from 'next/navigation';
import { ChangeEvent, useCallback, useState } from 'react';

export default function SignForm() {
  const [email, setEmail] = useState({
    input: '',
    isValid: false,
  });
  const [password, setPassword] = useState({
    input: '',
    isValid: false,
  });

  const handleEmailInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isEmailValid = checkEmailValid(inputValue);

    setEmail({
      input: inputValue,
      isValid: isEmailValid,
    });
  }, []);

  const handlePasswordInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isPasswordValid = checkPasswordValid(inputValue);

    setPassword({
      input: inputValue,
      isValid: isPasswordValid,
    });
  }, []);

  const signIn = () => {
    console.log('sign in');
  };

  const signUp = () => {
    console.log('sign up');
  };

  const pathName = usePathname();

  const pageName = pathCheck(pathName);

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
        <button type="button" onClick={signIn}>
          로그인
        </button>
        <button type="button" onClick={signUp}>
          회원가입
        </button>
      </div>
    </div>
  );
}
