'use client';

import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loading } from './loading';
import { List } from './list';
import { Actress } from './actress';
import { getRandomItem } from './random';
import Image from 'next/image';

function GetCode() {
  const searchParams = useSearchParams();

  const list: any = List.reverse();
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState<any>(undefined);
  const [displayCode, setDisplayCode] = useState(false);
  const [loadingCode, setLoadingCode] = useState(false);
  const [actress, setActress] = useState<any>();

  useEffect(() => {
    setIsLoading(true);

    const code = list.find((item: any) => item.id === searchParams.get('id'));
    setCode(code);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    setActress(getRandomItem(Actress));

    return () => clearTimeout(timeoutId);
  }, []);

  const showCode = () => {
    window.open('https://nanoushaks.net/4/8640111', 'blank');

    setLoadingCode(true);

    setTimeout(() => {
      setLoadingCode(false);
      setDisplayCode(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-lg m-auto">
      <div className="flex flex-col justify-center gap-8 p-6 h-auto">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div>
            <h1 className="mb-4 text-2xl font-semibold flex items-center justify-center gap-4 text-white">
              Get Code Here
            </h1>

            {isLoading && (
              <div className="w-full flex justify-center">
                <Loading />
              </div>
            )}

            {!isLoading && (
              <div className="flex flex-col gap-6">
                {displayCode && (
                  <div className="w-full h-12 border-white border  text-white font-semibold text-lg rounded-md flex justify-center items-center">
                    {(!loadingCode && code?.code) || 'No code'}
                  </div>
                )}

                {!displayCode && (
                  <button
                    className="w-full h-12 border-white border text-white font-semibold text-lg rounded-md text-center   "
                    onClick={showCode}
                  >
                    {loadingCode && (
                      <div className="px-3 py-1 text-xs w-full h-12 font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-md animate-pulse">
                        <div className="w-ful h-full flex justify-center items-center">
                          <Loading />
                        </div>
                      </div>
                    )}
                    {!loadingCode && 'Get Code'}
                  </button>
                )}

                <a href="https://x.com/TrungKinDng2" target="blank">
                  <button className="w-full h-12 border-white border text-white font-semibold text-lg rounded-md">
                    See More
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>

        {actress && (
          <div className="py-6 text-white">
            <h1 className="mb-6 text-center text-2xl font-bold">
              Random Actress
            </h1>
            <div className="md:flex md:gap-4">
              <div className="flex justify-center items-baseline md:block md:w-1/3">
                <img
                  src={actress?.avatar || ''}
                  alt="Actress Image"
                  className='w-full h-full'
                />
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:w-2/3">
                <p>
                  <strong>Name:</strong> {actress?.name}
                </p>
                <p>
                  <strong>DOB:</strong> {actress?.dob}
                </p>
                <p>
                  <strong>Nationality:</strong> {actress?.nationality}
                </p>
                <p>
                  <strong>Body:</strong> {actress?.body}
                </p>
                <p>
                  <strong>Hobby:</strong> {actress?.hobby}
                </p>
                <p>
                  <strong>Debut:</strong> {actress?.debut} -{' '}
                  {actress?.debut_code}
                </p>
                <p>
                  <strong>Code:</strong>{' '}
                  {actress?.some_code.toString().replace(/,/g, ', ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <GetCode></GetCode>
    </Suspense>
  );
}
