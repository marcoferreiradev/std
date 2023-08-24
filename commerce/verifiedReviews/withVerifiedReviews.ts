import type { LiveState, LoaderFunction } from "$live/types.ts";
import type {
  Product,
  ProductDetailsPage,
  ProductListingPage,
} from "../types.ts";
import { ConfigVerifiedReviews, createClient } from "./client.ts";
import type { Ratings } from "./types.ts";

export const addRatingsToProduct =
  (ratings: Ratings) => (product: Product): Product => {
    const productId = getProductId(product);
    const rating = ratings[productId][0];

    return {
      ...product,
      aggregateRating: rating
        ? {
          "@type": "AggregateRating",
          ratingCount: Number(rating.count),
          ratingValue: Number(parseFloat(rating.rate).toFixed(1)),
        }
        : undefined,
    };
  };

const getProductId = (product: Product) => product.isVariantOf!.productGroupID;

export const withVerifiedReviews = <
  Props,
  Data extends ProductDetailsPage | Product[] | ProductListingPage | null,
  Global extends { configVerifiedReviews: ConfigVerifiedReviews | undefined },
>(
  loader: LoaderFunction<Props, Data, LiveState<Global>>,
): LoaderFunction<Props, Data, LiveState<Global>> =>
async (req, ctx, props) => {
  const response = await loader(req, ctx, props);

  if (response.data == null) {
    return response;
  }

  if (!ctx.state.global.configVerifiedReviews) {
    console.error(
      "Missing configuration from YourViews instegration. Open Deco admin and set YourViews appId and token on global sections at Library",
    );

    return response;
  }

  const client = createClient(ctx.state.global.configVerifiedReviews);

  if (!client) return response;

  if (Array.isArray(response.data)) {
    const productsIds = response.data.map(getProductId);

    const ratings = await client.ratings({ productsIds });

    return {
      ...response,
      data: response.data.map(addRatingsToProduct(ratings)) as Data,
    };
  }

  if (response.data["@type"] === "ProductDetailsPage") {
    const productId = getProductId(response.data.product);

    const ratings = await client.rating({ productId });

    return {
      ...response,
      data: {
        ...response.data,
        product: addRatingsToProduct(ratings)(response.data.product),
      },
    };
  }

  if (response.data["@type"] === "ProductListingPage") {
    const productsIds = response.data.products.map(getProductId);

    const ratings = await client.ratings({ productsIds });

    return {
      ...response,
      data: {
        ...response.data,
        products: response.data.products.map(addRatingsToProduct(ratings)),
      },
    };
  }

  return response;
};
