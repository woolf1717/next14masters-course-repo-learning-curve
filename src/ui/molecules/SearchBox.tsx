"use client";

import { type ChangeEvent, useState, useCallback, useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "@/svg/SearchIcon";
import { useDebounce } from "@/customHooks/useDebounce";

export const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString().replaceAll("+", "%20");
    },
    [searchParams]
  );

  const debouncedSearchInput = useDebounce(searchInput, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchFlag(true);
  };

  useEffect(() => {
    if (!debouncedSearchInput) return;
    if (searchFlag && searchInput === debouncedSearchInput) {
      router.push(
        `/search?${createQueryString("query", debouncedSearchInput)}`
      );
      setSearchFlag(false);
    }
  }, [
    debouncedSearchInput,
    createQueryString,
    router,
    searchFlag,
    searchInput,
  ]);

  return (
    <div className="w-full max-w-lg lg:max-w-xs">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </div>
        <input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
          className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400  focus-visible:outline-none"
        />
      </div>
    </div>
  );
};
