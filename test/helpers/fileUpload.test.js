import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dxl2e1qyc',
    api_key:'433844632491231',
    api_secret:'K6NDZwVtGgyT0onFw0yqFTkHhQU',
    secure: true
});

describe('test FileUpload', () => { 
    test('Upload file to cloudinary', async() => { 
        const imageUrl = 'https://images.pexels.com/photos/3763421/pexels-photo-3763421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        const resp = await fetch( imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'photo.jpg');
        
        const url = await fileUpload( file );
        expect( typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
        const cloudResponse = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
     })
 });

 test('Return null', async() => { 
        const file = new File([], 'photo.jpg');
        const url = await fileUpload( file );

        expect( url ).toBe(null);
        
  })