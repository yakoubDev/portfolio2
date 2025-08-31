import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/ConnectToDB";
import Order from "@/models/OrderSchema";

export async function POST(req: Request) {
  try {
    const order = await req.json();
    const { name, email, phone, service, description } = order;
    if (!name || !email || !phone || !service || !description)
      return NextResponse.json(
        { message: "Please fill out all fields." },
        { status: 400 }
      );
    await connectToDB();
    const newOrder = await Order.create({
      name,
      email,
      phone,
      service,
      description,
    });

    if (newOrder)
      return NextResponse.json(
        { message: "Order recieved, i'll reply soon !" },
        { status: 200 }
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending order..." },
      { status: 500 }
    );
  }
}
