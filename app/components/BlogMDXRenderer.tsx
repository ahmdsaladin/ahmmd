"use client"
import { CustomMDX } from "./mdx";

export default function BlogMDXRenderer({ source }: { source: string }) {
  return <CustomMDX source={source} />;
} 