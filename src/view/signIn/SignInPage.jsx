import React from 'react';
import { signAPIs } from 'apis';

export default function SignInPage() {
  return (
    <div>
      <div>
        <a href={signAPIs.getGoogleSignIn()}>구글 로그인</a>
      </div>
      <div>
        <a href={signAPIs.getGithubSignIn()}>깃허브 로그인</a>
      </div>
    </div>
  );
}
