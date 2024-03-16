import express from "express";
const productRouter = express.Router();
import { getAllProducts,
    createProduct, 
    updateProduct,
    deleteProduct, 
    getProductDetails, 
    createProductReview,
    getProductReviews,
    deleteReview,} from "../controller/productController";

import { isAuthenticated,authorizeAdmin } from "../middleware/userAuth";

productRouter.get("/products",getAllProducts)
productRouter.post("/admin/product/new",isAuthenticated,authorizeAdmin,createProduct)
productRouter.put("/admin/product/:id",isAuthenticated,authorizeAdmin,updateProduct)
productRouter.delete("/admin/product/:id",isAuthenticated,authorizeAdmin,deleteProduct)
productRouter.get("/product/:id",getProductDetails)
productRouter.post("/review/new/:productId",isAuthenticated,createProductReview)
productRouter.get("/reviews/:productId",isAuthenticated,getProductReviews)
productRouter.delete("/review?producId&reviewId",isAuthenticated,deleteReview)


export default productRouter;