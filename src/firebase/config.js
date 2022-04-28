import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAvv_psdYY2emegMdDuPGyLCMtw_muQIa4',
	authDomain: 'vue-js-blog-31513.firebaseapp.com',
	projectId: 'vue-js-blog-31513',
	storageBucket: 'vue-js-blog-31513.appspot.com',
	messagingSenderId: '382404221299',
	appId: '1:382404221299:web:1c750fb858edc88125cd06'
};

//init firebase
const app = initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = getFirestore(app);

export { projectFirestore };
