const allData = [
  {
    ID: "123-xyz",
    Name: "Harry Potter",
    DOB: "2007-02-19",
    House: "Gryffindor",
  },
  {
    ID: "345-BNH",
    Name: "Ron Weasley",
    DOB: "2007-05-19",
    House: "Gryffindor",
  },
  {
    ID: "987-AID",
    Name: "Hermione Granger",
    DOB: "2007-07-19",
    House: "Gryffindor",
  },
  {
    ID: "683-DHS",
    Name: "Albus Dumbledore",
    DOB: "1907-02-19",
    House: "Gryffindor",
  },
  {
    ID: "496-ABC",
    Name: "Luna Lovegood",
    DOB: "2007-02-22",
    House: "Gryffindor",
  },
  {
    ID: "128-BBD",
    Name: "Rubeus Hagrid",
    DOB: "2000-02-19",
    House: "Gryffindor",
  },
  {
    ID: "459-CNN",
    Name: "Servenus Snape",
    DOB: "1900-02-19",
    House: "Slytherin",
  },
  {
    ID: "452-CBS",
    Name: "Darco Malfoy",
    DOB: "2005-02-19",
    House: "Slytherin",
  },
  {
    ID: "349-MSN",
    Name: "Ginny Weasley",
    DOB: "2003-02-19",
    House: "Gryffindor",
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const id = searchParams.get("id");

  const data = allData.find((i) => i.ID === id);

  return Response.json({ data });
}
