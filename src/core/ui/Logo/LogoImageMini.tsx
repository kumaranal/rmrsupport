import classNames from 'clsx';
import Image from 'next/image';
import React from 'react';
const LogoImageMini: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <>
      <Image
        className={classNames(`w-[40px] hidden dark:block`, className)}
        width={60}
        src={'/assets/images/rmr_logo_dark.svg'}
        height={30}
        alt="logo image"
      />
      <Image
        className={classNames(`w-[40px]  block dark:hidden`, className)}
        width={60}
        src={'/assets/images/rmr_logo_light.svg'}
        height={30}
        alt="logo image"
      />
    </>
  );
};
export default LogoImageMini;
