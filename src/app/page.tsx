'use client';

import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loading } from './loading';
import { List } from './list';

function GetCode() {
  const searchParams = useSearchParams();

  const list = List.reverse();
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState<any>(undefined);
  const [displayCode, setDisplayCode] = useState(false);
  const [loadingCode, setLoadingCode] = useState(false);
  const [displayLink, setDisplayLink] = useState(false);
  const [loadingLink, setLoadingLink] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const code = list.find((item) => item.id === searchParams.get('id'));
    setCode(code);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const showCode = () => {
    // window.open('https://poawooptugroo.com/4/8640111', 'blank');

    setLoadingCode(true);

    setTimeout(() => {
      setLoadingCode(false);
      setDisplayCode(true);
    }, 2000);
  };

  const showLink = () => {
    if (displayLink) {
      window.open(code?.link, 'blank');
      return;
    }

    // window.open('https://poawooptugroo.com/4/8640111', 'blank');
    setLoadingLink(true);

    setTimeout(() => {
      setLoadingLink(false);
      setDisplayLink(true);
    }, 2000);
  };

  const openLink = (link: string | undefined) => {
    window.open(link, '_blank');
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-lg m-auto">
      <div className="flex flex-col justify-center gap-8 p-6 h-auto">
        <h2 className="border-2 border-red-600 p-6 text-red-600 font-bold rounded-md">
          We need funding to maintain the website, so there will be some
          advertisements. We kindly ask for your understanding and support.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className='md:w-1/3'>
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

                {displayLink && (
                  <div
                    className="w-full h-12 border-white border text-white font-semibold text-sm text-center rounded-md flex justify-center items-center cursor-pointer"
                    onClick={() => openLink(code.link)}
                  >
                    {(!loadingLink && code?.link) || 'No link'}
                  </div>
                )}

                {!displayLink && (
                  <button
                    className="w-full h-12 border-white border text-white font-semibold text-lg rounded-md text-center   "
                    onClick={showLink}
                  >
                    {loadingLink && (
                      <div className="px-3 py-1 text-xs w-full h-12 font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-md animate-pulse">
                        <div className="w-ful h-full flex justify-center items-center">
                          <Loading />
                        </div>
                      </div>
                    )}
                    {!loadingLink && (
                      <div className="flex justify-center items-center gap-4">
                        Get Link
                      </div>
                    )}
                  </button>
                )}

                <a href="https://x.com/xuangiang497759" target="blank">
                  <button className="w-full h-12 border-white border text-white font-semibold text-lg rounded-md">
                    See More
                  </button>
                </a>
              </div>
            )}
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 py-4 px-4">
            {list.map((item) => (
              <button
                className="bg-white py-4 font-bold rounded-md text-sm text-black"
                key={item.id}
                onClick={() => window.open(item.link, 'blank')}
              >
                <span>{item.code}</span>
              </button>
            ))}
          </div>
        </div>
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
