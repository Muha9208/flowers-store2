import React, {useEffect, useState} from 'react';
import {Drawer} from "antd";
import styles from "./Cart.module.css";

const Cart = ({isOpen, onClose}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsFromLS = JSON.parse(localStorage.getItem("products"));
        setProducts(productsFromLS);
    }, [])

    return (
        <Drawer title={"Ваша корзина"} placement={"right"} open={isOpen} onClose={onClose}>
            <div className={styles.list}>
                {
                    products && products.map((item) => (
                        <div className={styles.item}>
                            <img src={item.preview_image} />
                            <div className={styles.content}>
                                <h4>{item.name}</h4>
                                <p>{item.price} рублей</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Drawer>
    );
};

export default React.memo(Cart);