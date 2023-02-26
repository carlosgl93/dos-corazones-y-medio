import { db, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productsCollectionRef = collection(db, "ange-shop");

class ProductDataService {
  taskPercent = 0;

  storageUrl = "/ange-shop/products/";

  addProduct = async (newProduct) => {
    const images = newProduct.images;
    console.log(images);
    for (const file of images) {
      try {
        console.log("beggining upload", file);
        const storageRef = ref(storage, `${this.storageUrl}${file.name}`);
        uploadBytes(storageRef, file).then(alert("images uploaded"));
        console.log("upload done");
      } catch (error) {
        alert(`hubo un error ${error.message}`);
      }

      // uploadTask.on(
      //   "state_changed",
      //   (snapshot) => {
      //     const percent = Math.round(
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //     );

      //     this.taskPercent = percent;
      //   },
      //   (onerror) => console.log("hubo un error subiendo las imagenes"),
      //   () => console.log("imagenes subidas correctamente")
      // );
    }

    const productToFirestore = newProduct;
    delete productToFirestore.images;
    return addDoc(productsCollectionRef, productToFirestore);
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
