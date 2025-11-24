import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/ConnectToDB";
import Order from "@/models/OrderSchema";
import { isValidPhoneNumber } from "libphonenumber-js";

export async function POST(req: Request) {
  try {
    const order = await req.json();
    const { name, email, phone, service, description } = order;

    // Check for required fields
    if (!name || !email || !phone || !service || !description) {
      return NextResponse.json(
        { message: "Please fill out all fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate phone number
    try {
      // Check if phone number is valid
      if (!isValidPhoneNumber(phone)) {
        return NextResponse.json(
          { message: "Please enter a valid phone number." },
          { status: 400 }
        );
      }

      await connectToDB();
      const newOrder = await Order.create({
        name,
        email,
        phone,
        service,
        description,
      });

      if (newOrder) {
        return NextResponse.json(
          { message: "Order received, I'll reply soon!" },
          { status: 200 }
        );
      }
    } catch (phoneError) {
      return NextResponse.json(
        { message: "Please enter a valid phone number with country code." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { message: "Error sending order. Please try again." },
      { status: 500 }
    );
  }
}
