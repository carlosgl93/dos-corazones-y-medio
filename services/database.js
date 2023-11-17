import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const productsCollectionRef = collection(db, 'ange-shop');

class ProductDataService {
  taskPercent = 0;

  storageUrl = '/ange-shop/products/';

  addProduct = async (newProduct) => {
    const images = newProduct.images;
    console.log(images);
    let uploadedImagesPaths = [];
    for (const file of images) {
      try {
        console.log('beggining upload', file);
        const storageRef = ref(storage, `${this.storageUrl}${file.name}`);
        const uploadedImage = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(uploadedImage.ref);
        uploadedImagesPaths = [...uploadedImagesPaths, downloadURL];
        console.log('upload done');
      } catch (error) {
        alert(`hubo un error ${error.message}`);
      }
    }
    newProduct.images = uploadedImagesPaths;

    const productToFirestore = newProduct;
    console.log(productToFirestore);

    return await addDoc(productsCollectionRef, productToFirestore);
  };

  updateProduct = (id, updatedProduct) => {
    const productDoc = doc(db, productsCollectionRef, id);
    return updateDoc(productDoc, updatedProduct);
  };

  deleteProduct = (id) => {
    const productDoc = doc(db, productsCollectionRef, id);
    return deleteDoc(productDoc);
  };

  getAllProducts = () => {
    return getDocs(productsCollectionRef);
  };

  getProduct = (id) => {
    const productDoc = doc(db, productsCollectionRef, id);
    return getDoc(productDoc);
  };
}

export default new ProductDataService();
