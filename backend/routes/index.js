const express = require('express');
const router = express.Router();

const userSignUpController = require("../controllers/user/userSignup")
const userSignInController = require('../controllers/user/userSignIn')
const userDetailsController = require('../controllers/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controllers/user/userLogout')
const allUsers = require('../controllers/user/allUsers')
const updateUser = require('../controllers/user/updateUser')
const UploadProductController = require('../controllers/product/uploadProduct')
const getProductController = require('../controllers/product/getProduct')
const updateProductController = require('../controllers/product/updateProduct');
const getCategoryProduct = require('../controllers/product/getCategoryProduct');
const getCategoryWiseProduct = require('../controllers/product/getCategoryWiseProduct');
const getProductDetails = require('../controllers/product/getProductDetails');
const addToCartController = require('../controllers/user/addToCartController');
const countAddToCartProduct = require('../controllers/user/countAddToCartProduct');
const addToCartViewProduct = require('../controllers/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controllers/user/UpdateAddToCart');
const deleteAddToCartProduct = require('../controllers/user/deleteAddToCartProduct');
const searchProduct = require('../controllers/product/SerachProduct');
const filterProductController = require('../controllers/product/filterProduct');
const paymentController = require('../controllers/order/paymentController');
const webhook = require('../controllers/order/webhook');
const webhooks = require('../controllers/order/webhook');
const orderController = require('../controllers/order/order.controller');


// Route to handle user sign-up
router.post("/signup", userSignUpController);

// Route to handle user sign-in
router.post("/signin", userSignInController);

// Route to fetch user details, requiring authentication via authToken middleware
router.get("/user-details", authToken, userDetailsController);

//Route to handle user log-out
router.get("/userLogout",userLogout)

//Admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

//payment and order
router.post("/checkout",authToken,paymentController)
router.post('/webhook',webhooks) // api/webhook
router.get("/order-list",authToken,orderController)

module.exports = router;
