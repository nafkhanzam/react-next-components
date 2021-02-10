import {NextRouter, useRouter} from "next/router";

export const useSlug = (slugName: string, router?: NextRouter) => {
  const router2 = useRouter();
  if (!router) {
    router = router2;
  }
  const slugs = router.query[slugName];
  if (Array.isArray(slugs)) {
    return slugs[0];
  }
  return slugs;
};
