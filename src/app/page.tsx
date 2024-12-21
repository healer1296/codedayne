'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loading } from './loading';
import { List } from './list';

function GetCode() {
  const searchParams = useSearchParams();

  const list = List;
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
    window.open('https://luglawhaulsano.net/4/8640111', 'blank');

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

    window.open('https://luglawhaulsano.net/4/8640111', 'blank');
    setLoadingLink(true);

    setTimeout(() => {
      setLoadingLink(false);
      setDisplayLink(true);
    }, 2000);
  };

  const openLink = (link: string | undefined) => {
    window.open(link, 'blank');
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center gap-8 p-6 h-auto w-96 border border-black/60 rounded-md bg-white">
        <h2 className="border-2 border-red-600 p-6 text-red-600 font-bold rounded-md">
          We need funding to maintain the website, so there will be some
          advertisements. We kindly ask for your understanding and support.
        </h2>
        <h1 className="text-3xl font-semibold flex items-center justify-center gap-4">
          Get Code Here{' '}
          <Image
            aria-hidden
            src="/arrow-down.svg"
            alt="File icon"
            width={30}
            height={30}
            priority={false}
            className="animate-bounce"
          />
        </h1>

        {isLoading && (
          <div className="w-full flex justify-center">
            <Loading />
          </div>
        )}

        {!isLoading && (
          <div className="flex flex-col gap-6">
            {displayCode && (
              <div className="w-full h-12 bg-[#5b93eb] text-white font-semibold text-lg rounded-md flex justify-center items-center">
                {(!loadingCode && code?.code) || 'No code'}
              </div>
            )}

            {!displayCode && (
              <button
                className="w-full h-12 bg-[#5b93eb] text-white font-semibold text-lg rounded-md text-center   "
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
                className="w-full h-12 bg-[#5b93eb] text-white font-semibold text-sm text-center rounded-md flex justify-center items-center cursor-pointer"
                onClick={() => openLink(code.link)}
              >
                {(!loadingLink && code?.link) || 'No link'}
              </div>
            )}

            {!displayLink && (
              <button
                className="w-full h-12 bg-[#5b93eb] text-white font-semibold text-lg rounded-md text-center   "
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

            <a
              href="https://www.facebook.com/profile.php?id=61569861986626"
              target="blank"
            >
              <button className="w-full h-12 bg-[#5b93eb] text-white font-semibold text-lg rounded-md">
                See More
              </button>
            </a>
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
