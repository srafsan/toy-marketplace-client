import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <div>
      <div className="my-16 text-center">
        <h1 className="text-5xl font-bold">OUR GALLERY</h1>
      </div>
      <div data-aos="fade-right" className="grid grid-cols-3 gap-4">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
