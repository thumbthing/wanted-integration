function pathCheck(path: string | null) {
  const endPoint = path?.split('/')[2];

  if (endPoint === 'signin') {
    return '로그인';
  }
  if (endPoint === 'signup') {
    return '회원가입';
  }
  return null;
}

export default pathCheck;
