import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProductTrackingPage() {
  const [productId, setProductId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackProduct = () => {
    // Simulate product tracking
    const mockTrackingInfo = {
      id: productId,
      status: 'In Transit',
      origin: 'Warehouse A',
      destination: 'Store B',
      lastUpdated: new Date().toLocaleString(),
    };
    setTrackingInfo(mockTrackingInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Tracking</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Product ID"
        value={productId}
        onChangeText={setProductId}
      />
      <Button title="Track Product" onPress={handleTrackProduct} />
      {trackingInfo && (
        <View style={styles.infoContainer}>
          <Text>Product ID: {trackingInfo.id}</Text>
          <Text>Status: {trackingInfo.status}</Text>
          <Text>Origin: {trackingInfo.origin}</Text>
          <Text>Destination: {trackingInfo.destination}</Text>
          <Text>Last Updated: {trackingInfo.lastUpdated}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});