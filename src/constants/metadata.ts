export const defaultMetadata = {
  title: "gtfol - ai product studio",
  description:
    "we build software that go from 0 → 1, scale, and repeat.",
};

// TODO: update banner image
export const defaultOpenGraph = {
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  images: [
    {
      url: "https://gtfol.dev/banner.png",
      width: 600,
      height: 600,
      alt: "gtfol",
    },
  ],
};
