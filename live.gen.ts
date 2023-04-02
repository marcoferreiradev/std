// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import { context } from "$live/live.ts";

import * as $0 from "deco-sites/std/functions/vtexConfig.ts";
import * as $1 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as $2 from "deco-sites/std/functions/vndaProductList.ts";
import * as $3 from "deco-sites/std/functions/vndaProductDetailsPage.ts";
import * as $4 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as $5 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as $6 from "deco-sites/std/functions/vtexNavbar.ts";
import * as $7 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as $8 from "deco-sites/std/functions/vtexProductList.ts";
import * as $9 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as $10 from "deco-sites/std/functions/vndaProductListingPage.ts";
import * as $11 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as $12 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as $13 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as $14 from "deco-sites/std/functions/shopifyProductList.ts";
import * as $15 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as $16 from "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts";
import * as $$0 from "deco-sites/std/accounts/vnda.ts";
import * as $$1 from "deco-sites/std/accounts/yourViews.ts";
import * as $$2 from "deco-sites/std/accounts/vtex.ts";
import * as $$3 from "deco-sites/std/accounts/shopify.ts";
import * as $$4 from "deco-sites/std/accounts/occ.ts";
import * as $$$$0 from "./routes/404.tsx";
import * as $$$$$$$$0 from "deco-sites/std/sections/configYourViews.global.tsx";
import * as $$$$$$$$1 from "deco-sites/std/sections/SEO.tsx";
import * as $$$$$$$$2 from "deco-sites/std/sections/SEOPLP.tsx";
import * as $$$$$$$$3 from "deco-sites/std/sections/configOCC.global.tsx";
import * as $$$$$$$$4 from "deco-sites/std/sections/configShopify.global.tsx";
import * as $$$$$$$$5 from "deco-sites/std/sections/configVNDA.global.tsx";
import * as $$$$$$$$6 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as $$$$$$$$7 from "deco-sites/std/sections/SEOPDP.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i1$0 from "$live/handlers/routesSelection.ts";
import * as i1$1 from "$live/handlers/router.ts";
import * as i1$2 from "$live/handlers/devPage.ts";
import * as i1$3 from "$live/handlers/fresh.ts";
import * as i1$$0 from "$live/pages/LivePage.tsx";
import * as i1$$$0 from "$live/sections/PageInclude.tsx";
import * as i1$$$$0 from "$live/matchers/MatchDate.ts";
import * as i1$$$$1 from "$live/matchers/MatchUserAgent.ts";
import * as i1$$$$2 from "$live/matchers/MatchSite.ts";
import * as i1$$$$3 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$4 from "$live/matchers/MatchRandom.ts";
import * as i1$$$$5 from "$live/matchers/MatchEnvironment.ts";
import * as i1$$$$6 from "$live/matchers/MatchAlways.ts";
import * as i1$$$$$0 from "$live/flags/audience.ts";
import * as i1$$$$$1 from "$live/flags/everyone.ts";

const manifest: DecoManifest = {
  "functions": {
    "deco-sites/std/functions/vtexConfig.ts": $0,
    "deco-sites/std/functions/vtexProductListingPage.ts": $1,
    "deco-sites/std/functions/vndaProductList.ts": $2,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": $3,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": $4,
    "deco-sites/std/functions/vtexSuggestions.ts": $5,
    "deco-sites/std/functions/vtexNavbar.ts": $6,
    "deco-sites/std/functions/shopifyProductListingPage.ts": $7,
    "deco-sites/std/functions/vtexProductList.ts": $8,
    "deco-sites/std/functions/occProductDetailsPage.ts": $9,
    "deco-sites/std/functions/vndaProductListingPage.ts": $10,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": $11,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": $12,
    "deco-sites/std/functions/vtexLegacyProductList.ts": $13,
    "deco-sites/std/functions/shopifyProductList.ts": $14,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": $15,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": $16,
  },
  "accounts": {
    "deco-sites/std/accounts/vnda.ts": $$0,
    "deco-sites/std/accounts/yourViews.ts": $$1,
    "deco-sites/std/accounts/vtex.ts": $$2,
    "deco-sites/std/accounts/shopify.ts": $$3,
    "deco-sites/std/accounts/occ.ts": $$4,
  },
  "routes": {
    "./routes/404.tsx": $$$$0,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/live/workbench.ts": $live_workbench,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect.ts": $live_inspect,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/[...catchall].tsx": $live_catchall,
  },
  "sections": {
    "deco-sites/std/sections/configYourViews.global.tsx": $$$$$$$$0,
    "deco-sites/std/sections/SEO.tsx": $$$$$$$$1,
    "deco-sites/std/sections/SEOPLP.tsx": $$$$$$$$2,
    "deco-sites/std/sections/configOCC.global.tsx": $$$$$$$$3,
    "deco-sites/std/sections/configShopify.global.tsx": $$$$$$$$4,
    "deco-sites/std/sections/configVNDA.global.tsx": $$$$$$$$5,
    "deco-sites/std/sections/configVTEX.global.tsx": $$$$$$$$6,
    "deco-sites/std/sections/SEOPDP.tsx": $$$$$$$$7,
    "$live/sections/PageInclude.tsx": i1$$$0,
  },
  "handlers": {
    "$live/handlers/routesSelection.ts": i1$0,
    "$live/handlers/router.ts": i1$1,
    "$live/handlers/devPage.ts": i1$2,
    "$live/handlers/fresh.ts": i1$3,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i1$$0,
  },
  "matchers": {
    "$live/matchers/MatchDate.ts": i1$$$$0,
    "$live/matchers/MatchUserAgent.ts": i1$$$$1,
    "$live/matchers/MatchSite.ts": i1$$$$2,
    "$live/matchers/MatchMulti.ts": i1$$$$3,
    "$live/matchers/MatchRandom.ts": i1$$$$4,
    "$live/matchers/MatchEnvironment.ts": i1$$$$5,
    "$live/matchers/MatchAlways.ts": i1$$$$6,
  },
  "flags": {
    "$live/flags/audience.ts": i1$$$$$0,
    "$live/flags/everyone.ts": i1$$$$$1,
  },
  "islands": {},
  "config": config,
  "baseUrl": import.meta.url,
};

context.namespace = "deco-sites/std";
context.siteId = 538;

export default manifest;
