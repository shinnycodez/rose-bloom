import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 3,
    title: "Jhumkas ˚⊹♡",
    imageUrl: "https://pbs.twimg.com/media/G0K1Lcda0AAXBGm?format=jpg&name=small",
    link: "Jhumkas"
  },
  {
    id: 1,
    title: "Stainless steel pendants ⋆｡𖦹°",
    imageUrl: "https://pbs.twimg.com/media/G0K1NaLXEAANi9u?format=jpg&name=small",
      link: "Stainless steel pendantss",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },

        {
    id: 5,
    title: "Stainless steel earings ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0K1_VtagAAJbnb?format=jpg&name=small",
     link: "Stainless steel earings"
  },
            {
    id: 5,
    title: "Stainless steel bracelets⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0K2DhLa0AAgy2V?format=jpg&name=small",
     link: "Stainless steel bracelets"
  },
              {
    id: 5,
    title: "Stainless steel rings⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0K2H3hbUAMT4gm?format=jpg&name=small",
     link: "Stainless steel rings"
  },
            {
    id: 5,
    title: "Bundles ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0K2ArjbUAU8gq5?format=jpg&name=small",
     link: "Bundles"
  },
                {
    id: 9,
    title: "Customised orders⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/G0K3EEXbUAYqjFv?format=jpg&name=small",
     link: "Customised orders"
  },
        {
    id: 2,
    title: "Watch Bundles ˚⋆𐙚｡",
    imageUrl: "https://pbs.twimg.com/media/G0K1PH_bUAQPppe?format=jpg&name=small",
      link: "Watch Bundles"
  },
      {
    id: 5,
    title: "Jewellery bouquets ｡°✩",
    imageUrl:"https://pbs.twimg.com/media/G0K1QljW4AACFWP?format=jpg&name=small",
     link: "Jewellery bouquets"
  },
        {
    id: 5,
    title: "Organisers ｡°✩",
    imageUrl:"https://pbs.twimg.com/media/G0kvOU2X0AAYrlM?format=jpg&name=small",
     link: "Organisers"
  },
          {
    id: 5,
    title: "Packing materials ｡°✩",
    imageUrl:"https://pbs.twimg.com/media/G0kvP0OXgAA_3yG?format=jpg&name=900x900",
     link: "Packing materials"
  },
  //       {
  //   id: 6,
  //   title: "Bag charms",
  //   imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/520244288_1267810474939004_9048492148598199566_n.png?stp=dst-png_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=neIk5TZGFm4Q7kNvwEuXfQ_&_nc_oc=AdmxJ4KDwZ-uqPdqouvocGIJ_PMCJuOMaF7ERpOXqSlLAudbRPv9J7oqkY8r3siKLZI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFMPcWh2mt2rXhc_FNIMeleWIzjCbZQawAV-wDep1F7MQ&oe=68A70F62"
  // },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;
