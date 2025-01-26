import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, Grid, TextField, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SupplyChainTracePage = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ productId: '', name: '', currentStage: '' });
  const [updateStage, setUpdateStage] = useState({ productId: '', stage: '', location: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleNewProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
        ...newProduct,
        history: [{ stage: newProduct.currentStage, timestamp: new Date(), location: 'Initial Location' }]
      });
      setNewProduct({ productId: '', name: '', currentStage: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateStage = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${updateStage.productId}/update-stage`, {
        stage: updateStage.stage,
        location: updateStage.location
      });
      setUpdateStage({ productId: '', stage: '', location: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error updating product stage:', error);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>Supply Chain Traceability</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Add New Product</Typography>
            <form className={classes.form} onSubmit={handleNewProductSubmit}>
              <TextField
                label="Product ID"
                value={newProduct.productId}
                onChange={(e) => setNewProduct({ ...newProduct, productId: e.target.value })}
                required
              />
              <TextField
                label="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                required
              />
              <TextField
                label="Initial Stage"
                value={newProduct.currentStage}
                onChange={(e) => setNewProduct({ ...newProduct, currentStage: e.target.value })}
                required
              />
              <Button type="submit" variant="contained" color="primary">Add Product</Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Update Product Stage</Typography>
            <form className={classes.form} onSubmit={handleUpdateStage}>
              <TextField
                label="Product ID"
                value={updateStage.productId}
                onChange={(e) => setUpdateStage({ ...updateStage, productId: e.target.value })}
                required
              />
              <TextField
                label="New Stage"
                value={updateStage.stage}
                onChange={(e) => setUpdateStage({ ...updateStage, stage: e.target.value })}
                required
              />
              <TextField
                label="Location"
                value={updateStage.location}
                onChange={(e) => setUpdateStage({ ...updateStage, location: e.target.value })}
                required
              />
              <Button type="submit" variant="contained" color="primary">Update Stage</Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Product List</Typography>
            <List>
              {products.map((product) => (
                <ListItem button key={product.productId} onClick={() => setSelectedProduct(product)}>
                  <ListItemText primary={product.name} secondary={`ID: ${product.productId}, Current Stage: ${product.currentStage}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Product History</Typography>
            {selectedProduct && (
              <Timeline align="alternate">
                {selectedProduct.history.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">{event.stage}</Typography>
                      <Typography>{new Date(event.timestamp).toLocaleString()}</Typography>
                      <Typography>{event.location}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SupplyChainTracePage;