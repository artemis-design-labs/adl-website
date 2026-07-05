import type { NextConfig } from "next";

// initOpenNextCloudflareForDev() was removed: getCloudflareContext() is not
// used in this codebase, and in @opennextjs/cloudflare ≥1.19 the call
// monkey-patches vm.runInContext() unconditionally on Node 22+, which
// corrupts 'use client' module evaluation during `next dev`.
const nextConfig: NextConfig = {};

export default nextConfig;
