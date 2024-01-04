import React from "react";
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const ProductComparison = () => {
  const products = [
    {
      name: "Sugar Free Gold Low Calorie",
      description: "Aspartame Sweetener",
      details: "bottle of 500 pellets",
      ratings: "Ratings: 4.5 * 3219",
      price: "Price: €282",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Sugar Free Green Stevia Sweetener",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Sugar Free Natura Low Calorie",
      description: "Sucralose Sweetener | Drop packet of 10 ml Drop",
      ratings: "Ratings: 4.6 * 468",
      price: "Price: €140",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Pain Relief Tablets",
      description: "Acetaminophen 500mg",
      details: "Box of 100 tablets",
      ratings: "Ratings: 4.8 * 120",
      price: "Price: €15.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Antiseptic Disinfectant",
      description: "Iodine Solution",
      details: "Bottle of 250ml",
      ratings: "Ratings: 4.5 * 80",
      price: "Price: €12.50",
      sale: "Sale ends in 2 days",
    },
    {
      name: "First Aid Kit",
      description: "Emergency Medical Supplies",
      ratings: "Ratings: 4.9 * 200",
      price: "Price: €39.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Cough Syrup",
      description: "Honey Lemon Flavor",
      details: "Bottle of 150ml",
      ratings: "Ratings: 4.7 * 150",
      price: "Price: €8.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Bandages Pack",
      description: "Assorted Sizes",
      ratings: "Ratings: 4.6 * 100",
      price: "Price: €5.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Thermometer",
      description: "Digital Infrared",
      ratings: "Ratings: 4.8 * 180",
      price: "Price: €19.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Multivitamin Capsules",
      description: "30-day Supply",
      ratings: "Ratings: 4.5 * 220",
      price: "Price: €24.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Allergy Relief Tablets",
      description: "Loratadine 10mg",
      details: "Box of 60 tablets",
      ratings: "Ratings: 4.7 * 130",
      price: "Price: €18.50",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Vitamin C Chewable Tablets",
      description: "Citrus Flavor",
      details: "Bottle of 120 tablets",
      ratings: "Ratings: 4.8 * 130",
      price: "Price: €12.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Joint Pain Relief Cream",
      description: "Arthritis Formula",
      details: "Jar of 60g",
      ratings: "Ratings: 4.9 * 150",
      price: "Price: €16.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Wound Healing Ointment",
      description: "Antibacterial Formula",
      details: "Tube of 15g",
      ratings: "Ratings: 4.6 * 120",
      price: "Price: €7.99",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Omega-3 Fish Oil Capsules",
      description: "1200mg, 90 Softgels",
      ratings: "Ratings: 4.7 * 180",
      price: "Price: €26.50",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Sugar Free Natura Low Calorie",
      description: "Sucralose Sweetener | Drop packet of 10 ml Drop",
      ratings: "Ratings: 4.6 * 468",
      price: "Price: €140",
      sale: "Sale ends in 2 days",
    },
    // Add details for other products similarly
  ];

  const handleButtonClick = (productName) => {
    // Handle button click, you can perform actions here
    console.log(`Button clicked for: ${productName}`);
  };

  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Button onClick={() => handleButtonClick(product.name)} style={{ width: '100%', textDecoration: 'none' }}>
            <Card style={{ width: '100%' ,marginTop:'70px'}}>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                {product.details && <Typography variant="body2" color="textSecondary">{product.details}</Typography>}
                <Typography variant="body2" color="textSecondary">{product.ratings}</Typography>
                <Typography variant="body2" color="textSecondary">{product.price}</Typography>
                {/* <Typography variant="body2" color="textSecondary">{product.sale}</Typography> */}
              </CardContent>
            </Card>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductComparison;
