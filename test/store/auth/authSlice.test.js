import { authSlice } from "../../../src/store/auth/authSlice"
import { demoUser, initialState } from "../../fixtures/autFixures";

describe('Test authSlice', () => { 
    test('return initial state', () => { 

        const state = authSlice.reducer( initialState, {});
        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');


     });

     test('Authentication', () => { 
        console.log(login( demoUser ));
        // const authSlice.reducer( initialState );
      })
 })