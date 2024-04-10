'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '~/core/ui/Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '~/core/ui/drawer';
import SubHeading from '~/core/ui/SubHeading';

const FullScreenImage = () => {
  const [line1X, setLine1X] = useState(100);
  const [line2X, setLine2X] = useState(300);
  const [isDraggingLine1, setIsDraggingLine1] = useState(false);
  const [isDraggingLine2, setIsDraggingLine2] = useState(false);

  React.useEffect(() => {
    const handleMouseUp = () => {
      // End dragging
      if (isDraggingLine1) setIsDraggingLine1(false);
      if (isDraggingLine2) setIsDraggingLine2(false);
    };

    const handleMouseMove = (e: { clientX: React.SetStateAction<number>; }) => {
      // Update line position if dragging
      if (isDraggingLine1) {
        setLine1X(e.clientX);
      }
      if (isDraggingLine2) {
        setLine2X(e.clientX);
      }
    };

    // Attach event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingLine1, isDraggingLine2]);

  const startDraggingLine1 = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault(); // Prevent default action (like text selection)
    e.stopPropagation(); // Prevent the event from bubbling up to parent elements
    setIsDraggingLine1(true);
  };

  const startDraggingLine2 = (e: { preventDefault: () => void; stopPropagation: () => void; }) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingLine2(true);
  };

  return (
    <Drawer
      onDrag={(e: any) => e.preventDefault()}
      onRelease={(e: any) => e.preventDefault()}
    >
      <DrawerTrigger asChild>
        <Button variant={'ghost'} className={`mt-4`}>
          Click to view fullscreen
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed z-50 overflow-hidden h-screen">
        <DrawerFooter className="flex flex-row p-0 justify-between bg-inherit -mt-3 px-3 ">
          <DrawerClose asChild>
            <Button variant={'ghost'}>
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="ml-2">Close</span>
            </Button>
          </DrawerClose>
          <SubHeading>
            Drag the controls so they measure one second on the patient&apos;s
            ECG.
          </SubHeading>
          <Button variant={'default'}>CALIBRATE</Button>
        </DrawerFooter>
        {/* Use overflow-y-auto here if you have content that might extend vertically beyond the viewport */}
        <div>
          <div className="relative w-full h-screen">
            <Image
              src={'/assets/images/report.png'}
              alt="Report image"
              layout="fill"
              objectFit="fill"
              className="w-full"
            />
            <div
              className="absolute top-0 bg-red-500 h-full w-0.5 cursor-col-resize"
              style={{ left: `${line1X}px` }}
              onMouseDown={startDraggingLine1}
            ></div>
            <div
              className="absolute top-0 bg-red-500 h-full w-0.5 cursor-col-resize"
              style={{ left: `${line2X}px` }}
              onMouseDown={startDraggingLine2}
            ></div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FullScreenImage;
