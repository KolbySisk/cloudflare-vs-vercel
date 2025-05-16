import ImageGrid from "@/components/image-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">
        Cloudflare
      </h1>
      <ImageGrid />
    </div>
  );
}
