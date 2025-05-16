import ImageCard, { type Image } from "./image-card";

async function fetchImages() {
  "use cache";

  const res = await fetch(
    `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10) + 1}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch images");
  }

  return res.json() as Promise<Image[]>;
}

export default async function ImageGrid() {
  const images = await fetchImages();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <ImageCard key={image.id} image={image} priority={index < 12} />
      ))}
    </div>
  );
}
