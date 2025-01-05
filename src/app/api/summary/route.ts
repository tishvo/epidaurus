export async function GET() {
  const data = [
    {
      ID: "123-xyz",
      Name: "Harry Potter",
      Status: "In Progress",
      Completeness: undefined,
      Confidence: undefined,
    },
    {
      ID: "345-BNH",
      Name: "Ron Weasley",
      Status: "In Progress",
      Completeness: undefined,
      Confidence: undefined,
    },
    {
      ID: "987-AID",
      Name: "Hermione Granger",
      Status: "In Progress",
      Completeness: undefined,
      Confidence: undefined,
    },
    {
      ID: "683-DHS",
      Name: "Albus Dumbledore",
      Status: "In Progress",
      Completeness: undefined,
      Confidence: undefined,
    },
    {
      ID: "496-ABC",
      Name: "Luna Lovegood",
      Status: "In Progress",
      Completeness: undefined,
      Confidence: undefined,
    },
    {
      ID: "128-BBD",
      Name: "Rubeus Hagrid",
      Status: "Extracted",
      Completeness: 25,
      Confidence: 85.98,
    },
    {
      ID: "459-CNN",
      Name: "Servenus Snape",
      Status: "Extracted",
      Completeness: 90,
      Confidence: 99.97,
    },
    {
      ID: "452-CBS",
      Name: "Darco Malfoy",
      Status: "Extracted",
      Completeness: 70,
      Confidence: 98.78,
    },
    {
      ID: "349-MSN",
      Name: "Ginny Weasley",
      Status: "Extracted",
      Completeness: 100,
      Confidence: 45.98,
    },
  ];
  return Response.json({ data });
}
