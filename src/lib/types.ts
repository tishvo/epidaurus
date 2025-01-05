export type Trend = "up" | "down";

export type Stats = {
  title: string;
  count: number;
  percent: number;
  trend: Trend;
};

export type TableData = {
  ID: string;
  Name: string;
  Status: string;
  Completeness: number | undefined;
  Confidence: number | undefined;
};

export type DetailData = {
  ID: string;
  Name: string;
  DOB: string;
  House: string;
  Age: number;
};
