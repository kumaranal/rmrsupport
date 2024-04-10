import classNames from 'clsx';
import Image from 'next/image';
import React from 'react';
const LogoImage: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <>
      <Image
        className={classNames(` hidden dark:block`, className)}
        width={200}
        src={'/assets/images/rmrDark.svg'}
        height={40}
        alt="logo image"
      />
      <Image
        className={classNames(`block dark:hidden`, className)}
        width={200}
        src={'/assets/images/rmr.svg'}
        height={40}
        alt="logo image"
      />
    </>
  );
};
export default LogoImage;