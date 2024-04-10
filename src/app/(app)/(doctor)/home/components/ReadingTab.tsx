import React from 'react';
import Heading from '~/core/ui/Heading';
import Image from 'next/image';
import {
  FaceSmileIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Badge from '~/core/ui/Badge';

interface DataItem {
  id: string;
  patientName: string;
  doctorName: string;
  readingType: string;
  date: string; // Or use Date for actual Date objects
}

const ReadingTab = ({ item }: { item: DataItem }) => {
  const iconProps = {
    className: 'h-6 w-6',
  };

  return (
    <Link href={`home/${item.id}`}>
      <div
        className={`flex justify-between cursor-pointer mt-6 border-l-4 items-center p-5  overflow-hidden border   hover:scale-105 transition-all ${item.readingType === 'Normal Report' ? 'border-green-600' : item.readingType === 'Abnormal Report' ? 'border-red-700' : item.readingType === 'InProgress' ? 'border-sky-700' : item.readingType === 'Open' ? 'border-gray-700' : 'border-yellow-700'}`}
      >
        <div className="p-0.5">
          <div>
            <Heading type={4} className="font-normal">
              {item.patientName}
            </Heading>
            <div className="flex flex-row space-x-2 items-center mt-2">
              <Image
                className={`rounded-full p-0.5 border ${item.readingType === 'Normal Report' ? 'border-green-500' : item.readingType === 'Abnormal Report' ? 'border-red-700' : item.readingType === 'InProgress' ? 'border-sky-700' : item.readingType === 'Open' ? 'border-gray-700' : 'border-yellow-700'}`}
                width={24}
                src={'/assets/images/userIcon.png'}
                height={24}
                alt="logo image"
              />
              <Heading type={6}>{item.doctorName}</Heading>
            </div>
          </div>
        </div>
        <div className="text-right mt-2">
          <Badge
            size={'small'}
            color={'custom'}
            className={`  h-8 flex justify-center ${item.readingType === 'Normal Report' ? 'bg-green-700' : item.readingType === 'Abnormal Report' ? 'bg-red-900' : item.readingType === 'InProgress' ? 'bg-sky-700' : item.readingType === 'Open' ? 'bg-gray-700' : item.readingType === 'Open' ? 'bg-gray-700' : 'bg-yellow-700'}`}
          >
            <div className="">
              {item.readingType === 'Normal Report' && (
                <FaceSmileIcon
                  {...iconProps}
                  className={`${iconProps.className} text-primary-100`}
                />
              )}
              {item.readingType === 'Open' && (
                <Image
                  width={18}
                  src={'/assets/images/openStatus.svg'}
                  height={18}
                  alt="report icon"
                />
              )}
              {item.readingType === 'Abnormal Report' && (
                <ShieldExclamationIcon
                  {...iconProps}
                  className={`${iconProps.className} text-red-100`}
                />
              )}
              {item.readingType === 'InProgress' && (
                <Image
                  width={18}
                  src={'/assets/images/progressStatus.svg'}
                  height={18}
                  alt="report icon"
                />
              )}
              {item.readingType === 'Uninterpretable' && (
                <Image
                  width={18}
                  src={'/assets/images/recycle.svg'}
                  height={18}
                  alt="report icon"
                />
              )}
            </div>
            <div
              className={`text-sm	 ${item.readingType === 'Normal Report' ? 'text-green-50' : item.readingType === 'Abnormal Report' ? 'text-red-50' : item.readingType === 'InProgress' ? 'text-sky-50' : 'text-yellow-50'}`}
            >
              {item.readingType}
            </div>
          </Badge>

          <div className={`text-sm mt-1 `}>{item.date}</div>
        </div>
      </div>
    </Link>
  );
};

export default ReadingTab;
