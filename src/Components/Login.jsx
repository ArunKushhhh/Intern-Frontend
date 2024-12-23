import React, { useState } from 'react';
import Welcome from './Welcome';
import LoginMethods from './LoginMethods';
import LoginOptions from '../Components/LoginOption';
import PrivacyPolicy from './PrivacyPolicy';

const Login = () => {
  const [activeMethod, setActiveMethod] = useState('SAAS');

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-full bg-[#FAFAFA]">
      <div className="bg-white h-[602px] flex flex-col justify-start items-center border border-[#E9EAEB] rounded-xl">
        <div className="flex flex-col gap-5 px-4 py-9 border-b border-b-[#D5D7DA]">
          <Welcome />
          <LoginMethods activeMethod={activeMethod} setActiveMethod={setActiveMethod} />
        </div>
        <LoginOptions activeMethod={activeMethod} />
      </div>
      <PrivacyPolicy />
    </div>
  );
};

export default Login;
