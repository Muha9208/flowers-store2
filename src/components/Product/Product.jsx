import React from 'react';
import { Button, Card, Typography } from 'antd';
import styles from './Product.module.css';

const Product = ({ product }) => {
  const handleBuyProduct = () => {
    const prevProducts = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...prevProducts, product]));
  };

  return (
    <Card
      cover={<img src={product.preview_image} alt={product.name} className={styles.productImage} />}
      title={<h3>{product.name}</h3>}
      className={styles.productCard}
    >
      <div className={styles.productContent}>
        <Typography.Text className={styles.productTag}>{product.tag}</Typography.Text>
        <Typography.Paragraph className={styles.productText}>
          {product.text}
        </Typography.Paragraph>
        <div className={styles.productInfo}>
          <Typography.Title level={4} className={styles.productPrice}>
            {product.price} рублей
          </Typography.Title>
          <Button onClick={handleBuyProduct} type="primary" className={styles.productButton}>
            Купить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Product;