import React from "react";
import styles from "./Products.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { productsData } from "../../data/products";

export default function Products() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.productsList}>
                    {productsData.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
