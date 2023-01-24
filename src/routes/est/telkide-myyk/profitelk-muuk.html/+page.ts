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
                products_categories_by_pk(id: 16) {
                  products(order_by: {selling_price: asc}) {
                    title
                    selling_price
                    colors
                  }
                  products_categories_files {
                    directus_file {
                      filename_disk
                      title
                    }
                  }
                  name
                  title
                  image
                  description
                  title_tag
                  meta_description
                  keywords
                  title_og
                  description_og
                  image_og
                }
              }
            `
        }
        )
    });
    const json = await data.json();
    console.log(json.data.products_categories_by_pk);
    return {
        cms: json.data.products_categories_by_pk
    };
}