"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import clsx from "clsx";
import { Card, CardContent } from "@/components/ui/card";
import { proximaRegular, proximaBold } from "../../lib/fonts";
import { formatPercent } from "../../lib/helpers";
import { type Trend, type Stats } from "@/lib/types";
import { CardSkeleton } from "./Skeletons";

function getTrendIcon(trend: Trend) {
  if (trend === "up") {
    return <ArrowUp className="inline-block" color="green" />;
  }
  return <ArrowDown className="inline-block" color="red" />;
}

export default function Stats() {
  const [stats, setStats] = useState<Stats[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("fetching stats data...");
    fetch("../api/stats").then((response) => {
      response.json().then((jsonResponse) => {
        setStats(jsonResponse.data);
        setIsLoading(false);
      });
    });
  }, []);

  if (isLoading) {
    return <CardSkeleton/>
  }

  return (
    <div className="flex justify-center flex-wrap">
      {stats.map((stat, idx) => {
        return (
          <Card className="min-w-52 h-48" key={idx}>
            <CardContent>
              <div className="grid center gap-4">
                <div
                  className={`${proximaRegular.className} text-center text-cyan-900`}
                >
                  {stat.title}
                </div>
                <div
                  className={`${proximaBold.className} text-center text-cyan-900 text-5xl`}
                >
                  {stat.count}
                </div>
                <div className="text-center">
                  {getTrendIcon(stat.trend)}{" "}
                  <span
                    className={clsx({
                      "text-red-500": stat.trend === "down",
                      "text-green-700": stat.trend === "up",
                    })}
                  >
                    {formatPercent(stat.percent)}
                  </span>{" "}
                  from last week
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
