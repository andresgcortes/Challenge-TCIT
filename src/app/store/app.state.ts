import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface AppState {}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {} 

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];