import React from 'react';
import Heading from '~/core/ui/Heading';
import ReadingTab from './ReadingTab';
import { tableData } from './data';

export interface DataItem {
  id: string;
  patientName: string;
  doctorName: string;
  readingType:
    | 'Normal Report'
    | 'Abnormal Report'
    | 'InProgress'
    | 'Open'
    | 'Uninterpretable';
  reportStatus: 'InProgress' | 'Open' | 'Complete';
  date: string;
}

// Your data array

function groupByReadingType(data: DataItem[]) {
  return data.reduce(
    (acc, item) => {
      const key = [
        'Abnormal Report',
        'Normal Report',
        'Uninterpretable',
      ].includes(item.readingType)
        ? 'Complete'
        : item.readingType;
      (acc[key] = acc[key] || []).push(item);
      return acc;
    },
    {} as Record<string, DataItem[]>,
  );
}

const ReadingSections = () => {
  const groupedData = groupByReadingType(tableData);

  return (
    <div>
      {Object.entries(groupedData).map(([readingType, items]) => (
        <section key={readingType}>
          <Heading type={3} className="mt-4 ">
            {readingType === 'InProgress' ? 'In-Progress' : readingType}
          </Heading>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <ReadingTab item={item} key={item.id} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ReadingSections;
