import React from 'react';

const Merchandise = () => {
  const stanleyCups = [
    {
      name: "Nurse Pink Stanley Cup",
      price: "$35.00",
      image: "/images/merchandise/stan1.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Classic%20Pink%20Stanley%20Cup"
    },
    {
      name: "Nurse Judy Limited Edition",
      price: "Ksh 1500.00",
      image: "/images/merchandise/stan2.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Nurse%20Judy%20Limited%20Edition%20Stanley%20Cup"
    },
    {
      name: "CNA Stanley cup",
      price: "Ksh 1500.00",
      image: "/images/merchandise/stan5.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Quartz%20Stanley%20Tumbler"
    },
    {
      name: "Hammertone Green Stanley",
      price: "Ksh 1500.00",
      image: "/images/merchandise/stan7.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Hammertone%20Green%20Stanley%20Cup"
    },
    {
      name: "Stainless Steel Adventure",
      price: "Ksh 1500.00",
      image: "/images/merchandise/stan5.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Stainless%20Steel%20Adventure%20Stanley%20Cup"
    }
  ];

  const toteBags = [
    {
      name: " Nurse Tote",
      price: "Ksh 500.00",
      image: "/images/merchandise/tote1.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Canvas%20Nurse%20Tote%20Bag"
    },
    {
      name: " Tote",
      price: "Ksh 500.00",
      image: "/images/merchandise/tote2.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Medical%20Themed%20Tote%20Bag"
    },
    {
      name: "Tote Bag",
      price: "Ksh 500.00",
      image: "/images/merchandise/tote3.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Eco-Friendly%20Shopper%20Tote%20Bag"
    },
    {
      name: "Tote Bag",
      price: "Ksh 500.00",
      image: "/images/merchandise/tote4.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Professional%20Nurse%20Bag"
    },
    {
      name: "Tote Bag",
      price: "Ksh 500.00",
      image: "/images/merchandise/tote5.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Weekend%20Carryall%20Tote"
    }
  ];

  const accessories = [
    {
      name: "Keychain",
      price: "Ksh 300.00",
      image: "/images/merchandise/k1.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Keychain"
    },
    {
      name: "Penlight and Scissors",
      price: "Ksh 1500.00",
      image: "/images/merchandise/k2.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Penlight%20and%20Scissors"
    },
    {
      name: "Pencil Pouch",
      price: "Ksh 500.00",
      image: "/images/merchandise/k3.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Pencil%20Pouch"
    },
    {
      name: "Crocs",
      price: "Ksh 1500.00",
      image: "/images/merchandise/k4.jpg",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Crocs"
    },
    {
      name: "Pen Light Set",
      price: "Ksh 1500.00",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      whatsappMessage: "Hi%20Nurse%20Judy!%20I'm%20interested%20in%20the%20Pen%20Light%20Set"
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
        <a 
          href={`https://wa.me/254796523141?text=${product.whatsappMessage}`} 
          className="whatsapp-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Order via WhatsApp
        </a>
      </div>
    </div>
  );

  return (
    <section id="merchandise" className="dynamic-section active">
      <div className="section-header">
        <h2>Our Merchandise</h2>
        <button className="close-section">
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      {/* Stanley Cups */}
      <div className="merch-category">
        <h3 className="category-title">STANLEY CUPS</h3>
        <div className="products-scroll-container">
          {stanleyCups.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Tote Bags */}
      <div className="merch-category">
        <h3 className="category-title">TOTE BAGS</h3>
        <div className="products-scroll-container">
          {toteBags.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Accessories */}
      <div className="merch-category">
        <h3 className="category-title">NURSING ACCESSORIES</h3>
        <div className="products-scroll-container">
          {accessories.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;