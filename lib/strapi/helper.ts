import pluralize from "pluralize";

// Untuk mendapatkan URI dari backend (docker ip)
export function getStrapiURL(path: string) {
  return `http://localhost:1337/api${path}`;
}

// Digunakan untuk form dimana butuh public URI dari backend
export function getStrapiPublicURL(path: string) {
  return `https://icn-filkom.ub.ac.id/api/api${path}`;
}

export function getImageURL(path: string) {
  return `/api${path}`;
}

export function handleRedirection(preview: string, custom: string) {
  if (preview) {
    return {
      redirect: {
        destination: `/api/exit-preview`,
        permanent: false,
      },
    };
  } else if (custom) {
    return {
      redirect: {
        destination: `/${custom}`,
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
}

export function getData(
  slug: string,
  apiID: string,
  populate: string,
  preview: string
) {
  const previewParams = preview
    ? "&publicationState=preview&published_at_null=true"
    : "";

  let prefix = `/${pluralize(apiID)}`;
  const slugToReturn = `${prefix}/${slug}`;
  const apiUrl = `/${pluralize(
    apiID
  )}?filters[slug][$eq]=${slug}&populate[blocks][populate]=${populate}&populate=localizations&populate[seo][populate]=metaSocial.image`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}
