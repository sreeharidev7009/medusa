import { ExecArgs } from "@medusajs/framework/types";
import { ProductStatus } from "@medusajs/framework/utils";
import {
  createProductCategoriesWorkflow,
  createProductsWorkflow,
} from "@medusajs/medusa/core-flows";

export default async function seedProductsOnly({ container }: ExecArgs) {
  const logger = container.resolve("logger");

  logger.info("Seeding product categories...");
  const { result: categoryResult } = await createProductCategoriesWorkflow(
    container
  ).run({
    input: {
      product_categories: [
        { name: "Shirts", is_active: true },
        { name: "Pants", is_active: true },
      ],
    },
  });

  const shirtsCategoryId = categoryResult.find((c) => c.name === "Shirts")!.id;
  const pantsCategoryId = categoryResult.find((c) => c.name === "Pants")!.id;

  logger.info("Seeding products...");
  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Demo Shirt",
          category_ids: [shirtsCategoryId],
          description: "Comfortable and stylish demo shirt.",
          handle: "demo-shirt",
          weight: 300,
          status: ProductStatus.PUBLISHED,
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png",
            },
          ],
          options: [{ title: "Size", values: ["S", "M", "L"] }],
          variants: [
            {
              title: "S",
              sku: "DEMO-SHIRT-S",
              options: { Size: "S" },
              prices: [{ amount: 2000, currency_code: "eur" }],
            },
            {
              title: "M",
              sku: "DEMO-SHIRT-M",
              options: { Size: "M" },
              prices: [{ amount: 2200, currency_code: "eur" }],
            },
          ],
        },
        {
          title: "Demo Pants",
          category_ids: [pantsCategoryId],
          description: "Comfy demo pants for daily wear.",
          handle: "demo-pants",
          weight: 400,
          status: ProductStatus.PUBLISHED,
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-back.png",
            },
          ],
          options: [{ title: "Size", values: ["M", "L"] }],
          variants: [
            {
              title: "M",
              sku: "DEMO-PANTS-M",
              options: { Size: "M" },
              prices: [{ amount: 3000, currency_code: "eur" }],
            },
            {
              title: "L",
              sku: "DEMO-PANTS-L",
              options: { Size: "L" },
              prices: [{ amount: 3200, currency_code: "eur" }],
            },
          ],
        },
      ],
    },
  });

  logger.info("Finished seeding products.");
}
