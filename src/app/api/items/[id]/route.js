import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export async function GET(req, { params }) {
  const p = await params;
  const result = await dbConnect("coffees").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const p = await params;
  const result = await dbConnect("coffees").deleteOne({_id: new ObjectId(p.id)})

  return Response.json(result);
}
export async function PATCH(req, { params }) {
  const p = await params;
  const data =await req.json();
  const filter = {
    _id: new ObjectId(p.id),
  };
  const updatedDoc = {
    $set: {
      ...data,
    },
  };
  const result = await dbConnect("coffees").updateOne(filter, updatedDoc);

  return Response.json(result);
}
