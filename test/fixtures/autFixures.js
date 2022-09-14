export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authentocatedState = {
    status: 'authenticared',
    uid: '123ABC',
    email: 'test@test.com',
    displayName: 'Demo user',
    photoURL: 'https://test.jpg',
    errorMessage: null,
};

export const notAuthentocatedState = {
    status: 'not-authenticared',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};
export const demoUser = {
    uid: 'ABC123',
    email: 'test@test.com',
    displayName: 'Demo use',
    photoURL: 'https://test.jpg',
};