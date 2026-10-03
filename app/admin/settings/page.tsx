"use client";
import { GenericPanel } from "../shared";
export default function Page() { return <GenericPanel title="Settings" sub="Store, delivery, payments, taxes and roles." fields={["Store Name", "Support Phone", "Support Email", "Inside Dhaka Fee", "Outside Dhaka Fee", "bKash Number"]} />; }
