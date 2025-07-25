import dbConnect from "@/lib/dbConnect";


export async function GET() {
  const data = await dbConnect("plants").find({}).toArray();

  return Response.json({ data });
}
export async function POST(req) {
  const postData = await req.json();
  console.log(postData);
  const result= await dbConnect("plants").insertOne(postData)
 
  return Response.json(result);
}
