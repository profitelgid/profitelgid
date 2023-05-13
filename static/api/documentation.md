# API Documentation

## Authentication & endpoint

GraphQL Endpoint: https://apps.crewnew.com/v1/graphql

No authentication needed for everything that is publicly seen in the website. Request limitation is 10 requests per month. For higher rate limits and reseller pricing please do contact development@pvcfactory.ee

## Sample query

```
query GetProductsPaginated {
  products(limit: 10, offset: 0) {
    id
    title
    description
    comments
    status
    sort
    selling_price
    colors
    directus_file {
      filename_disk
      products_files {
        directus_file {
          filename_disk
        }
      }
    }
    delivery_cost
    date_updated
    products_category {
      name
    }
    supplierBySupplier {
      name
    }
    supplier_link
    supplier_price
    supplier_vat
    with_delivery
  }
}
```

## Query root

### products

category: Int

colors(path: String): json

comments: String

date_created: timestamptz

date_updated: timestamptz

delivery_cost: Int

description: String

directusUserByUserUpdated: directus_users
    An object relationship
    PVCfactory team member who updated the product last

directus_file: directus_files
    An object relationship
    All the other product images thna the main image

directus_user: directus_users
    An object relationship
    PVCfactory team member who added the product initially and whom to ask questions in a first place about the specific product

id: Int!
    ID number of the product to order

image: uuid
    The main image of the product

prod_cat_deliverycost: prod_cat_deliverycost
    An object relationship
    Delivery cost for specific product, product category, supplier & the percentage of the total cost of the delivery cost

products_category: products_categories
    An object relationship

products_files(
distinct_on: [products_files_select_column!]
limit: Int
offset: Int
order_by: [products_files_order_by!]
where: products_files_bool_exp
): [products_files!]!
An array relationship

products_files_aggregate(
distinct_on: [products_files_select_column!]
limit: Int
offset: Int
order_by: [products_files_order_by!]
where: products_files_bool_exp
): products_files_aggregate!
An aggregate relationship

products_orders(
distinct_on: [products_orders_select_column!]
limit: Int
offset: Int
order_by: [products_orders_order_by!]
where: products_orders_bool_exp
): [products_orders!]!
An array relationship

products_orders_aggregate(
distinct_on: [products_orders_select_column!]
limit: Int
offset: Int
order_by: [products_orders_order_by!]
where: products_orders_bool_exp
): products_orders_aggregate!
An aggregate relationship

status: String
    Draft, Published, Out of Stock, Archived

supplier: Int

supplierBySupplier: suppliers
    An object relationship

supplier_link: String

supplier_name: String

supplier_price: numeric

supplier_vat: numeric

title: String

user_created: uuid

user_updated: uuid

with_delivery: numeric
    Product cost with delivery to Zone 1 in Estonia

## products_categories

coating_material: String

date_created: timestamptz

date_updated: timestamptz

description: String

description_og: String

description_short: String

directusFileByImage: directus_files
    An object relationship

directusUserByUserUpdated: directus_users
    An object relationship

directus_file: directus_files
    An object relationship

directus_user: directus_users
    An object relationship

id: Int!

image: uuid

image_og: uuid

keywords(path: String): json

meta_description: String

name: String

parent_id: Int

products(

distinct_on: [products_select_column!]

limit: Int

offset: Int

order_by: [products_order_by!]

where: products_bool_exp
): [products!]!
    An array relationship

products_aggregate(
distinct_on: [products_select_column!]
limit: Int
offset: Int
order_by: [products_order_by!]
where: products_bool_exp
): products_aggregate!
    An aggregate relationship

products_categories(
distinct_on: [products_categories_select_column!]
limit: Int
offset: Int
order_by: [products_categories_order_by!]
where: products_categories_bool_exp
): [products_categories!]!
    An array relationship

products_categories_aggregate(
distinct_on: [products_categories_select_column!]
limit: Int
offset: Int
order_by: [products_categories_order_by!]
where: products_categories_bool_exp
): products_categories_aggregate!
    An aggregate relationship

products_categories_files(
distinct_on: [products_categories_files_select_column!]
limit: Int
offset: Int
order_by: [products_categories_files_order_by!]
where: products_categories_files_bool_exp
): [products_categories_files!]!
    An array relationship

products_categories_files_aggregate(
distinct_on: [products_categories_files_select_column!]
limit: Int
offset: Int
order_by: [products_categories_files_order_by!]
where: products_categories_files_bool_exp
): products_categories_files_aggregate!
    An aggregate relationship

products_category: products_categories
An object relationship

slug: String

sort: Int

status: String

title: String

title_og: String

title_tag: String

user_created: uuid

user_updated: uuid