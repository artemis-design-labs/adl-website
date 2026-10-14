import type { NextConfig } from "next";

// initOpenNextCloudflareForDev() was removed: getCloudflareContext() is not
// used in this codebase, and in @opennextjs/cloudflare ≥1.19 the call
// monkey-patches vm.runInContext() unconditionally on Node 22+, which
// corrupts 'use client' module evaluation during `next dev`.
const nextConfig: NextConfig = {
  // Dev only: lets a phone load the dev server over the LAN or a Cloudflare quick tunnel.
  allowedDevOrigins: ["192.168.1.247", "*.trycloudflare.com"],
};

export default nextConfig;
