import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice'
import { persistStore, persistReducer, createTransform, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsTransform = createTransform(
  // inbound: что сохраняем в storage
  (inboundState) => ({ items: inboundState.items }),
  // outbound: что восстанавливаем в redux state
  (outboundState) => ({ items: outboundState.items }),
  { whitelist: ['contacts'] }
);

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  transforms: [contactsTransform],
}

const rootReducer = {
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
