'use client';
import React from 'react';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '~/core/ui/DataTable';
import { tableData } from './data';
import {
  FaceSmileIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';
import Badge from '~/core/ui/Badge';
import Image from 'next/image';

const iconProps = {
  className: 'h-6 w-6',
};

const TABLE_COLUMNS: ColumnDef<any>[] = [
  {
    header: 'Date',
    cell: ({ row }) => {
      const { date, id } = row.original;
      return (
        <Link className={' hover:underline'} href={`home/${id}`}>
          {date}
        </Link>
      );
    },
  },
  {
    header: 'Patient Name',
    id: 'patient_Name',
    cell: ({ row }) => {
      const { patientName } = row.original;
      return <span className={'truncate max-w-[50px]'}>{patientName}</span>;
    },
  },
  {
    header: 'Doctor Name',
    id: 'email',
    cell: ({ row }) => {
      const { doctorName } = row.original;
      return <span className={'truncate max-w-[50px]'}>{doctorName}</span>;
    },
  },
  {
    header: 'Report Status',
    id: 'reportStatus',
    cell: ({ row }) => {
      const { reportStatus } = row.original;

      return <span className={'truncate max-w-[50px]'}>{reportStatus}</span>;
    },
  },
  {
    header: 'Reading Status',
    id: 'report_Status',
    cell: ({ row }) => {
      const { readingType } = row.original;
      return (
        <div className="truncate max-w-36">
          <Badge
            size={'small'}
            color={'custom'}
            className={`  h-8 w-auto flex justify-center ${readingType === 'Normal Report' ? 'bg-green-700' : readingType === 'Abnormal Report' ? 'bg-red-900' : readingType === 'InProgress' ? 'bg-sky-700' : readingType === 'Open' ? 'bg-gray-700' : readingType === 'Open' ? 'bg-gray-700' : 'bg-yellow-700'}`}
          >
            <div className="">
              {readingType === 'Normal Report' && (
                <FaceSmileIcon
                  {...iconProps}
                  className={`${iconProps.className} text-primary-100`}
                />
              )}
              {readingType === 'Open' && (
                <Image
                  width={18}
                  src={'/assets/images/openStatus.svg'}
                  height={18}
                  alt="report icon"
                />
              )}
              {readingType === 'Abnormal Report' && (
                <ShieldExclamationIcon
                  {...iconProps}
                  className={`${iconProps.className} text-red-100`}
                />
              )}
              {readingType === 'InProgress' && (
                <Image
                  width={18}
                  src={'/assets/images/progressStatus.svg'}
                  height={18}
                  alt="report icon"
                />
              )}
              {readingType === 'Uninterpretable' && (
                <Image
                  width={18}
                  src={'/assets/images/recycle.svg'}
                  height={18}
                  alt="report icon"
                />
              )}
            </div>
            <div className={`text-xm text-yellow-50`}>{readingType}</div>
          </Badge>
        </div>
      );
    },
  },
];
const ReadingTable = () => {
  return (
    <div>
      <DataTable data={tableData} columns={TABLE_COLUMNS} />
    </div>
  );
};

export default ReadingTable;
