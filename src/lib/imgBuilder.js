import myConfiguredSanityClient from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

export default function urlFor(source) {
  return builder.image(source).auto("format");
}
