import React from 'react';

const LoginMethods = ({ activeMethod, setActiveMethod }) => {
  return (
    <div className="flex gap-[2px] w-full bg-[#FAFAFA] border border-[#E9EAEB] rounded-lg">
      <button
        className={`w-[187px] md:w-[311px] font-bold text-xl flex justify-center items-center text-[#414651] py-4 rounded-lg ${
          activeMethod === 'SAAS' ? 'bg-[#1570EF] text-white' : ''
        }`}
        onClick={() => setActiveMethod('SAAS')}
      >
        SAAS
      </button>
      <button
        className={`w-[187px] md:w-[311px] font-bold text-xl flex justify-center items-center text-[#414651] py-4 rounded-lg ${
          activeMethod === 'Self Hosted' ? 'bg-[#1570EF] text-white' : ''
        }`}
        onClick={() => setActiveMethod('Self Hosted')}
      >
        Self Hosted
      </button>
    </div>
  );
};

export default LoginMethods;
