import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAYERA | แดชบอร์ดอุตสาหกรรมไม้อัดและวัสดุแผ่น" },
      { name: "description", content: "รายงานวัตถุดิบ การผลิต คุณภาพ และการขายของ LAYERA" },
      { property: "og:title", content: "LAYERA | แดชบอร์ดอุตสาหกรรมไม้อัดและวัสดุแผ่น" },
      { property: "og:description", content: "รายงานวัตถุดิบ การผลิต คุณภาพ และการขายของ LAYERA" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      className="block h-dvh w-full border-0 bg-background"
      src="/dashboard.html"
      title="LAYERA dashboard"
    />
  );
}
