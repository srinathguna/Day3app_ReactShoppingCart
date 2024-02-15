import React, { useState } from 'react';
import Card from './Card';

const ProductSection = ({ products,count,setCount }) => {
    return (
        <>
         <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            products.map((item, index)=>{
                                return (
                                <>
                                    <Card item={item} setCount={setCount} />
                                </>
                                )
                            })
                        }
                </div>
            </div>
        </section>   
        </>
    );
};

export default ProductSection;