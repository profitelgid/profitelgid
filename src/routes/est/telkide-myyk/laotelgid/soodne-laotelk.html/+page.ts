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
                products_categories_by_pk(id: 25) {
                  products(order_by: {selling_price: asc}) {
                    title
                    selling_price
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

    return {
        cms: json.data.products_categories_by_pk
    };
}