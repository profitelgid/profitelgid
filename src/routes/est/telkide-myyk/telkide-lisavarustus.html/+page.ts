/** @type {import('./$types').PageLoad} */

export async function load() {
  const data = await fetch('https://apps.crewnew.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query CategoryProducts {
        products_categories_by_pk(id: 10) {
          products(order_by: {sort: asc, selling_price: asc}) {
            title
            selling_price
            description
            colors
            image
          }
          products_category {
            name
            products_categories(order_by: {sort: asc}) {
              name
              slug
            }
          }
          title
          title_tag
          title_og
          meta_description
          keywords
          image_og
          description_og
          products_categories_files {
            directus_file {
              filename_disk
              title
            }
          }
        }
      }
          `
    }
    )
  });
  const json = await data.json();
  //console.log(json.data.products_categories_by_pk);

  return {
    cms: json.data.products_categories_by_pk
  };
}