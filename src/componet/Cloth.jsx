import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cloth() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  const products = [
    {
      title: "T-Shirt",
      price: "$25.99 ",
      quality: "Premium Cotton",
      category: "Casual Wear",
      description: "A stylish and comfortable T-shirt perfect for any casual outing.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHJwhhQz0ukrW2LxitAv4hJC6guqBMUzlYOpuZxWK20VKYngftHppLF0kataT4fSttJE&usqp=CAU",
    },
    {
      title: "Jeans",
      price: "$49.99",
      quality: "Regular Fit",
      category: "Pants",
      description: "High-quality jeans with a perfect fit for your everyday look.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfO0D0ctjTh-yz02ke3LDaZtvH8RSTzObmw&s",
    },
    {
      title: "Striped T-Shirt",
      price: "$22.99",
      quality: "Breathable Fabric",
      category: "Casual Wear",
      description: "Classic striped T-shirt with a modern twist, ideal for casual outings.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWI2RChQ1k8fXU_pfOtI866258iqti_WJ2HTAoVh_p7qjRYtBS8fPNLOw-gvLMdX3unQ&usqp=CAU",
    },
    {
      title: "Henley Shirt",
      price: "$27.99",
      quality: "Breathable Fabric",
      category: "Casual Wear",
      description: "A modern Henley shirt with a comfortable fit for everyday wear.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyJPLS57khlVnMrXIwx2nFFxq39SoRgrcKODoY2uw3TI-TbA7qbSkfBOlyeyCStju6yU&usqp=CAU",
    },
    {
      title: "V-Neck T-Shirt",
      price: "$23.99",
      quality: "100% Cotton",
      category: "Casual Wear",
      description: "A classic V-neck T-shirt with a slim fit, perfect for a clean and casual look.",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQW2NWtmxlfSKGdlVgm2i8VGeuX75e2ZbOUVZ_eYArwNoQ2eheXWZsIqRxHElvG9uRw2AYX_9khUKBkj-XblpbCU6q-aVnHRshKcGFcNFTifa_f61_iEhZp7eE&usqp=CAE",
    },

    {
      title: "Graphic Tee",
      price: "$29.99",
      quality: "Soft Cotton Blend",
      category: "Casual Wear",
      description: "A trendy graphic T-shirt with eye-catching prints, perfect for everyday style.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-F3cG4lgaff4vTCqlLjW7UIj0rnboc7vs9gH326Cy8J9-ExmfpIjViIJYQgsJJMkVgY&usqp=CAU",
    },
    {
      title: "Graphic T-Shirt",
      price: "$24.99",
      quality: "Soft Cotton",
      category: "Casual Wear",
      description: "Trendy graphic T-shirt with a bold design, perfect for everyday style.",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCg4ZjlXXqmp9PzjzDU4F6I5vUlbKeyDnU1J9WQgIc7QXFYdS-6Zm3dbItOzEtfEu4gqo37c7ym8afp6i7EqFOoLAqH_7R_yHP_hiP_yhlF4ZYeM6QMXid&usqp=CAE",
    },
    {
      title: "V-Neck T-Shirt",
      price: "$27.99",
      quality: "Premium Stretch Cotton",
      category: "Casual Wear",
      description: "Sleek V-neck T-shirt with a tailored fit for a sharp casual look.",
      img: "https://i.ebayimg.com/images/g/hioAAOSwNmJmO2Wn/s-l400.jpg",
    },
    {
      title: "Jacket",
      price: "$89.99",
      quality: "Waterproof",
      category: "Outerwear",
      description: "A sleek and durable jacket designed to keep you warm and stylish.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL939Sw043WprQ82EATWV-bxAngH670gpmKQ&s",
    },
    {
      title: "Formal Shirt",
      price: "$39.99",
      quality: "Cotton Blend",
      category: "Casual Wear",
      description: "A perfect formal shirt that combines style and comfort.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPaH5dHqu8lcymUCO-omUvR9B9nEukuQiGlLf0XeJrRurmV0HTYSTS9N2cDBeGIEGGq4&usqp=CAU",
    },
    {
      title: "Polo Shirt",
      price: "$35.99",
      quality: "Cotton Blend",
      category: "Casual Wear",
      description: "This comfortable polo shirt features a timeless design with a breathable fabric",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-8fZpWGX4bPZt4NN_Fdl8qVQAE7dx1oQn7f2fwhVLsab5cwbBIs3shPL33Cr6zdVe7Q&usqp=CAU",
    },
    {
      title: "Chinos",
      price: "$39.99",
      quality: "Slim Fit",
      category: "Pants",
      description: "Stylish and comfortable chinos, perfect for work or casual outings.",
      img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:62c4e15e-2949-41a9-a627-16ffd054a74f/as/EID-bb8f6fe70b51b47ddc4d5057b18834306ae95485.jpg?width=450&height=675&preferwebp=true",
    },
    {
      title: "Jogger Pants",
      price: "$34.99",
      quality: "Comfort Fit",
      category: "Pants",
      description: "Lightweight jogger pants, perfect for lounging or casual outings.",
      img: "https://i.ebayimg.com/images/g/SFoAAOSwv5NkWiy1/s-l1200.jpg",
    },
    {
      title: "Cargo Pants",
      price: "$44.99",
      quality: "Regular Fit",
      category: "Pants",
      description: "Durable cargo pants with plenty of pockets for all your essentials.",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6Eta4A5R8e3roB6SAgvlCxNRnwGL3wv8DMTakKJBdO-lZwi4dP0WyUG127pr0utmscwvoH83a27soG6sYjgF3RIOnEsfneMwXb2ryjnziQuoQIpjDmzfj&usqp=CAE",
    },
    {
      title: "Slim Fit Jeans",
      price: "$54.99",
      quality: "Slim Fit",
      category: "Pants",
      description: "Modern slim-fit jeans designed for a sleek, stylish appearance.",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSx96VS3011n-UYWk4AqWLNFsenairewxn8V13vOazTdfKBYQtWbxDrRMwRqv6ZiwOImYiebGwM41iIwhK8NLJ47_ZF7cryxbZtV_vJulyTUV4RwSKDZzkqgdccaDAI_5LVEeQcZ7w&usqp=CAc",
    },

    {
      title: "Hoodie",
      price: "$59.99",
      quality: "Fleece Lined",
      category: "Winter Wear",
      description: "Cozy and warm hoodie, perfect for chilly days.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfq_WpBkCOpUtKDcBjx9casIwsZ4OwK6owIw&s",
    },
    {
      title: "Floral Dress",
      price: "$45.99",
      quality: "Soft Cotton Fabric",
      category: "Clothing",
      description: "Elegant floral dress for a charming look.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbFznUR7_tJeR-jSIkraksWm2ySA1OOxA7deiR2qamdlTCACzaX3PY5e8M2b9CHvpK5I&usqp=CAU",
    },
    {
      title: "Party Gown",
      price: "$89.99",
      quality: "Premium Satin",
      category: "Clothing",
      description: "Beautiful party gown with sequin details.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtX6dN7TNEUFrczuDHZsEfxH6gEhGGc2KCiw&s",
    },
    {
      title: "Denim Dress",
      price: "$55.99",
      quality: "Stretchable Denim",
      category: "Clothing",
      description: "Trendy denim dress for casual outings.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pEPrUe284rpdG9FK5WkNXFSCqWAXC3KVGw&s",
    },
    {
      title: "Princess Dress",
      price: "$75.99",
      quality: "Embroidered Tulle",
      category: "Clothing",
      description: "Charming princess dress for special occasions.",
      img: "https://i.pinimg.com/736x/2b/4f/8b/2b4f8b7b936ed6972c68be430b6b808c.jpg",
    },
    {
      title: "Summer Frock",
      price: "$39.99",
      quality: "Lightweight Cotton",
      category: "Clothing",
      description: "Cool summer frock with vibrant patterns.",
      img: "https://img.freepik.com/premium-photo/dress-girl-festive-outfit-hanger-ball-gown-children-high-quality-photo_480356-816.jpg",
    },
    {
      title: "Vintage Polka Dress",
      price: "$49.99",
      quality: "Retro Style",
      category: "Clothing",
      description: "Chic vintage dress with polka dots.",
      img: "https://m.media-amazon.com/images/I/61ieNlADdDL._AC_SR175,263_.jpg",
    },
    {
      title: "Sneakers",
      price: "$69.99",
      quality: "Breathable Material",
      category: "Footwear",
      description: "Stylish sneakers for a comfortable walk.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHfnUiCdDMX0GoGS6TkldIuvtq2aOP50cvg&s",
    },
    {
      title: "Running Shoes",
      price: "$89.99",
      quality: "High-Impact Cushioning",
      category: "Footwear",
      description: "Durable running shoes for long-distance comfort.",
      img: "https://media.azadea.com/i/davinci/54_8488626_000__5401_000__101__01?$prd_large$&fmt=auto",
    },
    {
      title: "Canvas Sneakers",
      price: "$44.99",
      quality: "Lightweight Material",
      category: "Footwear",
      description: "Comfortable canvas sneakers with a classic design for casual outings.",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVnfdzcpasFs9JMX72tiUzqVirPLk3BB00FuJk4gpR_tnFA92_cPE23bHAC5OlwPmipxsiKMt__M8zyZiahM1aojaR7g9Sgs9itqLP9iSl&usqp=CAE",
    },
    {
      title: "Slip-On Sneakers",
      price: "$49.99",
      quality: "Easy-to-Wear Design",
      category: "Footwear",
      description: "Casual slip-on sneakers designed for ultimate comfort and ease, perfect for everyday use.",
      img: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1920,cm-pad_resize/data/Regal-Shoes/15nov2023/9741033_2.jpg",
    },
    {
      title: "Loafers",
      price: "$54.99",
      quality: "Premium Comfort",
      category: "Footwear",
      description: "Stylish loafers with a sleek design, ideal for both casual and semi-formal occasions.",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVumJCuTJN3sWMeEb6ZO3aMBMsA2gwGXqKLI4FaUeOYS6QNaikzwNvUXTYkLBAlDSJwyVfRz1_ZD6pfczohpxbjpd6bHdnRvL76uazr0Ra4DYZfsjblyTUWxc&usqp=CAE",
    },

    {
      title: "Cap",
      price: "$15.99",
      quality: "Adjustable Fit",
      category: "Accessories",
      description: "A trendy cap to complete your casual outfit.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HgGta7oGAxjkMD5l1fNfN68M1jiKbYZguWbt1RTPgeTW1iPmKx7ZnkfJ8XUg8C-dNjE&usqp=CAU",
    },

    {
      title: "Sunglasses",
      price: "$19.99",
      quality: "UV Protection",
      category: "Accessories",
      description: "Stylish sunglasses to elevate your outdoor look.",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRF1-OwHGK9nMtYNInjEfu9CWELSvd-2NEQ7FQ2oFwoeZvTpo5W8lSPvurRdfli8q5xy_63U_3pncZh6X2WR11QmgiUGrUkyLtd3ixCJipV_mSH6MXSxBgRpg&usqp=CAE",
    },
    {
      title: "Hat",
      price: "$34.99",
      quality: "Wide Brim",
      category: "Accessories",
      description: "Classic hat for sunny days.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAfAZm0WD-p5e4Cojf2mOr-9T6IGPfjN4wk66qbmkZE2H8qb6VExIYM6d1Fec3BxgG08&usqp=CAU",
    },
    {
      title: "Beanie",
      price: "$12.99",
      quality: "One Size Fits All",
      category: "Accessories",
      description: "A cozy beanie to keep you warm.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7N4jodomuLOHhaSfNPnvifquX3qftHnCCFHjNuNQ3KU-NGCyHZNd-DGwa39tr0Oopi6g&usqp=CAU",
    },
    {
      title: "Sports Cap",
      price: "$19.99",
      quality: "Breathable Mesh",
      category: "Accessories",
      description: "A sporty cap designed for active lifestyles.",
      img: "https://m.media-amazon.com/images/I/31Qq-22EjIL._AC_UY1100_.jpg",
    },
    {
      title: "Socks",
      price: "$9.99",
      quality: "Cotton Rich",
      category: "Footwear",
      description: "Comfortable socks for daily wear.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMzcy1aLzLgNPso6luPmxbhvaJCV1ohn3kT5CYz6zQ0v9gzMgII-OjfBPaGh6n_izFg4&usqp=CAU",
    },
    {
      title: "Scarf",
      price: "$24.99",
      quality: "Silk Blend",
      category: "Accessories",
      description: "Elegant scarf to complement your look.",
      img: "https://t4.ftcdn.net/jpg/01/21/63/83/360_F_121638391_0vBd0dGaT3rISNCDumNQXJbpVltl7S5x.jpg",
    },
    {
      title: "Sweater",
      price: "$74.99",
      quality: "Wool",
      category: "Winter Wear",
      description: "Warm and stylish sweater for cold weather.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBqYtEVoYnpCH5TXbeoOagyMmUpQQW6Y8Bfbzk2yVAxoly-L-PhBWTff0DtMZBjOl4OE&usqp=CAU",
    },
    {
      title: "Cardigan",
      price: "$69.99",
      quality: "Knitted Wool",
      category: "Winter Wear",
      description: "A cozy cardigan with classic button-down design,",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSS8g30prMHlcgkRGsJpjWW8gETNCzn6wuNGGuHy4scFYn4wyAn4VQiGczFfYbrpfyApDY9ZQUqLWabr3CzL_6qFKNppx1awrvGumlGFlYVtPSarEPT60IQ4Q&usqp=CAc",
    },
    {
      title: "Hooded Sweatshirt",
      price: "$59.99",
      quality: "Fleece Lined",
      category: "Winter Wear",
      description: "Comfortable hooded sweatshirt with fleece lining for extra warmth.",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGlirEsgoxAUmCDJpv-KdgrJdKPr_PgJMEtynf6VON3bH_nIvLVmbLvA9KQtz8a-Mdj09rOo1jWeq_zx1alHFYfJ413ysWTxGcUmbYsP6DGj6ODexe8KPEPIbHxDgpmM303A2VQ3BvMsI&usqp=CAc",
    },
    {
      title: "Turtleneck Sweater",
      price: "$84.99",
      quality: "Merino Wool",
      category: "Winter Wear",
      description: "Elegant turtleneck sweater made of soft merino wool for added comfort.",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhCrzcUlMM9SWooZ_oivTeRjTqugtPOJOlZ6RcZsrkbTUT1e79S8hGNK6iJ2mIrulv7B3G-JmMwS1HeDrROY9un2ENhsYK0GzMV4brI2a1OfUQ_n-DzAUmzBojILGIDxx7TmBob_E&usqp=CAc",
    },
    {
      title: "Pullover Hoodie",
      price: "$64.99",
      quality: "Cotton Blend",
      category: "Winter Wear",
      description: "Casual pullover hoodie designed to keep you warm in style.",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3BTuYK0_QnQnZHHSWUMBp6YkJAE4c1KjrkrSYBrXdMXfvi33895K6BrKBLGSJB9jJ0-YujknWY_XIaO_jljug-WLTGztmMKpO15YSwIqlHhWY51RXBsM-&usqp=CAE",
    },
    {
      title: "Track Pants",
      price: "$44.99",
      quality: "Stretchable",
      category: "Pants",
      description: "Comfortable track pants for workouts.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGkyCZGpKhaOd49MqHgGDX5FnxdiCqvk6x5VJ7c9aJSVG5etEG6BBBhMJVRvMU_MluVw&usqp=CAU",
    },
    {
      title: "Raincoat",
      price: "$59.99",
      quality: "Waterproof",
      category: "Outerwear",
      description: "Lightweight raincoat for wet weather.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouMIv9U2aAupVBYki2SxPPXOQic8-e4D1WLaw7yBJzms2AjMiZIzGOtggNKNCFGlU2Yc&usqp=CAU",
    },
    {
      title: "Windbreaker Jacket",
      price: "$49.99",
      quality: "Windproof",
      category: "Outerwear",
      description: "A lightweight windbreaker jacket to shield.",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxcAXy7JV3aF57au9cogZgMbVCxrqJghlQt1TF_xkbjEWhk2MIZXT6ZDs0dl-TeTHlAIsP4eeh6CMo3h0S1bKAax7AJp4DZx60N-qZq7qRedx9R9OIyeAF&usqp=CAE",
    },
    {
      title: "Hooded Parka",
      price: "$89.99",
      quality: "Insulated",
      category: "Outerwear",
      description: "Warm hooded parka designed to keep you cozy during cold and wet days.",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTry4mAXUVaCBMGZejbbeiE1PQ2taf5YKUqxisKYoqezkdV0VZnrDnpi5MHZkzuxejxX2b_yf1MjKQJ4uVyjYTlCq2OU_1pL7bnRiB-a1hPj-di6ALwVxBflw&usqp=CAE",
    },
    {
      title: "Trench Coat",
      price: "$99.99",
      quality: "Water-Resistant",
      category: "Outerwear",
      description: "Classic trench coat offering elegance and protection from light rain.",
      img: "https://upperclassfashion.co.uk/cdn/shop/files/c98d447e-0769-4038-bb0b-15b43406d4f0.jpg?v=1697714895&width=1500",
    },
    {
      title: "Puffer Jacket",
      price: "$79.99",
      quality: "Water-Repellent",
      category: "Outerwear",
      description: "Cozy puffer jacket with water-repellent fabric, perfect for chilly weather.",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzi-jNVRLtOBGxEhX8CkR3e1a1kjUEVtWT1OT4d2I-fO4Bia3rVTmP2UKdZDvTCfaIqe6F5GdV3Idc2BeaPZd_hJ8kUetRJEsn78fzCQd9x3k_HVcYigLUxfY&usqp=CAE",
    },


  ];

  const handleAddToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.title === product.title);

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    navigate("/cart", { state: { cartItems: cart } });
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.title === product.title)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
    navigate("/wishlist", { state: { wishlistItems: wishlist } });
  };

  const applyDiscount = (price) => {
    const numericPrice = parseFloat(price.replace('$', ''));
    const discount = numericPrice * 0.3;
    return numericPrice - discount;
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <div
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://st.depositphotos.com/1003408/4170/i/450/depositphotos_41701255-stock-photo-interior-of-shopping-mall.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          width: "100%",
          margin: "0",
          padding: "0",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ zIndex: 2 }} className="container">
          <h1 className="fw-bold">Cloth Store</h1>
          <p className="fs-4">Explore our curated collection of stylish and comfortable clothes for all occasions.</p>
        </div>
      </div>
      {/* Category Filter */}
      <section className="container-fluid py-4" style={{ backgroundColor: 'rgb(255 245 245)' }}>
        <h3 className="text-center text-dark fw-bold mb-4" style={{ marginTop: '5px' }}>
          <i className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </i>
          All Categories :
        </h3>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          <button
            className={`btn btn-outline-secondary  hover-red fw-bold ${selectedCategory === "" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Casual Wear" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Casual Wear")}
          >
            Casual Wear
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Pants" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Pants")}
          >
            Pants
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Clothing" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Clothing")}
          >
            Women
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Footwear" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Footwear")}
          >
            Footwear
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Accessories" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Accessories")}
          >
            Accessories
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Outerwear" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Outerwear")}
          >
            Outerwear
          </button>
          <button
            className={`btn btn-outline-secondary hover-red  ${selectedCategory === "Winter Wear" ? "active-category" : ""}`}
            onClick={() => setSelectedCategory("Winter Wear")}
          >
            Winter Wear
          </button>
        </div>
      </section>
      {/* <hr className="border-2"></hr>*/}
      <section className="container">
        <div className="container-fluid py-3 bg-light">
          <div className="row g-4 justify-content-center">
            {filteredProducts.map((product, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card h-100 shadow-lg border-1 rounded-3 position-relative overflow-hidden">
                  <div className="card-img-top-container">
                    <img
                      src={product.img}
                      className="card-img-top img-fluid center-img"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body text-center p-2">
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-muted fs-6 text-decoration-line-through fw-bold">
                      {product.price}
                    </p>
                    {/* Display the discounted price */}
                    <p className="card-text text-success fs-6 fw-bold">
                      <span style={{ color: 'red' }}>30% Off Today : </span>${applyDiscount(product.price).toFixed(2)}
                    </p>
                    <p className="card-text mb-2">
                      <span className="badge bg-dark">{product.quality}</span>
                    </p>
                    <p className="card-text text-secondary">{product.category}</p>
                    <p className="card-text">{product.description}</p>
                    {/* Size Selector Dropdown */}
                    <div className="relative w-64">
                      <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2 fw-bold">Select Size</label>
                      <div className="relative">
                        <select id="size-select" className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 rounded-lg shadow-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-300">
                          <option value="S">Small (S)</option>
                          <option value="M">Medium (M)</option>
                          <option value="L">Large (L)</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mt-4 gap-2">
                      <button
                        className="btn btn-primary w-50"
                        onClick={() => handleAddToCart(product)}
                      >
                        <b>Add to Cart</b>
                      </button>
                      <button
                        className="btn btn-outline-secondary w-50 wishlist-btn"
                        onClick={() => handleAddToWishlist(product)} style={{ color: 'black' }}
                      >
                        <b>Wishlist</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Cloth;
