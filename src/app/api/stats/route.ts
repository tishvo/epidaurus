export async function GET() {
  const data = [
    {
      title: "Completed",
      count: 80,
      percent: 6,
      trend: "down",
    },
    {
      title: "In Progress",
      count: 10,
      percent: 6,
      trend: "down",
    },
    {
      title: "Not Started",
      count: 30,
      percent: 10,
      trend: "up",
    },
  ];
  return Response.json({ data });
}
