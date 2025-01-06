"use client";

import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableOptions } from "./TableOptions";
import { useEffect, useState, useCallback } from "react";
import { formatPercent, removeCasing } from "../../lib/helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type TableData } from "@/lib/types";
import { TableSkeleton } from "./Skeletons";
import { TablePagination } from "./Pagination";

function getProgressBarStyles(percent: number | undefined): string | undefined {
  if (!percent) return undefined;

  const style = clsx({
    "w-2/12 bg-red-200": percent <= 20,
    "w-4/12 bg-red-200": percent > 20 && percent <= 40,
    "w-6/12 bg-red-200": percent > 40 && percent <= 60,
    "w-9/12 bg-orange-200": percent > 60 && percent <= 80,
    "w-10/12 bg-orange-200": percent > 80 && percent < 90,
    "w-full bg-green-200": percent >= 90 && percent <= 100,
  });
  return style;
}

export default function TableWithSearch() {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [filteredData, setFilteredData] = useState<TableData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("fetching table data...");
    fetch("../api/summary").then((response) => {
      response.json().then((jsonResponse) => {
        setTableData(jsonResponse.data);
        setFilteredData(jsonResponse.data);
        setIsLoading(false);
      });
    });
  }, []);

  const onSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Search is being executed; search term: ", e.target.value);
      if (!e.target.value) {
        setFilteredData(tableData);
      }
      const searchTerm = e.target.value.toLowerCase();

      const filtered = tableData.filter((row) => {
        return (
          removeCasing(row.ID).includes(searchTerm) ||
          removeCasing(row.Name).includes(searchTerm) ||
          removeCasing(row.Status).includes(searchTerm) ||
          row.Completeness?.toString().includes(searchTerm) ||
          row.Confidence?.toString().includes(searchTerm)
        );
      });
      setFilteredData(filtered);
    },
    [tableData]
  );

  const onFilterClick = () => {
    console.log("Filter button is clicked");
  };

  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
    <>
      <div className="flex justify-between mx-12 mb-5">
        <div className="w-[250px]">
          <Input
            className="bg-white"
            placeholder={`Search`}
            onChange={onSearchInput}
          />
        </div>
        <div>
          <Button
            className="bg-white text-cyan-900"
            onClick={onFilterClick}
            variant={"outline"}
          >
            Filter
          </Button>
        </div>
      </div>
      <div className="w-100 mx-12 mb-12">
        <Table className="overflow-scroll border-2">
          <TableHeader className="text-lg bg-indigo-50">
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-[175px]">Name</TableHead>
              <TableHead className="w-[125px]">Status</TableHead>
              <TableHead className="w-[125px]">Completeness</TableHead>
              <TableHead className="w-[125px]">Confidence</TableHead>
              <TableHead className="w-[125px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {filteredData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.ID}</TableCell>
                <TableCell>{data.Name}</TableCell>
                <TableCell>{data.Status}</TableCell>
                <TableCell>
                  <div className={getProgressBarStyles(data.Completeness)}>
                    {formatPercent(data.Completeness) ?? "N/A"}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx({
                    "text-red-700": data.Confidence && data.Confidence < 50,
                    "text-orange-600":
                      data.Confidence &&
                      data.Confidence >= 50 &&
                      data.Confidence < 90,
                    "text-green-700": data.Confidence && data.Confidence >= 90,
                  })}
                >
                  {data.Confidence ?? "N/A"}
                </TableCell>
                <TableCell>
                  <TableOptions id={data.ID} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-lg mt-1 flex justify-between">
          <div>{`Showing ${filteredData.length} of ${tableData.length} items`}</div>
          <div>
            <TablePagination />
          </div>
        </div>
      </div>
    </>
  );
}
