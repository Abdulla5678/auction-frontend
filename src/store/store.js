import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
});

// import storage from "@react-native-async-storage/async-storage";
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//     persistStore,
// } from "redux-persist";

// const persistConfig = {
//     key: "root",
//     storage: storage,
//     version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, counterReducer);
// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [
//                 FLUSH,
//                 REHYDRATE,
//                 PAUSE,
//                 PERSIST,
//                 PURGE,
//                 REGISTER,
//             ],
//         },
//     }),
// });

// export const persistor = persistStore(store);
